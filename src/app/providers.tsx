"use client";
import { theme } from "@/theme/theme";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import WalletProvider from "@/app/walletProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WalletProvider>{children}</WalletProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
