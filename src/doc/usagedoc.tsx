import markdownit from "markdown-it";

import { Doc, Header } from "~/pages/doc.tsx";
import { render } from "preact";
import markdown from "../../markdowns/Usage.md" with { type: "text" };
const md = markdownit();

const result = md.render(markdown);
const mount = document.getElementById("mount");

if (mount) {
  render(<Doc documentContext={result} title="usage" />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}
