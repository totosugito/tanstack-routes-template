import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormDatePickerProps} from "@/types/form";
import DatePicker from "@/components/custom/DatePicker";

const FormDatePicker = ({form, item, ...props} : {form: any, item: FormDatePickerProps | any}) => {
  return(
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <DatePicker {...props} value={field.value} onChange={field.onChange} readonly={item?.readonly}/>
          </FormControl>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormDatePicker;