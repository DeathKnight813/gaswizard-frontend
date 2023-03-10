import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Web3Modal } from "@web3modal/react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { WalletConnectConnector} from 'wagmi/connectors/walletConnect'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import { AlertMessageProvider } from './contexts/AlertMessageContext';

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const apiKey = import.meta.env.VITE_ALCHEMY_API_KEY
const chains = [bsc]


const { provider, webSocketProvider } = configureChains(chains, [w3mProvider({ projectId }), alchemyProvider({ apiKey }), publicProvider()])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ projectId, version: 1, chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId,
      }
    })
  ],
  provider,
  webSocketProvider
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  return (
    <BrowserRouter>
      {wagmiClient && (
        <WagmiConfig client={wagmiClient}>
          <AlertMessageProvider>
            <LoadingProvider>
              <MobileMenuProvider>
                <Routes />
              </MobileMenuProvider>
            </LoadingProvider>
          </AlertMessageProvider>
        </WagmiConfig>
      )}
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </BrowserRouter>
  )
}

export default App
