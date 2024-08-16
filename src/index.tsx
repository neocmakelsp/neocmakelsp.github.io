import { Context, Hono } from "hono";

import { PropsWithChildren } from "react";

import { Home } from "~/pages/home.tsx";

import { Style } from "hono/css";

import Whole from "~/styles/whole.ts";

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

app.get("/", (c: Context) => {
  return c.html(
    <Layout title="Hello Deno!">
      <Home label="abcd" />
    </Layout>,
  );
});

export { app };
