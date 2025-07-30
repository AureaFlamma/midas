import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { Field } from "@chakra-ui/react"

// ToDo: find a way to hide the stepper
// ToDo: set max programmatically to current year
const YearInput = () => {
  return (
    <Field.Root>
      <Field.Label>Year</Field.Label>
        <NumberInputRoot 
          defaultValue="1800" // ToDo: Programmatically set this value depending on the coin type
          width="200px"
          min={1700}
          max={2025}
        >
          <NumberInputField 
          />
        </NumberInputRoot>
      <Field.HelperText>Enter the year on the coin</Field.HelperText>
    </Field.Root>
  )
}

export default YearInput