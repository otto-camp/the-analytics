import { CalendarDateRangePicker } from "@/components/date-range-picker";
import CardSection from "@/components/layout/card-section";
import { getXataClient } from "@/xata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: { website: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props) {
  return {
    title: params.website.toLocaleUpperCase(),
  };
}

export default async function Page({ params, searchParams }: Props) {
  const xata = await getXataClient();

  const users = await xata.db.Users.getAll();
  return (
    <main className="p-4 space-y-4 min-h-screen">
      <section className="flex items-center justify-between gap-2 border-b pb-4">
        <h1 className="text-2xl lg:text-4xl font-semibold capitalize">
          {params.website}
        </h1>
        <CalendarDateRangePicker />
      </section>
      <CardSection users={users.length} />
    </main>
  );
}
