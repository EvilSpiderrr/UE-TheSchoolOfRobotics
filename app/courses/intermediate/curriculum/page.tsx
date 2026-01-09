'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const modules = [
  {
    title: 'Module 1: Sensor Integration & Data Fusion',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 1.1: Advanced Sensor Types',
        duration: '1.5h',
        topics: ['LiDAR & time-of-flight sensors', 'IMU (gyroscope, accelerometer)', 'Odometry & wheel encoders'],
      },
      {
        title: 'Lesson 1.2: Data Acquisition & Processing',
        duration: '2h',
        topics: ['Analog-to-digital conversion', 'Filtering noisy sensor data (moving average, Kalman filter)', 'Sensor calibration'],
      },
      {
        title: 'Lesson 1.3: Multi-Sensor Fusion',
        duration: '1.5h',
        topics: ['Combining multiple sensor inputs', 'Sensor synchronization', 'Practical example: localization'],
      },
    ],
  },
  {
    title: 'Module 2: Obstacle Avoidance & Navigation',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 2.1: Collision Detection Algorithms',
        duration: '1.5h',
        topics: ['Edge detection', 'Threshold-based detection', 'Time-to-collision calculations'],
      },
      {
        title: 'Lesson 2.2: Obstacle Avoidance Strategies',
        duration: '2h',
        topics: ['Reactive approaches', 'Vector field histogram', 'Potential field methods', '**Project**: Bug algorithm implementation'],
      },
      {
        title: 'Lesson 2.3: Path Planning Basics',
        duration: '2h',
        topics: ['Dijkstra\'s algorithm', 'A* pathfinding', 'Grid-based navigation', '**Simulation**: Virtual environment testing (Gazebo)'],
      },
    ],
  },
  {
    title: 'Module 3: Introduction to ROS',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 3.1: ROS Architecture',
        duration: '1.5h',
        topics: ['Nodes, topics, services', 'Publisher-subscriber model', 'Message types'],
      },
      {
        title: 'Lesson 3.2: Setting Up ROS Environment',
        duration: '1.5h',
        topics: ['Installation & configuration', 'Basic commands', 'Creating packages'],
      },
      {
        title: 'Lesson 3.3: ROS for Mobile Robots',
        duration: '2h',
        topics: ['TurtleBot simulation', 'Teleoperating robots', 'Writing ROS nodes in Python'],
      },
      {
        title: 'Lesson 3.4: ROS Tools & Debugging',
        duration: '1h',
        topics: ['Visualization (RViz)', 'Data logging (rosbag)', 'Performance monitoring'],
      },
    ],
  },
  {
    title: 'Module 4: Control & State Machines',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 4.1: Proportional-Integral-Derivative (PID) Control',
        duration: '2h',
        topics: ['PID tuning', 'Implementation in Arduino', '**Project**: Speed control with PID'],
      },
      {
        title: 'Lesson 4.2: Finite State Machines for Behavior',
        duration: '2h',
        topics: ['State transitions', 'Behavior design', 'Switching logic', '**Project**: Robot with multiple behaviors (explore, avoid, return)'],
      },
      {
        title: 'Lesson 4.3: Sensor-Based Decision Making',
        duration: '1h',
        topics: ['Priority-based decisions', 'Interrupt handling', 'Real-time constraints'],
      },
      {
        title: 'Lesson 4.4: System Integration',
        duration: '1h',
        topics: ['Hardware-software integration', 'Testing & validation'],
      },
    ],
  },
  {
    title: 'Module 5: Capstone Project',
    hours: 6,
    lessons: [
      {
        title: 'Project: Autonomous Obstacle-Avoiding Robot',
        duration: '6h',
        topics: [
          'Design a mobile robot with multiple sensors',
          'Implement obstacle detection & avoidance',
          'Build a state machine for navigation',
          'Test in a simulated maze environment',
        ],
        deliverables: [
          'Functional autonomous robot (video)',
          'ROS code + configuration files',
          'System architecture diagram',
          'Performance report & analysis',
        ],
      },
    ],
  },
]

const learningOutcomes = [
  'Design autonomous systems with multiple sensors',
  'Implement obstacle avoidance algorithms',
  'Understand ROS (Robot Operating System) basics',
  'Build a multi-functional robot',
]

export default function IntermediateCurriculumPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/courses/intermediate"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Intermediate Robotics – Autonomous Systems</h1>
          <p className="text-xl text-[#EDEDED]/80 mb-6">Complete Curriculum (30 hours)</p>
          <div className="flex items-center gap-6 text-[#EDEDED]/60">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>30 hours</span>
            </div>
            <div className="px-3 py-1 bg-[#00D9FF]/20 text-[#00D9FF] rounded-full text-sm font-semibold">
              Prerequisites: Robotics Fundamentals
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
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Enroll now and master autonomous robotics systems
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
