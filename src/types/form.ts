
export type FormInputProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  readonly?: boolean
}

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
  readonly?: boolean
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