import { env } from "@/env.mjs";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/ping`).then(
    async (res) => await res.json()
  );
  console.log(data);

  return (
    <main className="p-4 grid gap-4">
      <h1>Hello World</h1>
    </main>
  );
}
