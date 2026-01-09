'use client'

import { Briefcase, Target, CheckCircle2, TrendingUp, Code, Cpu, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const careerPaths = [
  {
    title: 'Robotics Engineer',
    description: 'Design and develop robotic systems for industrial and commercial applications.',
    skills: ['ROS', 'C++', 'Python', 'Mechanical Design', 'Control Systems'],
    salary: '$85K - $140K',
    icon: Cpu,
  },
  {
    title: 'Autonomous Systems Engineer',
    description: 'Build self-driving vehicles, drones, and autonomous navigation systems.',
    skills: ['SLAM', 'Computer Vision', 'Sensor Fusion', 'Path Planning', 'ROS'],
    salary: '$90K - $150K',
    icon: Zap,
  },
  {
    title: 'Robotics Software Engineer',
    description: 'Develop software for robot control, perception, and decision-making.',
    skills: ['ROS', 'Python', 'C++', 'Machine Learning', 'Real-time Systems'],
    salary: '$95K - $160K',
    icon: Code,
  },
  {
    title: 'AI Robotics Engineer',
    description: 'Integrate AI and machine learning into robotic systems for intelligent behavior.',
    skills: ['Deep Learning', 'Computer Vision', 'Reinforcement Learning', 'TensorFlow', 'PyTorch'],
    salary: '$100K - $170K',
    icon: TrendingUp,
  },
]

const skillsChecklist = [
  'ROS (Robot Operating System)',
  'Python & C++ Programming',
  'Mechanical Design & CAD',
  'Electronics & Sensors',
  'Control Systems',
  'Computer Vision',
  'SLAM & Navigation',
  'Robot Simulation (Gazebo)',
  'Hardware Integration',
  'System Testing & Debugging',
  'Project Management',
  'Portfolio Development',
]

const outcomes = [
  {
    title: 'Industry-Ready Skills',
    description: 'Master tools and technologies used by robotics companies worldwide.',
  },
  {
    title: 'Portfolio of Projects',
    description: 'Build a portfolio demonstrating real-world robotics capabilities.',
  },
  {
    title: 'Professional Network',
    description: 'Connect with mentors, peers, and industry professionals.',
  },
  {
    title: 'Career Support',
    description: 'Get guidance on job applications, interviews, and career growth.',
  },
]

export default function CareersPage() {
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
            Career & Outcomes
          </h1>
          <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
            Prepare for real robotics engineering roles. Our training is designed to get you 
            industry-ready, not just certified.
          </p>
        </motion.div>

        {/* Career Paths */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Robotics Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((path, index) => {
              const Icon = path.icon
              return (
                <motion.div
                  key={path.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover cursor-pointer"
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
                  <p className="text-[#EDEDED]/80 mb-6 leading-relaxed">{path.description}</p>
                  <div>
                    <div className="text-sm font-semibold text-[#EDEDED]/60 mb-3">Key Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {path.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-[#050505] border border-[#1A1A1A] rounded-full text-sm text-[#EDEDED]/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Industry Readiness Checklist */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <Target className="text-[#00FF88]" size={40} />
              <h2 className="text-4xl font-bold">Industry Readiness Checklist</h2>
            </div>
            <p className="text-xl text-[#EDEDED]/80 mb-12 max-w-3xl">
              Master these skills to be ready for robotics engineering roles. 
              Our curriculum is designed to check every box.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsChecklist.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#00FF88] flex-shrink-0" size={20} />
                  <span className="text-[#EDEDED]/80">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Portfolio-Based Hiring */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/30 rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold mb-6">Portfolio-Based Hiring Philosophy</h2>
            <p className="text-xl text-[#EDEDED]/80 mb-8 max-w-3xl">
              The robotics industry values what you can build, not just what you&apos;ve studied. 
              Our training focuses on creating a portfolio of real projects that demonstrate your capabilities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#050505] border border-[#1A1A1A] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00D9FF]">What Employers Want</h3>
                <ul className="space-y-2 text-[#EDEDED]/80">
                  <li>• Real projects you&apos;ve built</li>
                  <li>• Code you&apos;ve written</li>
                  <li>• Problems you&apos;ve solved</li>
                  <li>• Systems you&apos;ve integrated</li>
                </ul>
              </div>
              <div className="bg-[#050505] border border-[#1A1A1A] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 text-[#00FF88]">What We Build</h3>
                <ul className="space-y-2 text-[#EDEDED]/80">
                  <li>• Capstone projects</li>
                  <li>• GitHub repositories</li>
                  <li>• Project documentation</li>
                  <li>• Demo videos</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Outcomes */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center">What You&apos;ll Achieve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00D9FF] to-[#00FF88] rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-black" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{outcome.title}</h3>
                <p className="text-[#EDEDED]/70">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Robotics Career?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Join engineers building the future of automation and AI.
          </p>
          <Link
            href="/enroll"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Enroll Now
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
