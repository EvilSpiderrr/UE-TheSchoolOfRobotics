'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/learning', label: 'Learning' },
    { href: '/careers', label: 'Careers' },
    { href: '/gamification', label: 'Progress' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo />
            <span className="ml-3 text-xl font-bold font-playfair text-gradient">
              The School of Robotics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#EDEDED] hover:text-[#00D9FF] transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="px-6 py-2 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#EDEDED]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-6 border-t border-[#0B0B0B] mt-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#EDEDED] hover:text-[#00D9FF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/enroll"
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-semibold rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
