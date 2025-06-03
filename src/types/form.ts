import React from "react";
import { UseFormReturn } from "react-hook-form";

export type FormInputProps = {
  form: UseFormReturn<any>;
  item: {
    name: string;
    label: string;
    placeholder?: string;
    description?: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>

export type FormPasswordProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
}

export type FormTextAreaProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
  minRows?: number
  maxRows?: number
}

export type FormSelectProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
  selectLabel?: string
  options?: Array<{label: string, value: string}>
}

export type FormComboboxProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
  selectLabel?: string
  options?: Array<{label: string, value: string}>
  searchPlaceholder?: string
}

export type FormMultiSelectProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
  selectLabel?: string
  options?: Array<{label: string, value: string}>
  searchPlaceholder?: string
  maxCount?: number
}

export type FormDatePickerProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
}

export type FormDateRangePickerProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
  from?: Date
  to?: Date
}