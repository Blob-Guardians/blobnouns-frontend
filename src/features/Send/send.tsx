import { TabContext, TabState } from "@/app/tabProvider";
import { Box, Text, Container, Flex } from "@chakra-ui/react";
import { useContext } from "react";

export const Send = () => {
  const { tabState } = useContext(TabContext);
  if (tabState !== TabState.SEND) return null;
  return (
    <Container margin={"auto"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box>
          <Text>Sent</Text>
        </Box>
      </Flex>
    </Container>
  );
};
