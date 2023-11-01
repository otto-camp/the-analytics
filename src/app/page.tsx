import CardSection from "@/components/layout/card-section";
import { getXataClient } from "@/xata";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export default async function Home() {
  const xata = await getXataClient();

  const users = await xata.db.Users.getAll();

  return (
    <main className="p-4 space-y-4 min-h-screen">
      <section className="space-y-6">
        <h1 className="text-2xl lg:text-4xl font-semibold">Dashboard</h1>
      </section>
      <CardSection />
      {JSON.stringify(users, null, 2)}
    </main>
  );
}
