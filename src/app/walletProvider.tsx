"use client";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { localhost } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ReactNode } from "react";
import _ from "lodash";

const cannonLocalHost = {
  ...localhost,
  id: 7011893061,
  name: "dencun-devnet-11",
  network: "dencun-devnet-11",
  rpcUrls: {
    default: {
      http: ["https://devnet.pablog.me:8888"],
    },
    public: {
      http: ["https://devnet.pablog.me:8888"],
    },
  },
};
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [cannonLocalHost],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Cannon",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={lightTheme()}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default WalletProvider;
