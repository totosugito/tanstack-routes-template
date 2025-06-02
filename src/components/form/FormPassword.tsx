import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import React, {useState} from "react";
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {Button} from "@/components/ui/button";
import {FormPasswordProps} from "@/types/form";

const FormPassword = ({form, item, ...props}: { form: any, item: FormPasswordProps | any }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder={item.placeholder}
                className="input w-full"
                readOnly={item?.readonly}
                {...field}
              />

              <Button
                type="button"
                variant={"ghost"}
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 text-neutral-400"
                onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
              </Button>
            </div>
          </FormControl>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormPassword;