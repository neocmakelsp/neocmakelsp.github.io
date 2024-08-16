import { Context, Hono } from "hono";

import { PropsWithChildren } from "react";

import { Home } from "~/pages/home.tsx";

import { Style } from "hono/css";

import Whole from "~/styles/whole.ts";
import { serveStatic } from "hono/deno";

const app = new Hono();

type LayoutProps = {
  title: string;
};

const Layout = ({ title, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <html>
      <head>
        <Style>{Whole}</Style>
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
};

app.use("/static/*", serveStatic({ root: "./" }));
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));

app.get("/", (c: Context) => {
  return c.html(
    <Layout title="neocmakelsp">
      <Home />
    </Layout>,
  );
});

export { app };
