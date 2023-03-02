import React from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import useLoading from '../../hooks/useLoading'
import useMobileMenu from '../../hooks/useMobileMenu'
import Footer from './Footer'
import Navbar from './Navbar'

export default function LandingLayout() {
  const { isLoading } = useLoading()
  const { opened } = useMobileMenu()

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Outlet />
          </div>
          <Footer className="mt-16" />
        </div>
      </>
    )
  }
}