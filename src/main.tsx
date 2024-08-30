import { render } from "preact";

import { Home } from "~/pages/home.tsx";

//
// Create a Wrapper component that'll render a <section> tag with some styles
const mount = document.getElementById("mount");

if (mount) {
  render(<App />, mount!);
}

function App() {
  return <Home />;
}
