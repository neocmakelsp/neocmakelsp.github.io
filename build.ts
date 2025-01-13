import { serveDir } from "@std/http";
import { parseArgs } from "@std/cli";

import {
  GenWebsite,
  refreshMiddleware,
  Route,
  type Script,
  watchChanges,
  WebPageUnit,
} from "@nobody/tananoni";

interface BuildMode {
  debug?: boolean;
  release?: boolean;
}

const input_args = parseArgs(Deno.args) as BuildMode;

const release_mode = input_args.release;

let route_path = "debug";

if (release_mode) {
  route_path = "release";
}

const base_asserts = { path: "static/asserts", alias: "static" };
const base_doc_asserts = { path: "static/asserts_doc", alias: "static" };
const css_asserts = { path: "static/styles" };

const scripts: Script[] = [{ src: "main.js" }];

const docroutine = new Route("doc")
  .appendAssert(base_doc_asserts)
  .appendAssert(css_asserts)
  .appendWebpage(
    new WebPageUnit(
      "./src/doc/introduction.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "introduction.js" }],
    )
      .withTitle("neocmakelsp introduction")
      .withLinkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .then((webpage) => {
        if (!release_mode) {
          webpage.withHotReload();
        }
        return webpage;
      }),
  )
  .appendWebpage(
    new WebPageUnit(
      "./src/doc/installdoc.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "installdoc.js" }],
    )
      .withTitle("How to Install")
      .withLinkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .withHtmlName("install.html")
      .then((webpage) => {
        if (!release_mode) {
          webpage.withHotReload();
        }
        return webpage;
      }),
  )
  .appendWebpage(
    new WebPageUnit(
      "./src/doc/usagedoc.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "usagedoc.js" }],
    )
      .withTitle("How to use")
      .withLinkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .withHtmlName("usage.html")
      .then((webpage) => {
        if (!release_mode) {
          webpage.withHotReload();
        }
        return webpage;
      }),
  )
  .withHotReload(!release_mode)
  .appendAssert({ path: "./markdowns" })
  .appendAssert({ path: "./static/asserts/favicon.ico" });

const homeroute = new Route(route_path)
  .appendAssert(base_asserts)
  .appendAssert(css_asserts)
  .appendWebpage(
    new WebPageUnit(
      "./src/main.tsx",
      [
        { type: "main", id: "mount" },
        { type: "header", id: "header" },
      ],
      scripts,
    )
      .withTitle("neocmakelsp")
      .withLinkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "static/favicon.ico" },
      ])
      .then((webpage) => {
        if (!release_mode) {
          webpage.withHotReload();
        }
        return webpage;
      }),
  )
  .appendRoute(docroutine)
  .withHotReload(!release_mode);

const webgen = new GenWebsite()
  .withLogLevel("info")
  .withImportSource("npm:preact");

await webgen.generate_website(homeroute);

if (release_mode) {
  Deno.exit(0);
}

const fsRoot = `${Deno.cwd()}/dist/debug`;
Deno.serve({ hostname: "localhost", port: 8000 }, async (req) => {
  const res = refreshMiddleware(req);

  if (res) {
    return res;
  }

  return await serveDir(req, { fsRoot });
});

async function fsWatch() {
  await webgen.generate_website(homeroute);
}

await watchChanges({
  watchedDir: "./",
  watchedFileTypes: [".ts", ".tsx", ".css", ".md"],
  excludes: ["dist", "build.ts", "build.ts~"],
  fallback: fsWatch,
});
