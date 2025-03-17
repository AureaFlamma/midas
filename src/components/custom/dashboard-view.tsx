import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import { DecorativeBox } from "./decorative-box";



const Dashboard = () => {
  return (
    <SimpleGrid columns={2} templateRows="repeat(2, 1fr)" gap="40px" width="100%" height="100%">
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />
    </SimpleGrid>
  );
}

export default Dashboard;