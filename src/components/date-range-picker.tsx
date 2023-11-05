"use client";

import { cn } from "@/lib/utils";
import { format, startOfToday, subMonths } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { DateRange } from "react-day-picker";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function CalendarDateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement> & {}) {
  const defaultDate = {
    from: subMonths(startOfToday(), 1),
    to: new Date(),
  };
  const [date, setDate] = React.useState<DateRange | undefined>(defaultDate);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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

  const handleParamChange = (newDate: DateRange | undefined) => {
    router.push(pathname + "?" + createQueryString(newDate ?? defaultDate));
    setDate((prevDate) => newDate);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleParamChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
