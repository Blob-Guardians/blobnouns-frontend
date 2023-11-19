import { CreateNounButton } from "@/components/CreateNounButton";
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Page() {
    return (
        <Flex width="100%" border="1px solid black" justifyContent="center" alignItems="center">
            <CreateNounButton/>
        </Flex>
    )
  }