import { Button, Card, HStack, StackSeparator } from "@chakra-ui/react"
import { Badge } from "@chakra-ui/react"
import { FormatNumber, Stat } from "@chakra-ui/react"
import { DataList } from "@chakra-ui/react"
import { IoArrowUp } from "react-icons/io5";



const SpotValueStat = () => {
  return (
    <Stat.Root>
    <Stat.Label>Spot value</Stat.Label>
    <Stat.ValueText>
      <FormatNumber value={450} style="currency" currency="GBP" />
    </Stat.ValueText>
  </Stat.Root>
  )
}

// ToDo: might change the last one into a Stat component for emphasis
const CoinStatsSeparated = () => {
  return (
    <DataList.Root orientation="vertical" gap={3} size="md">
      <DataList.Item>
      <DataList.ItemLabel>Metal weight</DataList.ItemLabel>
      <DataList.ItemValue>7.39g</DataList.ItemValue>
        <DataList.ItemLabel>Spot price</DataList.ItemLabel>
        <DataList.ItemValue>£234</DataList.ItemValue>
        <DataList.ItemLabel>Change</DataList.ItemLabel>
        <DataList.ItemValue gap={2} >
          +£234 
          <Badge colorPalette="green">
          <IoArrowUp />
            20%
          </Badge>
        </DataList.ItemValue>
      </DataList.Item>
    </DataList.Root>
  )
}



const DataTile = () => {
  return (
    <Card.Root>
      <Card.Header px={3} pt={3}>
        <HStack gap={2}>
          <Badge colorPalette="grey" variant="solid">sov-1871-xhh</Badge>
          <Badge colorPalette="yellow">Au</Badge>
        </HStack>
        {/* <SpotValueStat/> */}
      </Card.Header>
      <Card.Body px= {3}> 
        <CoinStatsSeparated/>
      </Card.Body>
      <Card.Footer px={3}>
        <Button colorPalette="teal" size="2xs" variant="outline">Details</Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default DataTile