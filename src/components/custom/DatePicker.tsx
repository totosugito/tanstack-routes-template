"use client";

import {Calendar} from "@/components/ui/calendar";
import * as React from "react";
import "react-day-picker/style.css";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {CalendarIcon} from "lucide-react";
import {addYears} from "date-fns";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {DropdownNavProps, DropdownProps} from "react-day-picker";
import {Input} from "@/components/ui/input";
import {useTypedDate} from "@/lib/react-typed-date";

type DatePickerProps = {
  value: Date;
  onChange: (date: Date | undefined) => void;
  disabled?: boolean;
};


export default function DatePicker({value, ...props}: DatePickerProps) {
  // const [date, setDate] = React.useState<Date>(new Date(value))
  const {inputProps} = useTypedDate({
    value: value || undefined,
    onChange: (e: any) => {
      props.onChange(e);
    },
    format: "DD/MM/YYYY",
  });

  const handleCalendarChange = (
    _value: string | number,
    _e: React.ChangeEventHandler<HTMLSelectElement>,
  ) => {
    const _event = {
      target: {
        value: String(_value),
      },
    } as React.ChangeEvent<HTMLSelectElement>;
    _e(_event);
  };

  return (
    <div className={"relative"}>
      <Input {...inputProps} className={"w-full"} disabled={props?.disabled}/>
      <Popover>
        <PopoverTrigger asChild>
          <Button type={"button"} variant={"link"} disabled={props?.disabled}
                  className="absolute inset-y-0 right-0 flex items-center text-muted-foreground">
            <CalendarIcon className="h-4 w-4"/>
          </Button>

        </PopoverTrigger>
        <PopoverContent className="w-auto p-2" align="start">
          {/*<Calendar mode="single" selected={date} onSelect={setDate} autoFocus />*/}
          <Calendar
            mode="single"
            selected={value || undefined}
            onSelect={(e: any) => {
              props.onChange(e);
            }}
            className="p-2"
            // classNames={{
            // month_caption: "mx-0",
            // }}
            captionLayout="dropdown"
            defaultMonth={value || new Date()}
            startMonth={new Date(1980, 6)}
            endMonth={addYears(new Date(), 10)}
            hideNavigation
            components={{
              DropdownNav: (props: DropdownNavProps) => {
                return <div className="flex items-center gap-2">{props.children}</div>;
              },
              Dropdown: (props: DropdownProps) => {
                return (
                  <Select
                    value={String(props.value)}
                    onValueChange={(value) => {
                      if (props.onChange) {
                        handleCalendarChange(value, props.onChange);
                      }
                    }}
                  >
                    <SelectTrigger className="h-8 first:grow">
                      <SelectValue/>
                    </SelectTrigger>
                    <SelectContent
                      className="max-h-[min(26rem,var(--radix-select-content-available-height))]">
                      {props.options?.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={String(option.value)}
                          disabled={option.disabled}
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              },
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
