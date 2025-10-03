import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { Field } from "@chakra-ui/react"
import { yearInputData } from "@/copy/components"

// ToDo: find a way to hide the stepper
// TODO: Difference between field and fieldset for all 4 components.
const YearInput = () => {
  return (
    <Field.Root>
      <Field.Label>{yearInputData.label}</Field.Label>
        <NumberInputRoot 
          defaultValue={yearInputData.defaultValue?.toString()}
          width="200px"
          min={1700}
          max={new Date().getFullYear()}
        >
          <NumberInputField 
          />
        </NumberInputRoot>
      <Field.HelperText>{yearInputData.helperText}</Field.HelperText>
    </Field.Root>
  )
}

export default YearInput