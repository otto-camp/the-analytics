import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await fetch("http://localhost:3000/api/ping").then(
    async (res) => await res.json()
  );
  return (
    <main className="p-4 grid gap-4">{JSON.stringify(data, null, 2)}</main>
  );
}
