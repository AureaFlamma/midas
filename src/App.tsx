import "./App.css";
import { Button, HStack } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import CoinTypeInput from "./components/custom/coin-type-input";
import PriceInput from "./components/custom/price-input";


function App() {
  return (
  <div>
    <HStack>
      <CoinTypeInput/>
      <PriceInput/>
    </HStack>
      <ColorModeButton />
  </div>
  )
}

export default App;
