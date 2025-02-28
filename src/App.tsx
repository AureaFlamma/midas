import "./App.css";
import { Button, HStack } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import CoinTypeInput from "./components/custom/coin-type-input";
import PriceInput from "./components/custom/price-input";
import SideRibbon from "./components/custom/side-ribbon";


function App() {
  return (
    <HStack h="100%">
      <SideRibbon></SideRibbon>
    </HStack>
  )
}

export default App;
