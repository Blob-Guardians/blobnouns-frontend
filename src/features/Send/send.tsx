import { TabContext, TabState } from "@/app/tabProvider";
import { SendDialog } from "@/components/sendDialog";
import { Box, Text, Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";

export const Send = () => {
  const { tabState } = useContext(TabContext);
  if (tabState !== TabState.SEND) return null;
  return (
    <Container>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <SendDialog />
      </Flex>
    </Container>
  );
};
