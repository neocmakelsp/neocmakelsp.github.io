import { app } from "./src/index.tsx";

Deno.serve(app.fetch);
