import "./App.css";
import { HStack } from "@chakra-ui/react"
import SideRibbon from "./components/custom/side-ribbon";
import DataTile from "./components/custom/data-tile";


function App() {
  return (
    <HStack h="100%">
      <SideRibbon/>
      <DataTile></DataTile>
    </HStack>
  )
}

export default App;
