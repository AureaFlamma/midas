import "./App.css";
import { HStack } from "@chakra-ui/react"
import SideRibbon from "./components/custom/side-ribbon";
import DataTile from "./components/custom/data-tile";
import TileArea from "./components/custom/tile-view";
import OverviewSmall from "./components/custom/overview";
import Dashboard from "./components/custom/dashboard-view";

function App() {
  return (
    <HStack h="100%">
      <SideRibbon/>
      {/* <TileArea/> */}
      <Dashboard/>
      {/* <OverviewSmall/> */}
    </HStack>
  )
}

export default App;
