import { handle } from "hono/aws-lambda";
import { app } from "./index.tsx";

export const handler = handle(app);
