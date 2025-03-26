import { Badge, DataList, HStack, IconButton } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";
import { RiFullscreenFill } from "react-icons/ri";
import { IoArrowUp } from "react-icons/io5";

const OverviewSmall = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card.Root
      onClick={onClick}
      position="fixed"
      bottom="5"
      left="50%"
      transform="translateX(-50%)"
      variant="outline"
      overflow="hidden"
      transition="transform 0.3s ease"
      css={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-100%",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          transition: "all 0.7s ease",
          zIndex: 1,
        },
        "&:hover": {
          cursor: "pointer",
          boxShadow: "md",
          transform: "translateX(-50%) scale(1.02)",
          "&::before": {
            left: "100%",
          },
        },
      }}
    >
      <Card.Header mt="1" pt="1" pr="2">
        <HStack width="100%" justify="space-between">
          Overview
          <IconButton
            aria-label="Expand"
            variant="ghost"
            color="current"
            size="xs"
            placeSelf={"end"}
          >
            <RiFullscreenFill />
          </IconButton>
        </HStack>
      </Card.Header>
      <Card.Body>
        <DataList.Root size="xs" orientation="horizontal" gap={2}>
          <HStack>
            <DataList.ItemLabel>Gold spot price</DataList.ItemLabel>
            <DataList.ItemValue gap={2}>
              £1700/toz
              <Badge colorPalette="green" variant="outline">
                <IoArrowUp />
                20% in April
              </Badge>
            </DataList.ItemValue>
          </HStack>
          <HStack>
            <DataList.ItemLabel>Portfolio weight</DataList.ItemLabel>
            <DataList.ItemValue>200g</DataList.ItemValue>
          </HStack>
          <HStack>
            <DataList.ItemLabel>Portfolio value</DataList.ItemLabel>
            <DataList.ItemValue gap={2}>
              £3000
              <Badge colorPalette="green" variant="outline">
                <IoArrowUp />
                20%
              </Badge>
            </DataList.ItemValue>
          </HStack>
        </DataList.Root>
      </Card.Body>
    </Card.Root>
  );
};

export default OverviewSmall;
