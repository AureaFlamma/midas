import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { Field } from "@chakra-ui/react"

export interface IYearInput {
  defaultValue?: number;
  label?: string;
  helperText?: string;
}

export const defaultValues: IYearInput = {
  defaultValue: 1800,
  label: "Year",
  helperText: "Enter the year on the coin",
}

// ToDo: find a way to hide the stepper
// TODO: Difference between field and fieldset for all 4 components.
const YearInput = ({ defaultValue, label, helperText }: IYearInput) => {
  return (
    <Field.Root>
      <Field.Label>{label || defaultValues.label}</Field.Label>
        <NumberInputRoot 
          defaultValue={defaultValue?.toString() || defaultValues.defaultValue?.toString()}
          width="200px"
          min={1700}
          max={new Date().getFullYear()}
        >
          <NumberInputField 
          />
        </NumberInputRoot>
      <Field.HelperText>{helperText || defaultValues.helperText}</Field.HelperText>
    </Field.Root>
  )
}

export default YearInput