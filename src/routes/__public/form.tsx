import {createFileRoute} from '@tanstack/react-router'
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {FormCombobox, FormInput, FormPassword, FormSelect, FormTextArea} from "@/components/form";
import {Button} from "@/components/ui/button";
import {Form} from "@/components/ui/form";
import React from "react";

export const Route = createFileRoute('/__public/form')({
  component: RouteComponent,
})

const formSchema = z.object({
  formInput: z.string().email({message: "Invalid email address"}),
  formPassword: z.string().min(1, {message: "Password is required"}),
  formTextArea: z.string().optional(),
  formSelect: z.string().optional(),
  formCombobox: z.string().optional(),
})

function RouteComponent() {
  const form = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formInput: 'test@mail.com',
      formPassword: 'abc',
      formTextArea: '',
      formSelect: '',
      formCombobox: '',
    },
  });

  const onFormSubmit = (data: any) => {
    console.log("onFormSubmit", data);
  }

  const itemList = {
    formInput: {name: "formInput", label: "Email", placeholder: "email@example.com"},
    formPassword: {name: "formPassword", label: "Password", placeholder: "password"},
    formTextArea: {name: "formTextArea", label: "Write description", placeholder: "Description", minRows: 5},
    formSelect: {name: "formSelect", label: "Session Storage", placeholder: "Choose a filter", options: [{label: "Yes", value: "yes"}, {label: "No", value: "no"}], selectLabel: "Choose filter"},
    formCombobox: {name: "formCombobox", label: "Session Storage", placeholder: "Choose a filter",
      options: [{label: "Yes", value: "yes"}, {label: "No", value: "no"}],
      description: "This is a description",
      selectLabel: "Choose filter", searchPlaceholder: "Search from the list..."}
  }
  return (
    <div className={"flex flex-col gap-2 items-center"}>
      <div className={"min-w-md max-w-lg"}>
        <div className={"font-bold text-lg"}>Form Test</div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className={"flex flex-col gap-3"}>
            <FormInput form={form} item={itemList.formInput}/>
            <FormPassword form={form} item={itemList.formPassword}/>
            <FormTextArea form={form} item={itemList.formTextArea}/>
            <FormSelect form={form} item={itemList.formSelect}/>
            <FormCombobox form={form} item={itemList.formCombobox}/>
            <Button type="submit" className={"mt-2"}>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
