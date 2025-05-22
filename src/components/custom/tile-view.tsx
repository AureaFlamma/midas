import { Flex } from "@chakra-ui/react"
import DataTileWithEdit from "./data-tile"

const TileArea = () => {
 // ToDo: Add vaults functionality
  return (
      <Flex p={4} w="100%" h="100%" wrap="wrap" placeSelf={"start"} m={5} gap={5}>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
        <DataTileWithEdit/>
      </Flex>

  )
}

export default TileArea