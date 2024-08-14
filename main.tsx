import { Context, Hono } from "hono";

import { html } from "hono/html";

import { Home } from "./mycomponent.tsx";

const app = new Hono();

type Props = {
  title: string;
  // deno-lint-ignore no-explicit-any
  children?: any;
};

const Layout = (props: Props) =>
  html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`;

app.get("/", (c: Context) => {
  return c.html(
    <Layout title="Hello Deno!">
      <h1>Hono JSX example</h1>
      <Home label="abcd">
        <h1>ABCD</h1>
      </Home>
    </Layout>,
  );
});

Deno.serve(app.fetch);
