import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React from "react";
import {FormInputProps} from "@/types/form";

const FormInput = ({
                     form,
                     item,
                     ...props
                   }: FormInputProps) => {
  return (
    <FormField
      control={form.control}
      name={item.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <Input
              placeholder={item.placeholder}
              {...field}
              {...props}
            />
          </FormControl>
          {item.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;