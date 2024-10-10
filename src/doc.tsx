import { render } from "preact";

import markdownit from "markdown-it";
const md = markdownit();

const mount = document.getElementById("mount");

const text = await fetch("./markdowns/Install.md");

const markdown = await text.text();
const result = md.render(markdown);

const StringToDomComponent = ({ htmlString }: { htmlString: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

function Doc() {
  return <StringToDomComponent htmlString={result} />;
}

if (mount) {
  render(<Doc />, mount);
}
