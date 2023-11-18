"use client";
import React from "react";
import { Flex, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { ConnectWallet } from "./ConnectWallet";
import { HeaderNavBar } from "@/components/headerNavBar";

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
        <Box flex={1}>
          <Text fontSize={"30px"} fontWeight={"400"} color={"nouns.yellow"}>
            Blobnous
          </Text>
        </Box>
        <Box>
          <HeaderNavBar />
        </Box>

        <Box flex={1}>
          <Flex justifyContent={"flex-end"}>
            <ConnectWallet />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
