import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { Field } from "@chakra-ui/react"
import { yearInputCopy as copy} from "@/copy/componentsCopy"

// ToDo: find a way to hide the stepper
// TODO: Difference between field and fieldset for all 4 components.
const YearInput = () => {
  return (
    <Field.Root>
      <Field.Label>{copy.label}</Field.Label>
        <NumberInputRoot 
          defaultValue={copy.defaultValue?.toString()}
          width="200px"
          min={1700}
          max={new Date().getFullYear()}
        >
          <NumberInputField />
        </NumberInputRoot>
      <Field.HelperText>{copy.helperText}</Field.HelperText>
    </Field.Root>
  )
}

export default YearInput