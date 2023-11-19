"use client";

import { TabContext, TabState } from "@/app/tabProvider";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { FC, useContext } from "react";
import NextLink from "next/link";

const TabLabel = ({ href, label }: { href: string; label: string }) => {
  // const { setTabState } = useContext(TabContext);
  return (
    <Link
      padding={2}
      as={NextLink}
      fontSize={"20px"}
      fontWeight={"400"}
      color={"nouns.yellow"}
      // onClick={() => setTabState(state)}
      href={href}
    >
      {label}
    </Link>
  );
};

export const HeaderNavBar: FC = () => {
  return (
    <Box>
      <Flex justifyContent={"space-between"}>
        <TabLabel label="Learn" href="/learn" />
        <TabLabel label="Browse" href="/browse" />
        <TabLabel label="Send" href="/send" />
      </Flex>
    </Box>
  );
};
