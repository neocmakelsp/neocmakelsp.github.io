import * as esbuild from "esbuild";
import { denoPlugins } from "esbuild_deno_loader";
import { resolve } from "@std/path";
import { copySync, ensureDir, existsSync } from "@std/fs";

import { parseArgs } from "@std/cli";
import { toSSG } from "hono/deno";

import { app } from "./src/index.tsx";

interface ArgsParse {
  ssg?: boolean;
  aws?: boolean;
}

const input_args = parseArgs(Deno.args) as ArgsParse;

async function buildAws() {
  const distDir = "dist/aws";
  ensureDir(distDir);
  const esBuildOptions: esbuild.BuildOptions = {
    entryPoints: [
      "src/aws.ts",
    ],
    outdir: distDir,
    bundle: true,
    format: "esm",
    logLevel: "verbose",
    plugins: [],
  };

  // Build Deno Plugin Options
  let importMapURL: string | undefined = resolve("./import_map.json");

  if (!existsSync(importMapURL)) {
    importMapURL = undefined;
  }
  const configUrl = resolve("./deno.json");

  esBuildOptions.plugins = [
    ...denoPlugins(
      {
        importMapURL: importMapURL,
        configPath: configUrl,
      },
    ),
  ];

  await esbuild.build({ ...esBuildOptions });
}

function buildSSG() {
  const dir = "dist/ssg";
  const static_dir = "dist/ssg/static";
  ensureDir(dir);
  const options = { overwrite: true };
  copySync("static", static_dir, options);
  copySync("favicon.ico", "dist/ssg/favicon.ico", options);
  toSSG(app, { dir });
}

if (input_args.aws) {
  await buildAws();
} else if (input_args.ssg) {
  buildSSG();
}
