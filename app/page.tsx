'use client'

import Link from 'next/link'
import { Download, ArrowRight, Clock, Code, Target, Play, Cpu, Users, CheckCircle2, Briefcase, TrendingUp, Zap, Trophy, Flame, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import IndustryCardsSlider from '@/components/IndustryCardsSlider'

const taglines = [
  "Not Another Robotics Course. This Is the Robotics Industry.",
  "Build Robots. Not Just Certificates.",
  "From Fundamentals to Factory-Ready Robotics.",
  "Learn What Robotics Engineers Actually Do.",
]


export default function Home() {
  return (
    <main className="relative min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Learn Robotics the Way
              <span className="block text-gradient mt-2">the Industry Demands</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#EDEDED]/80 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            From mechanical design to AI-powered autonomous systems — master robotics with real projects, 
            real tools, and real-world workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/courses"
              className="px-8 py-4 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 text-lg"
            >
              Explore Courses
              <ArrowRight size={20} />
            </Link>
            <a
              href="mailto:info@upcomingengineer.com?subject=Request%20for%20Curriculum%20PDF&body=Hello,%20I%20would%20like%20to%20request%20the%20curriculum%20PDF%20for%20The%20School%20of%20Robotics."
              className="px-8 py-4 border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-colors flex items-center gap-2 text-lg"
            >
              <Download size={20} />
              Download Curriculum PDF
            </a>
          </motion.div>

          {/* Rotating Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-lg md:text-xl text-[#00D9FF] font-medium"
          >
            {taglines[0]}
          </motion.p>
        </div>
      </section>

      {/* Why The School Of Robotics Exists */}
      <section className="relative py-32 px-6 md:px-12 bg-[#0B0B0B]/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why The School Of Robotics Exists
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-[#EDEDED]/80">
              <p className="font-semibold text-[#00D9FF] text-xl">
                Most robotics courses teach you to code. We teach you to engineer.
              </p>
              <p className="text-xl">
                The industry doesn&apos;t need programmers—it needs robotics engineers who can design, build, and deploy complete systems.
              </p>
              <p className="font-semibold text-[#00FF88] mt-8 text-xl">
                From mechanical design to AI integration, master the full stack of robotics engineering—not just isolated skills.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry-Aligned Promise */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Industry-Aligned Training
          </motion.h2>
          
          <IndustryCardsSlider />
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Course Catalog</h2>
            <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
              Industry-grade robotics training. Each course includes real hardware projects, 
              ROS workflows, and capstone projects that build your portfolio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { id: 'fundamentals', title: 'Robotics Fundamentals', level: 'Beginner', duration: '30 hours' },
              { id: 'intermediate', title: 'Intermediate Robotics', level: 'Intermediate', duration: '30 hours' },
              { id: 'advanced', title: 'Advanced Robotics', level: 'Advanced', duration: '30 hours' },
              { id: 'ai-vision', title: 'AI & Vision', level: 'Advanced', duration: '30 hours' },
              { id: 'drones', title: 'Drone Programming', level: 'Intermediate', duration: '30 hours' },
            ].map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover cursor-pointer"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#00D9FF]/20 text-[#00D9FF] text-sm font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                <div className="flex items-center gap-2 text-[#EDEDED]/60 mb-6">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <Link
                  href={`/courses/${course.id}/curriculum`}
                  className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors font-semibold"
                >
                  View Curriculum
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/courses"
              className="inline-block px-8 py-4 border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-colors"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Experience Section */}
      <section className="relative py-32 px-6 md:px-12 bg-[#0B0B0B]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Learning Happens</h2>
            <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
              Experience robotics training the way industry engineers learn — through projects, 
              mentorship, and real-world application.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Play, title: 'Video Lessons', description: 'In-depth video tutorials from industry practitioners.' },
              { icon: Code, title: 'Hands-On Projects', description: 'Build real robotic systems with practical skills.' },
              { icon: Cpu, title: 'Hardware Projects', description: 'Work with actual robots, sensors, and actuators.' },
              { icon: Users, title: 'Peer Review', description: 'Get feedback from peers and mentors.' },
            ].map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 text-center card-hover"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                  <p className="text-[#EDEDED]/70">{method.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/learning"
              className="inline-block px-8 py-4 border-2 border-[#00FF88] text-[#00FF88] font-semibold rounded-lg hover:bg-[#00FF88]/10 transition-colors"
            >
              Explore Learning Experience
            </Link>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="relative py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Career & Outcomes</h2>
            <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
              Prepare for real robotics engineering roles. Our training is designed to get you 
              industry-ready, not just certified.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Cpu, title: 'Robotics Engineer', salary: '$85K - $140K' },
              { icon: Zap, title: 'Autonomous Systems Engineer', salary: '$90K - $150K' },
              { icon: Code, title: 'Robotics Software Engineer', salary: '$95K - $160K' },
              { icon: TrendingUp, title: 'AI Robotics Engineer', salary: '$100K - $170K' },
            ].map((path, index) => {
              const Icon = path.icon
              return (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-black" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                      <p className="text-[#00D9FF] font-semibold">{path.salary}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/careers"
              className="inline-block px-8 py-4 border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-colors"
            >
              Explore Career Paths
            </Link>
          </div>
        </div>
      </section>

      {/* Gamification Section */}
      <section className="relative py-32 px-6 md:px-12 bg-[#0B0B0B]/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Gamification & Progress</h2>
            <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
              Learning robotics should feel like engineering progression, not school homework. 
              Track your growth, earn achievements, and compete with peers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Target, name: 'First Steps', description: 'Complete your first project' },
              { icon: Zap, name: 'ROS Master', description: 'Complete all ROS modules' },
              { icon: Trophy, name: 'Hardware Hero', description: 'Build 5 hardware projects' },
              { icon: Award, name: 'Capstone Champion', description: 'Complete a capstone project' },
              { icon: TrendingUp, name: 'Mentor', description: 'Help 10 peers' },
              { icon: Flame, name: 'Streak Master', description: '30-day learning streak' },
            ].map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 text-center card-hover"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-black" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{badge.name}</h3>
                  <p className="text-[#EDEDED]/70">{badge.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Link
              href="/gamification"
              className="inline-block px-8 py-4 border-2 border-[#00FF88] text-[#00FF88] font-semibold rounded-lg hover:bg-[#00FF88]/10 transition-colors"
            >
              View Progress System
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-6 md:px-12 bg-[#0B0B0B]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Stop Learning Robotics Like a Hobby.
            <span className="block text-gradient mt-4">
              Start Training Like a Robotics Engineer.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#EDEDED]/80 mb-12"
          >
            Join engineers building the future of automation, AI, and autonomous systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/enroll"
              className="px-10 py-5 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
            >
              Enroll Now
            </Link>
            <Link
              href="/mentor"
              className="px-10 py-5 border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-colors text-lg"
            >
              Talk to a Mentor
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
