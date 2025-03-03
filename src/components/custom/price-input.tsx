import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { Field } from "@chakra-ui/react"

const PriceInput = () => {
  return (
    <Field.Root>
      <Field.Label>Purchase price</Field.Label>
        <NumberInputRoot 
          defaultValue="10" // ToDo: Programmatically set this value depending on the coin type
          width="200px"
          step={10}
          allowMouseWheel
          formatOptions={{
            style: "currency",
            currency: "GBP",
            currencyDisplay: "symbol",
            currencySign: "standard",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }}
        >
          <NumberInputField 
          />
        </NumberInputRoot>
      <Field.HelperText>Enter the amount you paid for the coin</Field.HelperText>
    </Field.Root>
  )
}

export default PriceInput