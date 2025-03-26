import "./App.css";
import { HStack } from "@chakra-ui/react";
import SideRibbon from "./components/custom/side-ribbon";
import TileArea from "./components/custom/tile-view";
import OverviewSmall from "./components/custom/overview";
import Dashboard from "./components/custom/dashboard-view";
import { useState } from "react";

function App() {
  const [showOverview, setShowOverview] = useState(true);
  const [showTileArea, setShowTileArea] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleOverviewClick = () => {
    setShowOverview(false);
    setShowTileArea(false);
    setShowDashboard(true);
  };

  const handleDashboardClick = () => {
    setShowOverview(true);
    setShowTileArea(true);
    setShowDashboard(false);
  };

  return (
    <HStack h="100%">
      <SideRibbon />
        {showTileArea && <TileArea />}
        {showDashboard && <Dashboard onClick={handleDashboardClick}/>}
        {showOverview && <OverviewSmall onClick={handleOverviewClick} />}
    </HStack>
  );
}

export default App;
