import markdownit from "markdown-it";

import { Doc, Header } from "../doc.tsx";

import { render } from "preact";
const md = markdownit();

const text = await fetch("./markdowns/Introduction.md");

const markdown = await text.text();
const result = md.render(markdown);

const mount = document.getElementById("mount");
if (mount) {
  render(<Doc document={result} title="introduction" />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}
