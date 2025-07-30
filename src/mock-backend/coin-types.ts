import { createListCollection } from "@ark-ui/react";

  const coinTypes = createListCollection({
    items: [
      { label: "Britannia", value: "britannia" },
      { label: "Sovereign", value: "sovereign" },
      { label: "Half sovereign", value: "half-sovereign" },
    ],
  });

  export default coinTypes