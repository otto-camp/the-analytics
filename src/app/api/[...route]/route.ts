import { getGeoInfo } from "@/lib/get-geo-info";
import { Hono } from "hono";
import { getCookie } from "hono/cookie";
import { logger } from "hono/logger";
import { handle } from "hono/vercel";
import { detect } from "detect-browser";
import { HTTPException } from "hono/http-exception";
import { hitEndpoint } from "@/lib/hit-endpoint";

export const runtime = "edge";

const app = new Hono().basePath("/api/");

app.use("*", logger());

app.get("ping", async (c) => {
  const ip = c.req.header("X-Forwarded-For");
  const geo = await getGeoInfo(ip);
  return c.json({ geo: geo });
});

app.get("hit-endpoint", async (c) => {
  const ip = c.req.header("X-Forwarded-For");
  const token = getCookie(c, "user_token");
  const geo = await getGeoInfo(ip);
  const agent = detect(c.req.header("user-agent"));

  try {
    const res = await hitEndpoint(token, geo, agent, c);
    return c.json({ res });
  } catch (error) {
    throw new HTTPException(401, {
      message: `User can't created. Details:\n ${error} \n ${token}`,
    });
  }
});

export const GET = handle(app);
