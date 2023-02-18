import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LoadingProvider } from './contexts/LoadingContext'
import Routes from './Routes'

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes />
      </LoadingProvider>
    </BrowserRouter>
  )
}

export default App
