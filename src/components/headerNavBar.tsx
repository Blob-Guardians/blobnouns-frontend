"use client";

import { TabContext, TabState } from "@/app/tabProvider";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FC, useContext } from "react";

const TabLabel = ({ state }: { state: TabState }) => {
  const { setTabState } = useContext(TabContext);
  return (
    <Box padding={2}>
      <Text
        fontSize={"20px"}
        fontWeight={"400"}
        color={"nouns.yellow"}
        onClick={() => setTabState(state)}
      >
        {state}
      </Text>
    </Box>
  );
};

export const HeaderNavBar: FC = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <TabLabel state={TabState.LEARN} />
        <TabLabel state={TabState.BROWSE} />
        <TabLabel state={TabState.SEND} />
      </Flex>
    </Box>
  );
};
