import React from 'react'
import { Outlet } from 'react-router-dom'
import AlertMessage from '../../components/AlertMessage'
import Loading from '../../components/Loading'
import useLoading from '../../hooks/useLoading'
import Footer from './Footer'
import Navbar from './Navbar'

export default function LandingLayout() {
  const { isLoading } = useLoading()

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <AlertMessage />
        <Navbar />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer className="mt-16" />
      </div>
      {isLoading && (<Loading />)}
    </>
  )
}