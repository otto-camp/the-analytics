import { env } from "@/env.mjs";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", logger());

app.get("/ping", async (c) => {
  const ip = c.req.header("X-Forwarded-For");

  const geo = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/geo`, {
    method: "POST",
    body: JSON.stringify({ ip: ip }),
  }).then(async (res) => await res.json());

  return c.json({ ip: ip, geo: geo });
});

export const GET = handle(app);
