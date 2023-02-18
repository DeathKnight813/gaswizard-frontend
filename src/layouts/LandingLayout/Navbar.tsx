import React from 'react'
import { Button, IconButton } from '@material-tailwind/react'
import { Icon } from '@iconify/react'
import useMobileMenu from '../../hooks/useMobileMenu'

export default function Navbar() {
  const { openMenu } = useMobileMenu()
  return (
    <div className="bg-white px-6 py-4 sticky top-0 z-40 flex justify-between items-center md:items-end">
      <img src="/assets/images/logo.svg" alt="logo" className="w-16" />
      {/* For Desktop */}
      <div className="hidden md:flex gap-1">
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Roadmap</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Whitepaper</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">FAQ</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Our Team</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Partners</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Win $50K</Button>
        <Button variant="text" className="text-black hover:text-[#00AA01] font-normal">Linktree</Button>
      </div>

      {/* For Mobile */}
      <IconButton
        variant="text"
        className="text-black text-3xl flex md:hidden"
        onClick={openMenu}
      >
        <Icon icon="material-symbols:menu-rounded" />
      </IconButton>
    </div>
  )
}