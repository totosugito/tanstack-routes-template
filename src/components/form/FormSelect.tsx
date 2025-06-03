import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormSelectProps} from "@/types/form";
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

const FormSelect = ({form, item, ...props}: { form: any, item: FormSelectProps}) => {
  return (
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <Select
            onValueChange={field.onChange}
            value={field.value}
            {...props}
          >
            <FormControl>
              <SelectTrigger className={"w-full"}>
                <SelectValue placeholder={item.placeholder}/>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                {item?.selectLabel && <SelectLabel>{item?.selectLabel ?? "Choose a filter"}</SelectLabel>}
                {item.options?.map((it: any) => (
                  <SelectItem key={it?.value} value={it?.value}>{it?.label}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormSelect;