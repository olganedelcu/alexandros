import * as React from "react";
import { cn } from "@/lib/utils";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className={cn("p-3", props.className)}
    {...props}
  />
));
Calendar.displayName = "Calendar";

export { Calendar };
