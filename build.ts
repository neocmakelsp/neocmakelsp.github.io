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
const css_asserts = { path: "static/styles" };

const scripts: Script[] = [{ src: "main.js" }];

const docroutine = new Route("doc")
  .append_assert(base_asserts)
  .append_assert(css_asserts)
  .append_webpage(
    new WebPageUnit(
      "./src/doc/introduction.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "introduction.js" }],
    )
      .with_title("neocmakelsp introduction").with_linkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .then((webpage) => {
        if (!release_mode) {
          webpage.with_hotReload();
        }
        return webpage;
      }),
  )
  .append_webpage(
    new WebPageUnit(
      "./src/doc/installdoc.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "installdoc.js" }],
    )
      .with_title("How to Install")
      .with_linkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .with_htmlName("install.html")
      .then((webpage) => {
        if (!release_mode) {
          webpage.with_hotReload();
        }
        return webpage;
      }),
  )
  .append_webpage(
    new WebPageUnit(
      "./src/doc/usagedoc.tsx",
      [{ type: "header", id: "header" }, { type: "main", id: "mount" }],
      [{ type: "module", src: "usagedoc.js" }],
    )
      .with_title("How to use").with_linkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "favicon.ico" },
      ])
      .with_htmlName("usage.html")
      .then((webpage) => {
        if (!release_mode) {
          webpage.with_hotReload();
        }
        return webpage;
      }),
  )
  .with_hotReload(!release_mode)
  .append_assert({ path: "./markdowns" })
  .append_assert({ path: "./static/asserts/favicon.ico" });

const homeroute = new Route(route_path)
  .append_assert(base_asserts)
  .append_assert(css_asserts)
  .append_webpage(
    new WebPageUnit(
      "./src/main.tsx",
      [
        { type: "main", id: "mount" },
        { type: "header", id: "header" },
      ],
      scripts,
    )
      .with_title("neocmakelsp")
      .with_linkInfos([
        { type: "stylesheet", href: "styles/global.css" },
        { type: "icon", href: "static/favicon.ico" },
      ])
      .then((webpage) => {
        if (!release_mode) {
          webpage.with_hotReload();
        }
        return webpage;
      }),
  )
  .append_route(docroutine)
  .with_hotReload(!release_mode);

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
