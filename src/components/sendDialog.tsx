import { Box, Button, Flex, Text, Input } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";

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

const InputItem = ({
  label,
  value,
  cb,
  type,
}: {
  label: String;
  value: string | number;
  cb: (_: string) => void;
  type: "number" | "text";
}) => {
  return (
    <Flex width="80%" marginTop={2} justifyContent={"space-between"}>
      <Text flex={1} fontWeight={400} fontSize={14} color="nouns.pink">
        {label}
      </Text>
      <Input
        border="1px"
        borderRadius="6px"
        color={"nouns.pink"}
        height="25px"
        width="280px"
        borderColor="nouns.pink"
        type={type}
        value={value}
        onChange={(e) => cb(e.target.value)}
      ></Input>
    </Flex>
  );
};

const SendButton = ({
  label,
  cb,
  isActive,
}: {
  label: string;
  cb: () => void;
  isActive: boolean;
}) => {
  const backgroundColor = isActive ? "nouns.pink" : "#FF1AD240";
  return (
    <Button
      width="125px"
      height="32px"
      onClick={cb}
      fontWeight={400}
      fontSize="14px"
      disabled={!isActive}
      marginLeft={1}
      marginRight={1}
      backgroundColor={backgroundColor}
      _hover={{ backgroundColor: backgroundColor }}
      color={"white"}
    >
      {label}
    </Button>
  );
};

export const SendDialog = () => {
  const [recipeint, setRecipient] = useState("");
  const [maxFee, setMaxFee] = useState(0);
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

        <InputItem
          label="Send To"
          value={recipeint}
          cb={(v: string) => setRecipient(v)}
          type="text"
        />
        <InputItem
          label="Max fee per blob gas (gwei)"
          value={maxFee}
          cb={(v: string) => {
            setMaxFee(Number(v));
          }}
          type="number"
        />

        <Flex width="80%" marginTop={2} justifyContent={"center"}>
          <SendButton
            label="Send Text or Image"
            isActive={false}
            cb={() => {}}
          />
          <SendButton
            label="Send"
            cb={() => {
              console.log("send");
            }}
            isActive={true}
          ></SendButton>
        </Flex>
      </Flex>
    </Box>
  );
};
