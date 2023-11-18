"use client";

import { Learn } from "../Learn/learn";
import { Send } from "../Send/send";
import { Browse } from "../Browse/browse";
import { Flex, Container } from "@chakra-ui/react";

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
        <Learn />
        <Send />
        <Browse />
      </Container>
    </Flex>
  );
}
