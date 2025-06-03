import {createFileRoute} from '@tanstack/react-router'
import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  FormCombobox,
  FormDatePicker,
  FormDateRangePicker,
  FormInput,
  FormMultiSelect,
  FormPassword,
  FormSelect,
  FormTextArea
} from "@/components/form";
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
  formMultiSelect: z.array(z.string()).optional(),
  formDatePicker: z.date().optional(),
  formDateRangePicker: z.object({from: z.date(), to: z.date()}).optional(),
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
      formMultiSelect: [],
      formDatePicker: new Date('01/12/2025'),
      formDateRangePicker: {from: new Date('01/12/2025'), to: new Date('01/12/2025')},
    },
  });

  const onFormSubmit = (data: any) => {
    console.log("onFormSubmit", data);
  }

  const readOnly = false;
  const itemList = {
    formInput: {name: "formInput", label: "Email", placeholder: "email@example.com", readonly: readOnly},
    formPassword: {name: "formPassword", label: "Password", placeholder: "password", readonly: readOnly},
    formTextArea: {name: "formTextArea", label: "Write description", placeholder: "Description", minRows: 5, readonly: readOnly},
    formSelect: {
      name: "formSelect",
      label: "Session select",
      placeholder: "Choose a filter",
      options: [{label: "Yes", value: "yes"}, {label: "No", value: "no"}],
      selectLabel: "Choose filter",
      readonly: readOnly
    },
    formCombobox: {
      name: "formCombobox", label: "Session combobox", placeholder: "Choose a filter",
      options: [{label: "Yes", value: "yes"}, {label: "No", value: "no"}],
      description: "This is a description",
      selectLabel: "Choose filter", searchPlaceholder: "Search from the list...",
      readonly: readOnly
    },
    formMultiSelect: {
      name: "formMultiSelect", label: "Session multi select", placeholder: "Choose a filter",
      options: [{label: "Yes", value: "yes"}, {label: "No", value: "no"}, {label: "Maybe", value: "maybe"}],
      description: "This is a description",
      selectLabel: "Choose filter", searchPlaceholder: "Search from the list...",
      maxCount: 1, readonly: true
      // TODO: readOnly not working
    },
    formDatePicker: {
      name: "formDatePicker", label: "Session date picker", placeholder: "Choose a filter",
      description: "This is a description", readonly: false
    },
    formDateRangePicker: {
      name: "formDateRangePicker", label: "Session date range picker", placeholder: "Choose a filter",
      description: "This is a description", readonly: false, from: new Date('01/12/2025'), to: new Date('01/12/2025')
    },
  }

  return (
    <div className={"flex flex-col gap-2 items-center"}>
      <div className={"min-w-md max-w-lg"}>
        <div className={"font-bold text-lg"}>Form Test</div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onFormSubmit)} className={"flex flex-col gap-3"}>
            <FormInput form={form} item={itemList.formInput} disabled={true}/>
            <FormPassword form={form} item={itemList.formPassword}/>
            <FormTextArea form={form} item={itemList.formTextArea}/>
            <FormSelect form={form} item={itemList.formSelect}/>
            <FormCombobox form={form} item={itemList.formCombobox}/>
            <FormMultiSelect form={form} item={itemList.formMultiSelect}/>
            <FormDatePicker form={form} item={itemList.formDatePicker}/>
            <FormDateRangePicker form={form} item={itemList.formDateRangePicker}/>
            <Button type="submit" className={"mt-2"}>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
