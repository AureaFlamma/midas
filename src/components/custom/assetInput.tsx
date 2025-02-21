import { Fieldset, HStack } from "@chakra-ui/react"
import { createListCollection } from "@chakra-ui/react"

import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { Field } from "@/components/ui/field"

// TODO: Abstract
const coinTypes = createListCollection({
  items: [
    { label: "Britannia", value: "britannia" },
    { label: "Sovereign", value: "sovereign" },
    { label: "Half sovereign", value: "half-sovereign" },
  ],
})


const AssetInput = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        <HStack>
        <Field label="Coin Type">
        <SelectRoot collection={coinTypes}>
            <SelectTrigger>
              <SelectValueText />
            </SelectTrigger>
            <SelectContent>
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

export default AssetInput