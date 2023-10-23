import { env } from "@/env.mjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { ip } = await req.json();

  try {
    const res = await fetch(
      `https://ipinfo.io/${ip}?token=${env.IPINFO_TOKEN}`
    ).then(async (res) => await res.json());

    return NextResponse.json(res);
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}
