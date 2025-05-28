import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormTextAreaProps} from "@/types/form";
import {Textarea} from "@/components/ui/textarea";

const FormTextArea = ({form, item, ...props} : {form: any, item: FormTextAreaProps | any}) => {
  const defaultRows = item?.minRows ?? 5;
  const maxRows = item?.maxRows ?? 10;

  return(
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={item.placeholder}
              className="input w-full"
              rows={defaultRows}
              {...field}
            />
          </FormControl>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormTextArea;