import {useForm} from "react-hook-form";
import React from "react";
import {Form} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {LoginFormValues, LoginProps} from "@/types/auth";
import {FormInput, FormPassword} from "@/components/form";

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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onFormSubmit)} className={"flex flex-col gap-3"}>
        <FormInput form={form} item={{name: "email", label: "Email", placeholder: "email@example.com"}}/>
        <FormPassword form={form} item={{name: "password", label: "Password", placeholder: "password"}}/>
        <Button type="submit" className={"mt-2"}>Submit</Button>
      </form>
    </Form>
  )
}
export default LoginForm;