import type { Metadata } from "next";
import { Londrina_Solid } from "next/font/google";
import "./globals.css";
import { Flex } from "@chakra-ui/react";
import WalletProvider from "./walletProvider";
import { Header } from "@/features/Header/Header";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/theme/theme";
import { Providers } from "./providers";

const inter = Londrina_Solid({ weight: ["300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header></Header>
          <Flex flex="1">{children}</Flex>
        </Providers>
      </body>
    </html>
  );
}