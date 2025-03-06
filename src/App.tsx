import "./App.css";
import { HStack } from "@chakra-ui/react"
import SideRibbon from "./components/custom/side-ribbon";


function App() {
  return (
    <HStack h="100%">
      <SideRibbon></SideRibbon>
    </HStack>
  )
}

export default App;
