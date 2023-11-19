"use client";

import { Learn } from "../Learn/learn";
import { Send } from "../Send/send";
import { Browse } from "../Browse/browse";
import { Flex, Container, Card } from "@chakra-ui/react";
import { CreateNounButton } from "@/components/CreateNounButton";
import { BlobTransactionCard } from "@/components/BlobTransactionCard";

export default function HomePage() {
  return (
    <Flex
      flexDirection="column"
      flex={1}
      minHeight="100vh"
      bg="#FEE3F3"
      justify="center"
    >
      <Container>
        <CreateNounButton />
        <Flex>
          <BlobTransactionCard blobData="" blobGas="" from="0x12312321" hash="0x213123" timestamp="12312321" to="123213213" />
        </Flex>
        <Browse />
      </Container>
    </Flex>
  );
}
