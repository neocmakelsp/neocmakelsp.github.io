import { render } from "preact";

import { Header, Home } from "~/pages/home.tsx";

const mount = document.getElementById("mount");

if (mount) {
  render(<Home />, mount);
}

const header = document.getElementById("header");

if (header) {
  render(<Header />, header);
}
