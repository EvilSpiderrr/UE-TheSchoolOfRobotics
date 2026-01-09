'use client'

import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative w-12 h-12">
        <Image
          src="/logo.png"
          alt="UpcomingEngineer Logo"
          width={48}
          height={48}
          priority
          className="h-auto w-auto"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        {/* Fallback if logo not found */}
        
      </div>
    </Link>
  )
}
