"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FC, ReactNode } from "react";
import { Box, Button } from "@chakra-ui/react";
const CustomButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: ReactNode;
}) => (
  <Button
    size="sm"
    variant="outline"
    // colorScheme="black"
    fontWeight={500}
    textTransform="uppercase"
    letterSpacing="1px"
    fontFamily="var(--font-miriam)"
    textShadow="0px 0px 4px rgba(255, 255, 255, 0.33)"
    fontSize="15px"
    backgroundColor="nouns.yellow"
    color="nouns.pink"
    onClick={onClick}
  >
    {children}
  </Button>
);
export const ConnectWallet: FC = () => {
  return (
    <Box padding={3}>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          if (!connected) {
            return (
              <CustomButton onClick={openConnectModal}>
                Connect Wallet
              </CustomButton>
            );
          } else {
            return <ConnectButton></ConnectButton>;
          }
        }}
      </ConnectButton.Custom>
    </Box>
  );
};
