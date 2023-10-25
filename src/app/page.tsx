import CardSection from "@/components/layout/card-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export default async function Home() {
  return (
    <main className="p-4 space-y-4 min-h-screen">
      <section className="space-y-6">
        <h1 className="text-2xl lg:text-4xl font-semibold">Dashboard</h1>
      </section>
      <CardSection />
    </main>
  );
}
