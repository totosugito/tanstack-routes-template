import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormDateRangePickerProps} from "@/types/form";
import {DatePickerWithRange} from "@/components/custom/DatePickerWithRange";

const FormDateRangePicker = ({form, item, ...props} : {form: any, item: FormDateRangePickerProps | any}) => {
  return(
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <DatePickerWithRange {...props} fromDate={item.from} toDate={item.to} onDateChange={(v) => {
              field.onChange(v);
            }}/>
          </FormControl>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormDateRangePicker;