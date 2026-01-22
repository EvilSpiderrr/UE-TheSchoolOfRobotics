'use client'

import Link from 'next/link'
import { Instagram, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border-t border-[#00D9FF]/30 mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Contact Info Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#00D9FF]">Email us:</h3>
          <a 
            href="mailto:info@upcomingengineer.com" 
            className="text-xl text-[#EDEDED] hover:text-[#00D9FF] transition-colors inline-block mb-4"
          >
            info@upcomingengineer.com
          </a>
          <p className="text-lg text-[#EDEDED]/80 mb-2">
            Call/WhatsApp: <a href="tel:+917411749638" className="text-[#00FF88] hover:underline">+91 741 174 9638</a>
          </p>
          <p className="text-lg text-[#EDEDED]/80 italic">
            Your Mentor Before, During & After Engineering Education…
          </p>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* For Candidates */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00D9FF]">For Candidates</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Browse Internships/Jobs
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Messages
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Job Alerts
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  My Bookmarks
                </a>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF88]">For Employers</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Post a Job / Internship
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Messages
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Orders
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00D9FF]">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Campus Ambassador Program
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00D9FF] transition-colors"
                >
                  Submit a Post
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#00FF88]">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Notes
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Syllabus
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  Previous Year Question Paper
                </a>
              </li>
              <li>
                <a 
                  href="https://upcomingengineer.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors"
                >
                  HR Interview Questions
                </a>
              </li>
              <li>
                <Link href="/courses" className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learning" className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors">
                  Learning
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-[#EDEDED]/70 hover:text-[#00FF88] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Copyright */}
        <div className="pt-8 border-t border-[#00D9FF]/20 text-center">
          <p className="text-[#EDEDED]/60">
            © 2025 Upcoming Engineer. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
