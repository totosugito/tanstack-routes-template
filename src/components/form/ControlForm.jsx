import React, {forwardRef} from "react";
import {Controller} from "react-hook-form";
import {useTranslation} from "react-i18next";
import FormInput from "./FormInput";
import FormPassword from "./FormPassword";
// import FormInputNumber from "./FormInputNumber";
import FormCombobox from "./FormCombobox";
import FormSelect from "./FormSelect";
import FormMultiSelect from "./FormMultiSelect";
import FormDatePicker from "./FormDatePicker";
import {twMerge} from "tailwind-merge";
// import FormTextAreaAuto from "./FormTextAreaAuto";
import FormTextArea from "./FormTextArea";

const ControlForm = forwardRef(({form, value, optionList, ...props}, ref) => {
  const {t} = useTranslation();
  return (
    <div className={"flex flex-col gap-y-1"}>
      {/*<div className={twMerge("sh-form-label", props?.labelStyle)}>*/}
      {/*  {value?.label} {value?.required ? "*" : ""}*/}
      {/*</div>*/}
      <Controller
        name={value.name}
        control={form.control}
        rules={value?.required ? {required: `${value.label} ${t("message.isNeeded")}`} : {}}
        render={({field, fieldState: {error}}) => {
          if (value.type === "password") {
            return (<FormPassword {...field} form={form} item={value} error={error} readOnly={props.readOnly ?? false}/>);
          }
          // else if (value.type === "number") {
          //   return (<FormInputNumber {...field} item={value} error={error} readOnly={props.readOnly ?? false}/>);
          // }
          else if (value.type === "select") {
            return (<FormSelect {...field} form={form} item={{...value, options: optionList}} error={error} readOnly={props.readOnly ?? false}/>);
          } else if (value.type === "combobox") {
            return (<FormCombobox {...field} form={form} item={{...value, options: optionList}} error={error} readOnly={props.readOnly ?? false}/>);
          } else if (value.type === "multiselect") {
            return (<FormMultiSelect {...field} form={form} item={{...value, options: optionList}} error={error} readOnly={props.readOnly ?? false}/>);
          } else if (value.type === "date") {
            return (<FormDatePicker {...field} form={form} item={value} error={error} readOnly={props.readOnly ?? false}/>);
          } else if (value.type === "textarea") {
            return (<FormTextArea {...field} form={form} item={value} error={error} readOnly={props.readOnly ?? false}/>);
          }
          // else if (value.type === "textarea-auto") {
          //   return (<FormTextAreaAuto {...field} item={value} error={error} readOnly={props.readOnly ?? false}/>);
          // }
          else {
            return (<FormInput {...field} form={form} item={value} error={error} disabled={props?.disabled ?? false}/>);
          }
        }}
      />
    </div>
  );
})
export default ControlForm
