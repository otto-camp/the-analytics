import { LocationInfo } from "@/type";
import { getXataClient } from "@/xata";
import type {
  BotInfo,
  BrowserInfo,
  NodeInfo,
  ReactNativeInfo,
  SearchBotDeviceInfo,
} from "detect-browser";
import { Context, Env } from "hono";
import { setCookie } from "hono/cookie";

export async function hitEndpoint(
  cookieToken: string | undefined,
  geo: LocationInfo,
  agent:
    | BrowserInfo
    | SearchBotDeviceInfo
    | BotInfo
    | NodeInfo
    | ReactNativeInfo
    | null,
  c: Context<Env, any, {}>
) {
  if (cookieToken) {
    await createPageView(cookieToken, c);
  } else {
    await createUser(geo, agent, c).then(async (res) => {
      await createPageView(res.id, c);
    });
  }
}

async function createUser(
  geo: LocationInfo,
  agent:
    | BrowserInfo
    | SearchBotDeviceInfo
    | BotInfo
    | NodeInfo
    | ReactNativeInfo
    | null,
  c: Context<Env, any, {}>
) {
  const xata = getXataClient();

  const geoRes = await xata.db.Geographic_Locations.create({
    country: geo.country,
    region: geo.region,
    city: geo.city,
  });

  const userRes = await xata.db.Users.create({
    ip: geo.ip,
    platform: agent?.name,
    os: agent?.os,
    geo: geoRes.id,
  });

  setCookie(c, "user_token", userRes.id, {
    expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
  });

  return userRes;
}

async function createPageView(
  cookieToken: string | undefined,
  c: Context<Env, any, {}>
) {
  const xata = getXataClient();

  const refRes = await xata.db.Referrals.create({
    source_url: c.req.header("Origin"),
    referral_url: c.req.raw.referrer,
  });

  const pageRes = await xata.db.Page_Views.create({
    user_id: cookieToken,
    url: c.req.path,
    referral_id: refRes.id,
  });

  return pageRes;
}
