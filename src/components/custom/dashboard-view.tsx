import { AbsoluteCenter, Badge, Box, Center, CloseButton, DataList, FormatNumber, Grid, GridItem, Heading, HStack, IconButton, SimpleGrid, Square, Stat, VStack } from "@chakra-ui/react";
import { DecorativeBox } from "./decorative-box";
import { IoArrowUp } from "react-icons/io5";
import { CgMinimize } from "react-icons/cg";



const Dashboard = () => {
  return (
    <VStack w="100%" h="100vh" bg="red">
      <Heading size="3xl">Overview</Heading>
    <SimpleGrid columns={6} gap="20px" width="100%" height="100%" mt={10}>
      <DecorativeBox height="20" />
      <DecorativeBox height="20" />

    </SimpleGrid>
    </VStack>
  );
}


const Dashboard1 = () => {
  return (
    <VStack w="100%" h="100vh">
      <Heading size="3xl">Overview</Heading>
      <Grid
          h="100%"
          w="100%"
          templateRows="repeat(6, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={4}
          p={4}
      >
      <GridItem>
      <Center h="100%" borderColor="white" borderWidth="1px" rounded="lg">
        <Box>
        <Stat.Root>
      <Stat.Label>Portfolio value </Stat.Label>
        <Stat.ValueText>
          <FormatNumber value={8456.4} style="currency" currency="GBP" />
        </Stat.ValueText>
      <HStack>
        <Badge colorPalette="green" gap="0">
          <Stat.UpIndicator />
          12%
        </Badge>
      <Stat.HelpText>since last month</Stat.HelpText>
      </HStack>
    </Stat.Root>
        </Box>
      </Center>
      </GridItem>
      <GridItem>
      <Center h="100%" borderColor="white" borderWidth="1px" rounded="lg">
        <Box>
        <Stat.Root size="lg">
        <HStack justify="space-between">
        <Stat.Label>
          Gold price
          <Badge colorPalette="yellow">Au</Badge>
        </Stat.Label>
        </HStack>
        <Stat.ValueText alignItems="baseline">
          <FormatNumber value={1700} style="currency" currency="GBP" />
          <Stat.ValueUnit>/toz</Stat.ValueUnit>
        </Stat.ValueText>
        </Stat.Root>
        </Box>
      </Center>
      </GridItem>
      <GridItem>
        <DecorativeBox>3</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>4</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>5</DecorativeBox>
      </GridItem>
      <GridItem rowSpan={3}>
      <VStack h="100%" w="100%" borderColor="white" borderWidth="1px" rounded="lg" alignItems={"flex-start"} p={4}> {/* ToDo: align can be aliased*/}
      <Heading>Vault breakdown</Heading>
        <DataList.Root orientation="horizontal">
        <DataList.Item>
          <DataList.ItemLabel>Gold weight</DataList.ItemLabel>
          <DataList.ItemValue>7.39g</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Vault value</DataList.ItemLabel>
          <DataList.ItemValue>£8500</DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Fiat balance</DataList.ItemLabel>
          <DataList.ItemValue>
            <Badge colorPalette="green">
            <IoArrowUp/>
            £100
            </Badge>
          </DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>% balance</DataList.ItemLabel>
          <DataList.ItemValue>
            <Badge colorPalette="green">
            <IoArrowUp/>
            50%
            </Badge>
          </DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>Fiat change total</DataList.ItemLabel>
          <DataList.ItemValue>
            <Badge colorPalette="green">
            <IoArrowUp/>
            £240
            </Badge>
          </DataList.ItemValue>
        </DataList.Item>
        <DataList.Item>
          <DataList.ItemLabel>% change total</DataList.ItemLabel>
          <DataList.ItemValue>
            <Badge colorPalette="green">
            <IoArrowUp/>
            24%
            </Badge>
          </DataList.ItemValue>
        </DataList.Item>
        </DataList.Root>
      </VStack>
      </GridItem>
      <GridItem rowSpan={3} colSpan={3}>
        <Center  h="100%" w="100%" borderColor="white" borderWidth="1px" rounded="lg">
          <Heading size="xl">
            Graph goes here
          </Heading>
        </Center>
      </GridItem>
      <GridItem>
        <DecorativeBox>8</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>9</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>10</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>11</DecorativeBox>
      </GridItem>
      <GridItem>
        <DecorativeBox>12</DecorativeBox>
      </GridItem>
      </Grid>
      <IconButton 
  aria-label="Search database"
  position="fixed"
  bottom="5"
  left="50%"
  transform="translateX(-50%)"
  variant="surface"
  colorPalette={"teal"}
  overflow="hidden" // Important for containing the shimmer effect
  css={{
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: 'all 0.7s ease',
      zIndex: 1,
    },
    '&:hover': {
      cursor: 'pointer',
      boxShadow: 'md',
      transform: 'translateX(-50%) scale(1.02)',
      '&::before': {
        left: '100%',
      }
    }
  }}
>
  <CgMinimize />
</IconButton>
    </VStack>
  );
}
export default Dashboard1;