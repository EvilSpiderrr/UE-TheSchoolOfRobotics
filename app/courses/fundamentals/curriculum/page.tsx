'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Target, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const modules = [
  {
    title: 'Module 1: Introduction to Robotics',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 1.1: What is a Robot? History & Classification',
        duration: '1h',
        topics: ['Types: Industrial, Service, Mobile, Humanoid', 'Real-world examples & applications'],
      },
      {
        title: 'Lesson 1.2: Robot Anatomy & Components',
        duration: '1.5h',
        topics: ['Frame & links', 'Joints & actuators (motors, hydraulics)', 'Sensors (vision, proximity, touch)', 'Control systems'],
      },
      {
        title: 'Lesson 1.3: Key Robotics Concepts',
        duration: '1.5h',
        topics: ['Degrees of Freedom (DOF)', 'Work envelope & workspace', 'Accuracy, repeatability, speed', 'Payload capacity'],
      },
      {
        title: 'Lesson 1.4: Career Paths in Robotics',
        duration: '1h',
        topics: ['Industry opportunities', 'Skill requirements', 'Job market in India'],
      },
      {
        title: 'Lesson 1.5: Safety & Lab Practices',
        duration: '1h',
        topics: ['Electrical safety', 'Mechanical hazards', 'Lab protocols'],
      },
    ],
  },
  {
    title: 'Module 2: Mechanical Design & Assembly',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 2.1: Basics of Mechanical Design',
        duration: '1.5h',
        topics: ['Materials & properties', 'Load calculations', 'Design for manufacturability'],
      },
      {
        title: 'Lesson 2.2: Assembly of a Simple Robot Arm',
        duration: '2h',
        topics: ['Step-by-step assembly guide', 'Tools required', 'Troubleshooting common issues', '**Practical Project**: Assemble a 2-DOF robotic arm'],
      },
      {
        title: 'Lesson 2.3: Gearing & Power Transmission',
        duration: '1.5h',
        topics: ['Gear ratios', 'Belt & pulley systems', 'Torque & speed calculations'],
      },
      {
        title: 'Lesson 2.4: CAD Basics for Robotics',
        duration: '1h',
        topics: ['Introduction to Fusion 360', '3D modeling basics', 'Exporting for 3D printing'],
      },
    ],
  },
  {
    title: 'Module 3: Electronics & Microcontrollers',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 3.1: Electrical Fundamentals',
        duration: '1h',
        topics: ['Voltage, current, resistance', 'Ohm\'s law', 'Power calculations'],
      },
      {
        title: 'Lesson 3.2: Introduction to Arduino',
        duration: '2h',
        topics: ['Arduino board overview', 'Digital & analog pins', 'PWM (Pulse Width Modulation)', '**Hands-on**: LED blink program'],
      },
      {
        title: 'Lesson 3.3: Interfacing Motors & Sensors',
        duration: '2h',
        topics: ['DC motor control with L298N driver', 'Servo motors', 'Ultrasonic distance sensors', 'IR sensors', '**Project**: Control motor speed with sensor input'],
      },
      {
        title: 'Lesson 3.4: Power Supply & Battery Management',
        duration: '1h',
        topics: ['Battery types (Li-ion, Li-Po)', 'Voltage regulation', 'Charging circuits'],
      },
    ],
  },
  {
    title: 'Module 4: Programming & Control Systems',
    hours: 7,
    lessons: [
      {
        title: 'Lesson 4.1: Arduino Programming Basics',
        duration: '2h',
        topics: ['C/C++ syntax for Arduino', 'Setup() and loop() functions', 'Variables & data types', 'Control structures (if/else, loops)'],
      },
      {
        title: 'Lesson 4.2: Reading Sensors & Making Decisions',
        duration: '2h',
        topics: ['Analog input reading', 'Thresholding', 'State machines', '**Project**: Light-following robot'],
      },
      {
        title: 'Lesson 4.3: Introduction to Control Theory',
        duration: '2h',
        topics: ['Open-loop vs. closed-loop control', 'PID controllers (overview)', 'Feedback mechanisms'],
      },
      {
        title: 'Lesson 4.4: Debugging & Optimization',
        duration: '1h',
        topics: ['Serial communication for debugging', 'Common errors & fixes', 'Performance optimization'],
      },
    ],
  },
  {
    title: 'Module 5: Hands-on Capstone Project',
    hours: 5,
    lessons: [
      {
        title: 'Project: Build a Line-Following Robot',
        duration: '5h',
        topics: [
          'Design & assemble the chassis',
          'Integrate IR sensors',
          'Program decision logic',
          'Test & calibrate',
          'Documentation & presentation',
        ],
        deliverables: [
          'Working robot (video demo)',
          'Code repository (GitHub)',
          'Project report (2000 words)',
          'Presentation (5 mins)',
        ],
      },
    ],
  },
]

const assignments = [
  { name: 'Module 1 Quiz', type: 'MCQ (10 questions)', deadline: 'Day 5', points: 100 },
  { name: 'Module 2 Assembly Report', type: 'Written + Photo evidence', deadline: 'Day 12', points: 150 },
  { name: 'Module 3 Circuit Diagram', type: 'Schematic drawing', deadline: 'Day 18', points: 100 },
  { name: 'Module 4 Coding Assignment', type: 'Arduino code + demo', deadline: 'Day 25', points: 200 },
  { name: 'Final Project', type: 'Working robot + documentation', deadline: 'Day 30', points: 300 },
]

const learningOutcomes = [
  'Understand robot anatomy, classifications, and applications',
  'Learn key robotics terminology (DOF, workspace, payload)',
  'Basic assembly and troubleshooting',
  'Introduction to programming concepts',
]

export default function FundamentalsCurriculumPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/courses/fundamentals"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Robotics Fundamentals</h1>
          <p className="text-xl text-[#EDEDED]/80 mb-6">Complete Curriculum (30 hours)</p>
          <div className="flex items-center gap-6 text-[#EDEDED]/60">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>30 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} />
              <span>850 Total Points</span>
            </div>
          </div>
        </motion.div>

        {/* Learning Outcomes */}
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

        {/* Module Breakdown */}
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
                  <h3 className="text-2xl font-bold text-[#00D9FF]">
                    {module.title}
                  </h3>
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

        {/* Assignments & Assessments */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8">Assignments & Assessments</h2>
          <div className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#050505]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#EDEDED]">Assignment</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#EDEDED]">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#EDEDED]">Deadline</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#EDEDED]">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {assignments.map((assignment, index) => (
                    <tr key={index} className="border-t border-[#1A1A1A] hover:bg-[#050505] transition-colors">
                      <td className="px-6 py-4 text-[#EDEDED]">{assignment.name}</td>
                      <td className="px-6 py-4 text-[#EDEDED]/70">{assignment.type}</td>
                      <td className="px-6 py-4 text-[#EDEDED]/70">{assignment.deadline}</td>
                      <td className="px-6 py-4 text-[#00D9FF] font-semibold">{assignment.points}</td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#00D9FF] bg-[#00D9FF]/5">
                    <td colSpan={3} className="px-6 py-4 text-right font-bold text-[#EDEDED]">Total Points</td>
                    <td className="px-6 py-4 text-[#00FF88] font-bold">850</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/30 rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Start Learning?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Enroll now and begin your robotics engineering journey
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
