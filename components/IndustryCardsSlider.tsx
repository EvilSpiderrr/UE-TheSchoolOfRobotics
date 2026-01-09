'use client'

import { useEffect, useRef, useState } from 'react'
import { Cpu, Code, Target, Users, Briefcase } from 'lucide-react'

const industryCards = [
  {
    icon: Cpu,
    title: "Real Hardware Thinking",
    description: "Work with actual robotic hardware, not just simulations. Understand mechanical design, electronics, and system integration.",
  },
  {
    icon: Code,
    title: "ROS & Industry Tooling",
    description: "Master ROS (Robot Operating System), the industry standard. Learn tools used by robotics companies worldwide.",
  },
  {
    icon: Target,
    title: "Capstone-Driven Learning",
    description: "Build complete robotic systems from scratch. Each course culminates in a real-world capstone project.",
  },
  {
    icon: Users,
    title: "Mentorship from Practitioners",
    description: "Learn from engineers who build robots for a living. Get industry insights and career guidance.",
  },
  {
    icon: Briefcase,
    title: "Portfolio, Not Just Grades",
    description: "Build a portfolio of real projects that demonstrate your skills to employers. Show, don't just tell.",
  },
]

export default function IndustryCardsSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const startTimeRef = useRef<number>(0)
  const pausedAtRef = useRef<number | null>(null)
  const totalPausedTimeRef = useRef<number>(0)
  const animationIdRef = useRef<number | null>(null)

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      startTimeRef.current = Date.now()
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const slider = sliderRef.current
    if (!slider) return

    const duration = 20000 // 20 seconds per revolution
    const cardWidth = 412
    const totalWidth = cardWidth * industryCards.length

    const animate = () => {
      if (isPaused) {
        animationIdRef.current = requestAnimationFrame(animate)
        return
      }

      const now = Date.now()
      const elapsed = (now - startTimeRef.current - totalPausedTimeRef.current) % duration
      const progress = elapsed / duration
      const translateX = -progress * totalWidth

      if (slider) {
        slider.style.transform = `translateX(${translateX}px)`
        slider.style.transition = 'none'
      }

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animationIdRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [isPaused, isMounted])

  const handleMouseEnter = () => {
    if (!isPaused && pausedAtRef.current === null) {
      pausedAtRef.current = Date.now()
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (isPaused && pausedAtRef.current !== null) {
      const pauseDuration = Date.now() - pausedAtRef.current
      totalPausedTimeRef.current += pauseDuration
      pausedAtRef.current = null
      setIsPaused(false)
    }
  }

  if (!isMounted) {
    return (
      <div className="overflow-hidden relative">
        <div className="flex gap-8">
          {industryCards.map((card, index) => {
            const Icon = card.icon
            return (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-black" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-[#EDEDED]/70 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef}
      className="overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        ref={sliderRef}
        className="flex gap-8 will-change-transform"
        style={{ width: `${industryCards.length * 2 * 412}px` }}
      >
        {/* Duplicate cards for seamless loop */}
        {[...industryCards, ...industryCards].map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className="flex-shrink-0 w-[380px] bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center mb-6">
                <Icon className="text-black" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-[#EDEDED]/70 leading-relaxed">{card.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
