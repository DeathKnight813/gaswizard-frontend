import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <MobileMenuProvider>
          <Routes />
        </MobileMenuProvider>
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
