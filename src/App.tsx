import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  EthereumClient,
  // modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext';

const { chains, provider, webSocketProvider } = configureChains(
  [bsc],
  [alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }), publicProvider()],
)
const wagmiClient = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        // projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
        version: '1'
      }
    }),
  ],
  provider,
  webSocketProvider
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
