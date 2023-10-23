import { LocationInfo } from "@/type";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", logger());

app.get("/ping", async (c) => {
  const ip = c.req.header("X-Forwarded-For");

  const geo = (await fetch("http://localhost:3000/api/geo", {
    method: "POST",
    body: JSON.stringify({ ip: ip }),
  }).then(async (res) => await res.json())) ;

  return c.json({ ip: ip, geo: geo });
});

export const GET = handle(app);
