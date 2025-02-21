import "./App.css";
import { Button, HStack } from "@chakra-ui/react"
import { ColorModeButton } from "@/components/ui/color-mode"
import AssetInput from "./components/custom/assetInput";


function App() {
  return (
  <div>
    <HStack>
      <AssetInput/>
      <ColorModeButton />
    </HStack>
  </div>
  )
}

export default App;
