import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  EthereumClient,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useMediaQuery } from 'react-responsive';
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const chains = [bsc]
const { provider, webSocketProvider } = configureChains(
  chains,
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
    publicProvider()
  ],
)
const wagmiClientForDesktop = createClient({
  autoConnect: false,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        shimDisconnect: true
      }
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
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
        projectId,
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
        wagmiClientForMobile && ethereumClientForMobile && (
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
              projectId={projectId}
              ethereumClient={ethereumClientForMobile}
            />
          </>
        )
      ) : (
        wagmiClientForDesktop && ethereumClientForDesktop && (
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
              projectId={projectId}
              ethereumClient={ethereumClientForDesktop}
            />
          </>
        )
      )}
    </BrowserRouter>
  )
}

export default App
