import { Box, Button, HStack, Stack, VStack } from "@chakra-ui/react"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PiCoinVerticalBold } from "react-icons/pi";

const SideRibbon = () => (
  <Box h="100vh" p="2" color="white" borderRight="1px solid #7D7D7D">
  <VStack >
    <DialogRoot key="x" size="xl" placement="center">
      <DialogTrigger>
        <Button colorPalette="teal" rounded="full" h="40px" w="40px"> 
          <PiCoinVerticalBold />
        </Button>
      </DialogTrigger>
        <DialogContent>
        <DialogHeader>
                <DialogTitle>Dialog Title</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </DialogBody>
        </DialogContent>
    </DialogRoot>
  </VStack>
  </Box>
)

export default SideRibbon;