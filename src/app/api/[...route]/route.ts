import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/ping", (c) => {
  return c.json({
    message: c.status,
  });
});

export const GET = handle(app);
