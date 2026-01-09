'use client'

import { Play, Code, Cpu, Users, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const learningMethods = [
  {
    icon: Play,
    title: 'Video Lessons',
    description: 'In-depth video tutorials from industry practitioners. Learn at your own pace with lifetime access.',
  },
  {
    icon: Code,
    title: 'Hands-On Projects',
    description: 'Build real robotic systems. Each project teaches practical skills used in industry.',
  },
  {
    icon: Cpu,
    title: 'Hardware Projects',
    description: 'Work with actual robots, sensors, and actuators. Understand real-world constraints and solutions.',
  },
  {
    icon: Users,
    title: 'Peer Review & Mentorship',
    description: 'Get feedback from peers and mentors. Learn from the community of robotics engineers.',
  },
]

const learningFlow = [
  {
    step: 1,
    title: 'Learn Concepts',
    description: 'Watch video lessons and understand the theory behind robotics systems.',
  },
  {
    step: 2,
    title: 'Practice with Simulations',
    description: 'Use Gazebo and ROS simulations to practice before working with hardware.',
  },
  {
    step: 3,
    title: 'Build Hardware Projects',
    description: 'Implement concepts on real robots. Learn debugging and system integration.',
  },
  {
    step: 4,
    title: 'Capstone Project',
    description: 'Build a complete robotic system that demonstrates your skills.',
  },
  {
    step: 5,
    title: 'Portfolio & Certification',
    description: 'Add your project to your portfolio and earn an industry-recognized certificate.',
  },
]

export default function LearningPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            How Learning Happens
          </h1>
          <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
            Experience robotics training the way industry engineers learn — through projects, 
            mentorship, and real-world application.
          </p>
        </motion.div>

        {/* Learning Methods */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Learning Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 text-center card-hover cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Icon className="text-black" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                  <p className="text-[#EDEDED]/70 leading-relaxed">{method.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Learning Flow Timeline */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Your Learning Journey</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9FF] to-[#00FF88] hidden md:block" />
            
            <div className="space-y-12">
              {learningFlow.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {item.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-3 text-[#00D9FF]">{item.title}</h3>
                    <p className="text-[#EDEDED]/80 text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ROS Workflows Section */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold mb-6">ROS-Based Workflows</h2>
            <p className="text-xl text-[#EDEDED]/80 mb-8">
              Learn the industry-standard Robot Operating System (ROS) used by robotics companies worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'Package development',
                'Node communication',
                'Topic publishing/subscribing',
                'Service calls',
                'Action servers',
                'TF transforms',
                'Parameter management',
                'Launch files',
                'Debugging tools',
              ].map((topic) => (
                <div key={topic} className="flex items-center gap-2">
                  <CheckCircle2 className="text-[#00FF88] flex-shrink-0" size={20} />
                  <span className="text-[#EDEDED]/80">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Project Showcase */}
        <section>
          <h2 className="text-4xl font-bold mb-12 text-center">Project Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              'Autonomous Navigation',
              'Robotic Arm Control',
              'Vision-Based Manipulation',
            ].map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 aspect-video flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#00D9FF]/20 to-[#00FF88]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Cpu className="text-[#00D9FF]" size={48} />
                  </div>
                  <p className="text-xl font-semibold text-[#EDEDED]">{project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
