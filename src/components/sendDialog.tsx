import { Box, Flex, Text, Input } from "@chakra-ui/react";
import Image from "next/image";

const GasLabel = () => {
  return (
    <Flex
      marginLeft={5}
      marginTop={2}
      position={"absolute"}
      justifyContent={"flex-start"}
    >
      <Image alt="" src="/gas.png" width={16} height={16} />
      <Text
        paddingLeft={2}
        color="nouns.pink"
        fontWeight={400}
        fontSize="16px"
        lineHeight="21px"
      >
        Blob gas
      </Text>
    </Flex>
  );
};

const InputItem = ({ label, cb }: { label: String; cb: () => void }) => {
  return (
    <Flex width="80%" marginTop={2} justifyContent={"space-between"}>
      <Text flex={1} fontWeight={400} fontSize={14} color="nouns.pink">
        {label}
      </Text>
      <Input
        border="1px"
        borderRadius="6px"
        height="25px"
        width="280px"
        borderColor="nouns.pink"
      ></Input>
    </Flex>
  );
};

export const SendDialog = () => {
  return (
    <Box
      border="1px"
      borderColor="nouns.pink"
      width="605px"
      height="241px"
      borderRadius={20}
      bg={"white"}
    >
      <GasLabel />
      <Flex
        justifyContent={"center"}
        direction={"column"}
        alignItems={"center"}
      >
        <Text
          color="nouns.pink"
          fontWeight={400}
          fontSize={30}
          marginTop={2}
          marginBottom={2}
        >
          Send a Blob
        </Text>

        <InputItem label="Send To" cb={() => {}} />
        <InputItem label="Max fee per blob gas (gwei)" cb={() => {}} />
      </Flex>
    </Box>
  );
};
