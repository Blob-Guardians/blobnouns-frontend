import { TabContext, TabState } from "@/app/tabProvider";
import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";

export const Learn = () => {
  const { tabState } = useContext(TabContext);
  if (tabState !== TabState.LEARN) return null;
  return (
    <Box>
      <Text>Learn</Text>
    </Box>
  );
};
