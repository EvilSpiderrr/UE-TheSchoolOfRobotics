'use client'

import Link from 'next/link'
import { ArrowRight, Clock, Code, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { getPreferredForText } from '@/lib/coursePreferences'

const courses = [
  {
    id: 'fundamentals',
    title: 'Robotics Fundamentals',
    level: 'Beginner',
    duration: '30 hours',
    tools: ['Arduino', 'C++', 'Basic Electronics', 'Sensors'],
    capstone: 'Build a line-following robot with obstacle avoidance',
    description: 'Master the basics of robotics from mechanical design to programming. Build your first autonomous robot.',
  },
  {
    id: 'intermediate',
    title: 'Intermediate Robotics – Autonomous Systems',
    level: 'Intermediate',
    duration: '30 hours',
    tools: ['ROS', 'Python', 'SLAM', 'Navigation Stack'],
    capstone: 'Develop an autonomous mobile robot with mapping and navigation',
    description: 'Learn ROS, autonomous navigation, and sensor fusion. Build robots that can navigate real environments.',
  },
  {
    id: 'advanced',
    title: 'Advanced Robotics – Robotic Arms & Manipulation',
    level: 'Advanced',
    duration: '30 hours',
    tools: ['ROS', 'MoveIt', 'Kinematics', 'Gripper Control'],
    capstone: 'Design and control a 6-DOF robotic arm for pick-and-place operations',
    description: 'Master robotic manipulation, inverse kinematics, and advanced control systems for industrial applications.',
  },
  {
    id: 'ai-vision',
    title: 'AI & Vision for Robotics',
    level: 'Advanced',
    duration: '30 hours',
    tools: ['OpenCV', 'TensorFlow', 'YOLO', 'Jetson Nano'],
    capstone: 'Build a vision-based object detection and manipulation system',
    description: 'Integrate computer vision and AI into robotics. Build systems that see, understand, and act.',
  },
  {
    id: 'drones',
    title: 'Drone Programming & Control',
    level: 'Intermediate',
    duration: '30 hours',
    tools: ['PX4', 'MAVLink', 'ArduPilot', 'Flight Control'],
    capstone: 'Program an autonomous drone for inspection and delivery missions',
    description: 'Learn drone programming, flight control, and autonomous mission planning for commercial applications.',
  },
]

export default function CoursesPage() {
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
            Course Catalog
          </h1>
          <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
            Industry-grade robotics training. Each course includes real hardware projects, 
            ROS workflows, and capstone projects that build your portfolio.
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const preferredText = getPreferredForText(course.id)
            return (
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
              
              <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
              {preferredText && (
                <p className="text-sm text-[#EDEDED]/60 mb-4 break-words">
                  {preferredText}
                </p>
              )}
              <p className="text-[#EDEDED]/70 mb-6 leading-relaxed">{course.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-[#EDEDED]/60">
                  <Clock size={16} />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-start gap-2 text-[#EDEDED]/60">
                  <Code size={16} className="mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Tools:</div>
                    <div>{course.tools.join(', ')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-[#EDEDED]/60">
                  <Target size={16} className="mt-0.5" />
                  <div className="text-sm">
                    <div className="font-semibold mb-1">Capstone:</div>
                    <div>{course.capstone}</div>
                  </div>
                </div>
              </div>

              <Link
                href={`/courses/${course.id}/curriculum`}
                className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors font-semibold"
              >
                View Curriculum
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
