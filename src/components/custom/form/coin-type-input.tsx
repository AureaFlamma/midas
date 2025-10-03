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
import { coinTypeInputCopy as copy} from "@/copy/componentsCopy"

const CoinTypeInput = () => {

  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <HStack>
          <Field label={copy.label} helperText={copy.helperText}>
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