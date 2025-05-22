import {
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Box, Button, HStack, Stack, VStack } from "@chakra-ui/react";
import { PiCoinVerticalBold } from "react-icons/pi";
import CoinTypeInput from "./coin-type-input";
import DateInput from "./date-input";
import PriceInput from "./price-input";
import YearInput from "./year-input";

const SideRibbon = () => {
  return (
  <Box h="100vh" p="2" color="white" borderRight="1px solid #7D7D7D">
  <VStack >
    <DialogRoot key="x" size="xl" placement="center" >
      <DialogTrigger>
        <Button colorPalette="teal" rounded="full" h="40px" w="40px"> 
          <PiCoinVerticalBold />
        </Button>
      </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New coin</DialogTitle>
          </DialogHeader>
          <DialogBody gap="0">
            <Stack>
            <HStack gap={0}>
              <CoinTypeInput />
              <PriceInput />
              <YearInput />
              <DateInput />
              {/* <DatePicker selectedDate={startDate} onChange={(date) => setStartDate(date as Date)}/> */}
            </HStack>
            <Button colorPalette="teal" variant="subtle" placeSelf="end">Add</Button>
            </Stack>
          </DialogBody>
        </DialogContent>
    </DialogRoot>
  </VStack>
  </Box>

)}

export default SideRibbon;