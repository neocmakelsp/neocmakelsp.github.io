import { app } from "./src/index.tsx";

const server = Deno.serve(app.fetch);

Deno.addSignalListener("SIGINT", () => {
  server.shutdown();
  console.log("Existing....");
  console.log();
  Deno.exit();
});
