import * as React from "react";
import {addDays, format} from "date-fns";
import {CalendarIcon} from "lucide-react";
import {DateRange} from "react-day-picker";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Calendar} from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
    fromDate?: Date;
    toDate?: Date;
    onDateChange?: (date: DateRange | undefined) => void;
}

export function DatePickerWithRange({
                                        className,
                                        fromDate,
                                        toDate,
                                        onDateChange,
                                    }: DatePickerWithRangeProps) {
    const [date, setDate] = React.useState<DateRange | undefined>(() => ({
        from: fromDate || new Date(2024, 0, 1),
        to: toDate || addDays(new Date(2024, 0, 1), 7),
    }));

    const handleDateChange = React.useCallback(
        (newDate: DateRange | undefined) => {
            setDate(newDate);
            onDateChange?.(newDate);
        },
        [onDateChange]
    );

    const handleSelect = (nextRange?: DateRange, selectedDay?: Date) => {
        // setDate((range) => {
        //     if (range.from && range.to) return { from: selectedDay };
        //     if (range.from && !range.to) return { from: range.from, to: selectedDay };
        //     if (!range.from && !range.to) return { from: selectedDay };
        //     return nextRange as DateRange;
        // });

        setDate((range ) => {
            let newRange: DateRange;

            if (range?.from && range?.to) {
                newRange = { from: selectedDay };
            } else if (range?.from && !range?.to) {
                newRange = { from: range.from, to: selectedDay };
            } else if (!range?.from && !range?.to) {
                newRange = { from: selectedDay };
            } else {
                newRange = nextRange as DateRange;
            }

            // Call handler with computed newRange
            handleDateChange(newRange);

            return newRange;
        });
    };

    const handleDayClick = (day: Date) => {
        setDate((prev) => {
            if (prev?.to) {
                // If 'to' is already set, reset the range
                return {from: day, to: undefined};
            } else if (prev?.from) {
                // If 'from' is set and 'to' is not
                if (day < prev.from) {
                    // If the new day is before the 'from' date, reset the range
                    return {from: day, to: undefined};
                } else {
                    // Otherwise, set the 'to' date
                    return {from: prev.from, to: day};
                }
            } else {
                // If neither 'from' nor 'to' is set, set 'from'
                return {from: day, to: undefined};
            }
        });
    }

    return (
        <div className={cn("grid gap-2", className)}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon/>
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
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        // onSelect={handleDateChange}
                        numberOfMonths={2}
                        onSelect={handleSelect}
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}
