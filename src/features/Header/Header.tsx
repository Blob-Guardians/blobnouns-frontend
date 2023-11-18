"use client";
import React from "react";
import { Flex, Image, Box, useBreakpointValue } from "@chakra-ui/react";
import { ConnectWallet } from "./ConnectWallet";

export const Header = () => {
  return (
    <Box bg="nouns.pink" borderBottom="1px solid" borderColor="gray.700">
      <Flex
        align="center"
        justifyContent={"space-between"}
        pt={[4, 4, 0]}
        px={4}
        flexWrap="wrap"
      >
        <Box flex={1}>Blobnous</Box>
        <Box flex={1}>Blobnous</Box>
        <Box flex={1}>
          <Flex justifyContent={"flex-end"}>
            <ConnectWallet />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
