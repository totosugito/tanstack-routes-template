import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormMultiSelectProps} from "@/types/form";
import {MultiSelect} from "@/components/custom/MultiSelect";

const FormMultiSelect = ({form, item, ...props} : {form: any, item: FormMultiSelectProps | any}) => {
  return(
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <MultiSelect
              {...props}
              options={item?.options}
              value={field.value}
              onValueChange={field.onChange}
              placeholder={item?.placeholder}
              maxCount={item?.maxCount ?? 3}/>
          </FormControl>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormMultiSelect;