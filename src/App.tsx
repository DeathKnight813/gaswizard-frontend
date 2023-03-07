import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext';

const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
    version: "2",
    appName: "web3Modal",
    chains,
  }),
  provider,
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <AlertMessageProvider>
          <LoadingProvider>
            <MobileMenuProvider>
              <Routes />
            </MobileMenuProvider>
          </LoadingProvider>
        </AlertMessageProvider>
      </WagmiConfig>
      <Web3Modal
        projectId={import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </BrowserRouter>
  )
}

export default App
