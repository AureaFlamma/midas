import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button, CloseButton, VStack } from "@chakra-ui/react";
import CoinTypeInput from "./coin-type-input";
import DateInput from "./date-input";
import PriceInput from "./price-input";
import YearInput from "./year-input";

// ToDo: Layout of the dialog
const EditDataTile = ({ dialogTrigger }: { dialogTrigger: React.ReactNode }) => {
  return (
    <DialogRoot key="y" size="xs" placement="center">
      <DialogTrigger>
      { dialogTrigger }
      </DialogTrigger>
      <DialogContent>
        <DialogCloseTrigger asChild>
          <CloseButton p={0} m={0} alignSelf={'end'} />
        </DialogCloseTrigger>
        <DialogHeader>
          <DialogTitle>Edit asset</DialogTitle>
        </DialogHeader>
        <DialogBody gap="0">
            <VStack gap={0} align={'center'} justify={'center'}>
              <CoinTypeInput />
              <PriceInput />
              <YearInput />
              <DateInput />
            </VStack>
          <Button colorPalette='teal' variant='subtle' placeSelf='end' mt="10">
            Update asset
          </Button>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
}

export default EditDataTile;