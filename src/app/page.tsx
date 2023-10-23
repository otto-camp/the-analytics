import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export default async function Home() {
  return (
    <main className="p-4 grid gap-4">
      <h1>Hello World</h1>
    </main>
  );
}
