'use client'

import { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'
import { Transition } from '@headlessui/react'

const navItems = [
  { name: 'Catálogo', href: '#' },
  { name: 'Sobre nosotros', href: '#' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#FFECF6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="logo text-3xl text-pink-600">Caribe</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 nav-link px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:text-pink-600 transition-colors duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-pink-600 transition-colors duration-300">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:text-pink-600 transition-colors duration-300">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:text-pink-600 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-900 nav-link text-base font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  )
}

