'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const modules = [
  {
    title: 'Module 1: Drone Fundamentals',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 1.1: Drone Types & Configurations',
        duration: '1h',
        topics: ['Quadcopter, hexacopter, octocopter', 'Fixed-wing vs. multirotor', 'Commercial vs. custom builds'],
      },
      {
        title: 'Lesson 1.2: Physics of Flight',
        duration: '2h',
        topics: ['Aerodynamics basics', 'Thrust, lift, drag, weight', 'Flight dynamics equations', 'Stability & control'],
      },
      {
        title: 'Lesson 1.3: Drone Hardware & Components',
        duration: '2h',
        topics: ['Frame & motors', 'Electronic Speed Controllers (ESCs)', 'Flight controller boards', 'Propellers & power systems'],
      },
      {
        title: 'Lesson 1.4: Safety & Regulations',
        duration: '1h',
        topics: ['Flight safety protocols', 'Regulatory compliance', 'Insurance & legal considerations'],
      },
    ],
  },
  {
    title: 'Module 2: Control Systems for Drones',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 2.1: PID Control for Drones',
        duration: '2h',
        topics: ['PID tuning for stability', 'Roll, pitch, yaw control', 'Altitude control', '**Project**: Implement PID controller'],
      },
      {
        title: 'Lesson 2.2: Stabilization & Attitude Control',
        duration: '2h',
        topics: ['IMU integration', 'Sensor fusion', 'Attitude estimation', '**Project**: Build stabilization system'],
      },
      {
        title: 'Lesson 2.3: Throttle & Lift Management',
        duration: '1h',
        topics: ['Power distribution', 'Motor mixing', 'Throttle curves'],
      },
      {
        title: 'Lesson 2.4: Simulation with Gazebo',
        duration: '1h',
        topics: ['Gazebo drone simulation', 'Virtual flight testing', 'Parameter tuning'],
      },
    ],
  },
  {
    title: 'Module 3: Autonomous Flight',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 3.1: GPS & Positioning',
        duration: '1.5h',
        topics: ['GPS basics', 'RTK GPS for precision', 'Position estimation', 'Coordinate systems'],
      },
      {
        title: 'Lesson 3.2: Waypoint Navigation',
        duration: '1.5h',
        topics: ['Mission planning', 'Waypoint following', 'Path smoothing', '**Project**: Program waypoint mission'],
      },
      {
        title: 'Lesson 3.3: Mission Planning',
        duration: '1.5h',
        topics: ['Mission file formats (MAVLink)', 'Geofencing', 'Return-to-home logic', 'Fail-safe mechanisms'],
      },
      {
        title: 'Lesson 3.4: ArduPilot Programming',
        duration: '1.5h',
        topics: ['ArduPilot setup', 'Parameter configuration', 'Custom flight modes', '**Project**: Autonomous mission'],
      },
    ],
  },
  {
    title: 'Module 4: Advanced Applications',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 4.1: Drone Vision Systems',
        duration: '2h',
        topics: ['Camera gimbals', 'First-person view (FPV)', 'Computer vision for navigation', '**Project**: Vision-based landing'],
      },
      {
        title: 'Lesson 4.2: Mapping & SLAM',
        duration: '1.5h',
        topics: ['Aerial mapping', '3D reconstruction', 'SLAM for drones', 'Photogrammetry'],
      },
      {
        title: 'Lesson 4.3: Swarm Robotics',
        duration: '1.5h',
        topics: ['Multi-drone coordination', 'Swarm algorithms', 'Formation flying', 'Communication protocols'],
      },
      {
        title: 'Lesson 4.4: Real-World Deployments',
        duration: '1h',
        topics: ['Inspection applications', 'Delivery systems', 'Agricultural monitoring', 'Search & rescue'],
      },
    ],
  },
  {
    title: 'Module 5: Capstone Project',
    hours: 6,
    lessons: [
      {
        title: 'Project: Autonomous Surveying Drone',
        duration: '6h',
        topics: [
          'Program drone for autonomous flight',
          'Design mission with waypoints',
          'Integrate mapping system',
          'Analyze captured data',
        ],
        deliverables: [
          'Autonomous flight demonstration (video)',
          'Mission code & configuration',
          'Mapping data & analysis',
          'System documentation',
        ],
      },
    ],
  },
]

const learningOutcomes = [
  'Drone physics & control principles',
  'Flight programming (PID controllers)',
  'Autonomous mission planning',
  'Real-world drone applications',
]

export default function DronesCurriculumPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/courses/drones"
          className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Course
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Drone Programming & Control</h1>
          <p className="text-xl text-[#EDEDED]/80 mb-6">Complete Curriculum (30 hours)</p>
          <div className="flex items-center gap-6 text-[#EDEDED]/60">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>30 hours</span>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/30 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="text-[#00FF88]" size={32} />
            Learning Outcomes
          </h2>
          <ul className="space-y-3">
            {learningOutcomes.map((outcome, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={20} />
                <span className="text-[#EDEDED]/80 text-lg">{outcome}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-[#00D9FF]" size={36} />
            Module Breakdown
          </h2>
          <div className="space-y-8">
            {modules.map((module, moduleIndex) => (
              <motion.div
                key={moduleIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: moduleIndex * 0.1 }}
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#00D9FF]">{module.title}</h3>
                  <span className="px-4 py-2 bg-[#00D9FF]/20 text-[#00D9FF] rounded-full text-sm font-semibold">
                    {module.hours} hours
                  </span>
                </div>
                <div className="space-y-6">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="border-l-2 border-[#00D9FF]/30 pl-6">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-xl font-semibold">{lesson.title}</h4>
                        <span className="text-sm text-[#EDEDED]/60">({lesson.duration})</span>
                      </div>
                      <ul className="space-y-2 mb-4">
                        {lesson.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-2 text-[#EDEDED]/70">
                            <span className="text-[#00FF88] mt-1.5">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      {'deliverables' in lesson && lesson.deliverables && (
                        <div className="mt-4 pt-4 border-t border-[#1A1A1A]">
                          <p className="font-semibold text-[#00FF88] mb-2">Deliverables:</p>
                          <ul className="space-y-1">
                            {lesson.deliverables.map((deliverable, delIndex) => (
                              <li key={delIndex} className="flex items-start gap-2 text-[#EDEDED]/70 text-sm">
                                <CheckCircle2 className="text-[#00FF88] mt-0.5 flex-shrink-0" size={16} />
                                <span>{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/30 rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Master Drone Programming?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Enroll now and build autonomous drone systems
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
