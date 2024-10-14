import markdownit from "markdown-it";

const md = markdownit();
import { Doc, Header } from "~/pages/doc.tsx";
import { render } from "preact";

const text = await fetch("./markdowns/Install.md");

const markdown = await text.text();
const result = md.render(markdown);
const mount = document.getElementById("mount");
if (mount) {
  render(<Doc documentContext={result} title="install" />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}
