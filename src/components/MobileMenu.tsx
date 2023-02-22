import React from "react"

/* ----------------------------------------------------------- */

export default function MobileMenu() {
  return (
    <div className="absolute top-0 w-screen h-screen z-50">
      <div className="relative w-full h-full">
        {/* Dark background */}
        <div className="bg-black opacity-90 w-full h-full"></div>

        {/* Menu */}
        <div className="absolute min-w-[300px] h-full top-0 right-0 bg-white opacity-100"></div>
      </div>
    </div>
  )
}