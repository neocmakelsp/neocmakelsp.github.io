import markdownit from "markdown-it";

const md = markdownit();

const text = await fetch("./markdowns/Usage.md");

const markdown = await text.text();
const result = md.render(markdown);

export { result };
