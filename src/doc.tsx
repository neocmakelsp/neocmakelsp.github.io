import { render } from "preact";

const mount = document.getElementById("mount");

const text = await fetch("./markdowns/Install.md");

const markdown = await text.text();

function Doc() {
  return <h1>{markdown}</h1>;
}

if (mount) {
  render(<Doc />, mount);
}
