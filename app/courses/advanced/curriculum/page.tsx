'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { getPreferredForText } from '@/lib/coursePreferences'

const modules = [
  {
    title: 'Module 1: Robot Kinematics',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 1.1: Forward Kinematics',
        duration: '2h',
        topics: ['DH parameters (Denavit-Hartenberg)', 'Homogeneous transformation matrices', 'Link and joint parameters', '**Exercise**: Calculate forward kinematics for a 3-DOF arm'],
      },
      {
        title: 'Lesson 1.2: Inverse Kinematics',
        duration: '2h',
        topics: ['Analytical vs. numerical approaches', 'Singularities', 'Multiple solutions', '**Project**: Implement inverse kinematics solver'],
      },
      {
        title: 'Lesson 1.3: Workspace Analysis',
        duration: '1h',
        topics: ['Reachability analysis', 'Dexterity measures', 'Visualization in 3D space'],
      },
      {
        title: 'Lesson 1.4: Kinematics Software Tools',
        duration: '1h',
        topics: ['MATLAB Robotics Toolbox', 'ROS robotic_toolbox', 'Simulation in Gazebo'],
      },
    ],
  },
  {
    title: 'Module 2: Dynamics & Control of Manipulators',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 2.1: Robot Dynamics',
        duration: '2h',
        topics: ['Lagrangian mechanics', 'Equation of motion', 'Gravity compensation'],
      },
      {
        title: 'Lesson 2.2: Control Algorithms for Arms',
        duration: '2h',
        topics: ['Joint-space control', 'Cartesian-space control', 'Impedance control', '**Project**: Implement trajectory tracking'],
      },
      {
        title: 'Lesson 2.3: Force Control & Compliance',
        duration: '1h',
        topics: ['Force feedback', 'Hybrid position-force control', 'Compliant motion'],
      },
      {
        title: 'Lesson 2.4: Safety in Arm Control',
        duration: '1h',
        topics: ['Collision detection', 'Force limits', 'Emergency stop mechanisms'],
      },
    ],
  },
  {
    title: 'Module 3: End-Effector & Grasping',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 3.1: Types of End-Effectors',
        duration: '1.5h',
        topics: ['Grippers (parallel, adaptive)', 'Vacuum grippers', 'Specialized tools'],
      },
      {
        title: 'Lesson 3.2: Grasping & Manipulation',
        duration: '2h',
        topics: ['Grasp planning', 'Stability analysis', 'Multi-finger coordination', '**Project**: Gripper design & testing'],
      },
      {
        title: 'Lesson 3.3: Vision-Guided Grasping',
        duration: '1.5h',
        topics: ['Object detection (OpenCV)', 'Pose estimation', 'Integration with arm control'],
      },
      {
        title: 'Lesson 3.4: Bin Picking & Assembly Tasks',
        duration: '1h',
        topics: ['Order picking applications', 'Assembly automation', 'Real-world challenges'],
      },
    ],
  },
  {
    title: 'Module 4: Programming & Simulation',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 4.1: Arm Programming in ROS',
        duration: '1.5h',
        topics: ['MoveIt! framework', 'Motion planning', 'Trajectory execution'],
      },
      {
        title: 'Lesson 4.2: Simulation Environments',
        duration: '1.5h',
        topics: ['Gazebo for arm simulation', 'Physics simulation accuracy', 'Virtual commissioning'],
      },
      {
        title: 'Lesson 4.3: Real Robot Integration',
        duration: '1.5h',
        topics: ['Hardware communication', 'Real-time control', 'Coordinating multiple subsystems'],
      },
      {
        title: 'Lesson 4.4: Debugging & Optimization',
        duration: '1h',
        topics: ['Performance tuning', 'Collision avoidance in simulation', 'Hardware validation'],
      },
    ],
  },
  {
    title: 'Module 5: Capstone Project',
    hours: 6,
    lessons: [
      {
        title: 'Project: Build & Control a 3-DOF Robotic Arm',
        duration: '6h',
        topics: [
          'Design a 3-DOF arm (DH parameters specified)',
          'Assemble the mechanical structure',
          'Implement forward & inverse kinematics',
          'Program pick-and-place task',
          'Test accuracy & repeatability',
        ],
        deliverables: [
          'Physical/simulated arm (video demo)',
          'Complete code repository',
          'Kinematics analysis document',
          'Performance metrics & report',
        ],
      },
    ],
  },
]

const learningOutcomes = [
  'Forward & inverse kinematics',
  'Robot control for manipulation',
  'Grasping & object handling',
  'Real-world arm programming',
]

export default function AdvancedCurriculumPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/courses/advanced"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-2">Advanced Robotics – Robotic Arms & Manipulation</h1>
          {(() => {
            const t = getPreferredForText('advanced')
            return t ? <p className="text-sm md:text-base text-[#EDEDED]/60 mb-4 break-words">{t}</p> : null
          })()}
          <p className="text-xl text-[#EDEDED]/80 mb-6">Complete Curriculum (30 hours)</p>
          <div className="flex items-center gap-6 text-[#EDEDED]/60">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>30 hours</span>
            </div>
            <div className="px-3 py-1 bg-[#00D9FF]/20 text-[#00D9FF] rounded-full text-sm font-semibold">
              Prerequisites: Robotics Fundamentals + Intermediate Systems
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
          <h3 className="text-3xl font-bold mb-4">Ready to Master Robotic Manipulation?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Enroll now and become an expert in robotic arms and manipulation
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
