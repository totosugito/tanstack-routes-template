import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import React from "react";
import {FormComboboxProps} from "@/types/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {Check, ChevronsUpDown} from "lucide-react"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command";
import {twMerge} from "tailwind-merge";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const FormCombobox = ({form, item, ...props}: { form: any, item: FormComboboxProps | any }) => {
  const [open, setOpen] = React.useState(false)

  const selectedRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (open) {
      requestAnimationFrame(() => {
        if (selectedRef.current) {
          selectedRef.current.scrollIntoView({block: "nearest"});
        }
      });
    }
  }, [open]);

  return (
    <FormField
      control={form.control}
      name={item.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{item.label}</FormLabel>
          <Popover open={open} onOpenChange={setOpen} {...props} modal={true}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className={twMerge(`w-full justify-between font-normal ${field.value ? "" : "text-muted-foreground"}`)}
                >
                  {field.value
                    ? item?.options.find((it: any) => it.value === field.value)?.label
                    : (item?.placeholder ?? "Search...")}
                  <ChevronsUpDown className="opacity-50"/>
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 overflow-y-auto">
              <Command>
                <CommandInput placeholder={item?.searchPlaceholder ?? "Search..."} className="h-9"/>
                <CommandList>
                  <CommandEmpty>No item found.</CommandEmpty>
                  <CommandGroup>
                    {item?.options.map((it: any) => (
                      <CommandItem
                        ref={field.value === it.value ? selectedRef : null}
                        key={it.value}
                        value={it.value}
                        onSelect={(currentValue) => {
                          const newValue = currentValue === field.value ? "" : currentValue;
                          form.setValue(field.name, newValue);
                          setOpen(false);
                        }}
                        // className={twMerge(`${field.value === it.value ? "bg-chart-2 text-background" : ""}`)}
                      >
                        {it.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            field.value === it.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {item?.description && <FormDescription>{item.description}</FormDescription>}
          <FormMessage/>
        </FormItem>
      )}
    />
  )
}
export default FormCombobox;