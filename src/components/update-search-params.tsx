"use client";

import React from "react";
import { format, startOfToday, subMonths } from "date-fns";
import { CalendarDateRangePicker } from "./date-range-picker";
import { DateRange } from "react-day-picker";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function UpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultDate = {
    from: subMonths(startOfToday(), 1),
    to: new Date(),
  };

  const [date, setDate] = React.useState<DateRange | undefined>(defaultDate);

  const createQueryString = React.useCallback(
    (dateRange: DateRange) => {
      const params = new URLSearchParams(searchParams);
      if (dateRange.from) {
        params.set("from", format(dateRange.from, "yyyy-MM-dd"));
      }
      if (dateRange.to) {
        params.set("to", format(dateRange.to, "yyyy-MM-dd"));
      }

      return params.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    router.push(pathname + "?" + createQueryString(date ?? defaultDate));
  }, [date]);

  return <CalendarDateRangePicker date={date} setDate={setDate} />;
}
