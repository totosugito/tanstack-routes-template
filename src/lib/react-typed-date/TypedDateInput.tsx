import React from "react";
import { useTypedDate } from "./useTypedDate";
import { TypedDateProps } from "./types";

export function TypedDateInput({
  value,
  onChange,
  className,
  ...props
}: Omit<
  React.ComponentProps<"input">,
  | "value"
  | "onChange"
  | "onKeyDown"
  | "ref"
  | "type"
  | "onMouseUp"
  | "onBlur"
  | "onFocus"
> &
  TypedDateProps) {
  const { inputProps } = useTypedDate({
    value,
    onChange,
  });

  return <input className={className} {...inputProps} {...props} />;
}
