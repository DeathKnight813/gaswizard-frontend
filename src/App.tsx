import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  EthereumClient,
  // modalConnectors,
  walletConnectProvider
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, mainnet, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { useMediaQuery } from 'react-responsive';
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }), 
    publicProvider(), 
    walletConnectProvider({ projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID })
  ],
)
const wagmiClientForDesktop = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
        version: '2'
      }
    }),
  ],
  provider,
  webSocketProvider,
});

const wagmiClientForMobile = createClient({
  autoConnect: false,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: {
        version: '1'
      }
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
        version: '2'
      }
    }),
  ],
  provider,
  webSocketProvider
});

// Web3Modal Ethereum Client
const ethereumClientForDesktop = new EthereumClient(wagmiClientForDesktop, chains);
const ethereumClientForMobile = new EthereumClient(wagmiClientForMobile, chains);


function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <BrowserRouter>
      {isTabletOrMobile ? (
        <>
          <WagmiConfig client={wagmiClientForMobile}>
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
            ethereumClient={ethereumClientForMobile}
          />
        </>
      ) : (
        <>
          <WagmiConfig client={wagmiClientForDesktop}>
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
            ethereumClient={ethereumClientForDesktop}
          />
        </>
      )}
    </BrowserRouter>
  )
}

export default App
