import { Fieldset, HStack } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Field } from "@/components/ui/field"


// ToDo: Remove helpertext and find a way to align it without this hack

const CoinTypeInput = () => {

  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <HStack>
        <Field label="Coin Type" helperText="Select the type of coin you are adding">
        <SelectRoot collection={coinTypes} w="200px">
            <SelectTrigger>
              <SelectValueText />
            </SelectTrigger>
            <SelectContent zIndex="popover">
              {
                coinTypes.items.map((item) => (
                  <SelectItem key={item.value} item={item}>
                    {item.label}
                  </SelectItem>
                ))
              }
            </SelectContent>
          </SelectRoot>
        </Field>
        </HStack>
      </Fieldset.Content>
      
    </Fieldset.Root>
  )
}

export default CoinTypeInput