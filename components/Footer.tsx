'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border-t border-[#00D9FF]/30 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00D9FF]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/gamification" className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors">
                  Progress
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF88]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/enroll" className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors">
                  Enroll Now
                </Link>
              </li>
              <li>
                <Link href="/mentor" className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors">
                  Talk to a Mentor
                </Link>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors flex items-center gap-2"
                >
                  UpcomingEngineer.com
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00D9FF]">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:info@upcomingengineer.com" 
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  info@upcomingengineer.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:9999999999" 
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors flex items-center gap-2"
                >
                  <Phone size={16} />
                  +91 9999999999
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF88]">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/upcomingengineerofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="text-black" size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/upcoming-engineer/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-black" size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[#00D9FF]/20 text-center">
          <p className="text-[#EDEDED]/60">
            © 2025 UpcomingEngineer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
