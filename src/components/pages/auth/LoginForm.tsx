import {useForm} from "react-hook-form";
import React, {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {FaEye, FaEyeSlash} from "react-icons/fa6";
import {LoginFormValues, LoginProps} from "@/types/auth";

const loginFormSchema = z.object({
  email: z.string().email({message: "Invalid email address"}),
  password: z.string().min(1, {message: "Password is required"}),
})

const LoginForm: React.FC<LoginProps> = ({onFormSubmit}) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className={"flex flex-col gap-3"}>
        <FormField
          control={form.control}
          name={"email"}
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="email@example.com"
                  className="input w-full bg-input"
                  {...field}

                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"password"}
          render={({field}) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input w-full bg-input"
                    {...field}

                  />
                  <Button
                    type="button"
                    variant={"ghost"}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-neutral-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <FaEyeSlash/> : <FaEye/>}
                  </Button>
                </div>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />

        <Button type="submit" className={"mt-2"}>Submit</Button>
      </form>
    </Form>
  )
}
export default LoginForm;