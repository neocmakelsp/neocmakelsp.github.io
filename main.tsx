import { app } from "./src/index.tsx";

const server = Deno.serve({ hostname: "localhost", port: 8000 }, app.fetch);

Deno.addSignalListener("SIGINT", () => {
  server.shutdown();
  console.log("Existing....");
  console.log();
  Deno.exit();
});
