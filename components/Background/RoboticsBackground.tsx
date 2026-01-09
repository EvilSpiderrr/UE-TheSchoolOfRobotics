'use client'

// Previous 3D animation imports - kept for future use
// import { Canvas } from '@react-three/fiber'
// import { Suspense } from 'react'
// import RoboticArmScene from './RoboticArmScene'
import { useState, useEffect, useRef } from 'react'

export default function RoboticsBackground() {
  const [isMounted, setIsMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (videoRef.current && isMounted) {
      videoRef.current.play().catch(() => {
        // Autoplay was prevented, handle gracefully
      })
    }
  }, [isMounted])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050505]">
      {/* Video Background */}
      {isMounted && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15]"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      )}

      {/* SSR Fallback - Static grid */}
      {!isMounted && (
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      )}

      {/* Previous 3D Animation - Code kept but commented out for future use */}
      {/* Uncomment below to restore 3D animation instead of video */}
      {/*
      {isMounted && !isMobile && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ alpha: true, antialias: true }}
          className="opacity-[0.25]"
        >
          <Suspense fallback={null}>
            <RoboticArmScene />
          </Suspense>
        </Canvas>
      )}
      */}
    </div>
  )
}
