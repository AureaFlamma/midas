import { Fieldset, HStack } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Field } from "@/components/ui/field"
import coinTypes from "@/mock-backend/coin-types"

export interface ICoinTypeInput {
  helperText?: string;
  label?: string;
}

export const defaultValues: ICoinTypeInput = {
  helperText: "Select the type of coin you are adding",
  label: "Coin Type",
}

const CoinTypeInput = ({ helperText, label }: ICoinTypeInput) => {

  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <HStack>
          <Field label={label || defaultValues.label} helperText={helperText || defaultValues.helperText}>
            <SelectRoot collection={coinTypes} w="200px">
              <SelectTrigger>
                <SelectValueText />
              </SelectTrigger>
              <SelectContent zIndex="popover">
                {coinTypes.items.map((item) => (
                  <SelectItem key={item.value} item={item}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Field>
        </HStack>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}

export default CoinTypeInput