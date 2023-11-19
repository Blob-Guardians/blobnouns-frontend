"use client";
// import { TabContext, TabState } from "@/app/tabProvider";
import { Box, Text } from "@chakra-ui/react";
// import { useContext } from "react";

export const Browse = () => {
  // const { tabState } = useContext(TabContext);
  // if (tabState !== TabState.BROWSE) return null;
  return (
    <Box>
      <Text color="nouns.pink">Browse</Text>
    </Box>
  );
};
