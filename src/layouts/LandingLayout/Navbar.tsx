import React from 'react'
import { Button, IconButton } from '@material-tailwind/react'
import { Icon } from '@iconify/react'
import useMobileMenu from '../../hooks/useMobileMenu'

export default function Navbar() {
  const { openMenu } = useMobileMenu()
  return (
    <div className="bg-white px-6 py-4 sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:items-end">
          <img src="/assets/images/logo.png" alt="Logo" className="w-56" />

          {/* For Desktop */}
          <div className="hidden md:flex gap-1">
            <Button variant="text" className="text-primary hover:text-secondary font-bold">Gas Wizard Merch</Button>
            <Button variant="text" className="text-primary hover:text-secondary font-bold">About Gas Wizard</Button>
            <Button variant="text" className="text-primary hover:text-secondary font-bold">Contact Us</Button>
            <Button variant="text" className="text-primary hover:text-secondary font-bold">In the News</Button>
            <Button variant="text" className="text-primary hover:text-secondary font-bold">Gas Paper</Button>
          </div>

          {/* For Mobile */}
          <IconButton
            variant="text"
            className="text-black text-3xl flex md:hidden"
            onClick={openMenu}
          >
            <Icon icon="material-symbols:menu-rounded" />
          </IconButton>

          <Button variant="text" className="bg-secondary hover:bg-secondary rounded-none text-white text-lg capitalize">
            How To Buy
          </Button>
        </div>
      </div>
    </div>
  )
}