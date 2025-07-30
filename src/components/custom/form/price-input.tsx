import { NumberInputField, NumberInputRoot } from "@/components/ui/number-input"
import { SupportedCurrency } from "@/config/global-types"
import { Field } from "@chakra-ui/react"

interface IPriceInputProps {
  defaultPrice?: number,
  currency?: SupportedCurrency,
  helperText?: string,
  label?: string,
}

const defaultValues: IPriceInputProps = {
  defaultPrice: 1700,
  currency: SupportedCurrency.GBP,
  helperText: 'Enter the amount you paid for the coin',
  label: 'Purchase price'

}

const PriceInput = ({defaultPrice, currency, helperText, label} :IPriceInputProps) => {
  return (
    <Field.Root>
      <Field.Label>{label || defaultValues.label}</Field.Label>
        <NumberInputRoot 
          defaultValue={defaultPrice?.toString() || defaultValues.toString()}
          width="200px"
          step={10}
          allowMouseWheel
          formatOptions={{
            style: "currency",
            currency: currency || defaultValues.currency,
            currencyDisplay: "symbol",
            currencySign: "standard",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }}
        >
          <NumberInputField 
          />
        </NumberInputRoot>
      <Field.HelperText>{helperText || defaultValues.helperText}</Field.HelperText>
    </Field.Root>
  )
}

export default PriceInput