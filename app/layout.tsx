import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import RoboticsBackground from '@/components/Background/RoboticsBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'The School of Robotics | UpcomingEngineer',
  description: 'Not Another Robotics Course. This Is the Robotics Industry. Learn robotics the way the industry demands — from mechanical design to AI-powered autonomous systems.',
  keywords: 'robotics engineering, ROS, autonomous systems, robotics training, industrial robotics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={`${montserrat.className} antialiased`}>
        <RoboticsBackground />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
