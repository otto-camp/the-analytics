import { getXataClient } from "@/xata";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "The Analytics",
};

export default async function Home() {
  const xata = getXataClient();
  
  return (
    <main className="p-4 grid gap-4 grid-cols-3">
      
    </main>
  );
}
