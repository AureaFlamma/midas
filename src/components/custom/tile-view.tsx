import { Flex } from "@chakra-ui/react"
import DataTile from "./data-tile"

const TileArea = () => {
  const data = [
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 60, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 120, changePercentage: 30},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 160, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 234, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 234, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 60, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 120, changePercentage: 30},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 160, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 234, changePercentage: 20},
    {metalWeight: 7.39, metalType: "Gold", spotPrice: 234, change: 234, changePercentage: 20},
  ]
 // ToDo: Add vaults functionality
  return (
      <Flex p={4} w="100%" h="100%" wrap="wrap" placeSelf={"start"} m={5} gap={5}>
        {data.map((d, i) => (
          <DataTile key={i}/>
        ))}
      </Flex>

  )
}

export default TileArea