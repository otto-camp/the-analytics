import { env } from "@/env.mjs";
import { LocationInfo } from "@/types/type";

export async function getGeoInfo(ip: string | undefined | null) {
  if (ip === undefined || ip === null) {
    throw new Error("Ip should be string.");
  }

  const geo = (await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/geo`, {
    method: "POST",
    body: JSON.stringify({ ip: ip }),
  }).then(async (res) => await res.json())) as LocationInfo;

  return geo;
}
