import { Context, Hono } from "hono";

import { Home } from "~/pages/home.tsx";

import { Style } from "hono/css";

const app = new Hono();

type Props = {
  title: string;
  // deno-lint-ignore no-explicit-any
  children?: any;
};

const Layout = ({ title, children }: Props) => {
  return (
    <html>
      <head>
        <Style />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

app.get("/", (c: Context) => {
  return c.html(
    <Layout title="Hello Deno!">
      <Home label="abcd">
        <h1>ABCDEF</h1>
      </Home>
    </Layout>,
  );
});

export { app };
