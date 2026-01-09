'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Code, Target, Clock, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const courseData: Record<string, {
  title: string
  level: string
  duration: string
  description: string
  tools: string[]
  modules: { title: string; topics: string[] }[]
  capstone: string
  outcomes: string[]
}> = {
  fundamentals: {
    title: 'Robotics Fundamentals',
    level: 'Beginner',
    duration: '30 hours',
    description: 'Master the basics of robotics from mechanical design to programming. Build your first autonomous robot.',
    tools: ['Arduino', 'C++', 'Basic Electronics', 'Sensors', 'Motors', 'Breadboard'],
    modules: [
      {
        title: 'Introduction to Robotics',
        topics: ['What is robotics?', 'History and applications', 'Robotics ecosystem overview'],
      },
      {
        title: 'Mechanical Design Basics',
        topics: ['CAD fundamentals', '3D printing', 'Mechanical assembly', 'Chassis design'],
      },
      {
        title: 'Electronics & Sensors',
        topics: ['Basic circuits', 'Sensors (IR, ultrasonic, IMU)', 'Motor control', 'Power systems'],
      },
      {
        title: 'Programming Fundamentals',
        topics: ['Arduino programming', 'C++ basics', 'Sensor interfacing', 'Control loops'],
      },
      {
        title: 'Capstone Project',
        topics: ['Line-following robot', 'Obstacle avoidance', 'System integration', 'Testing & debugging'],
      },
    ],
    capstone: 'Build a line-following robot with obstacle avoidance',
    outcomes: [
      'Design and build a complete robotic system',
      'Program microcontrollers for sensor integration',
      'Understand mechanical design principles',
      'Debug and troubleshoot robotic systems',
    ],
  },
  intermediate: {
    title: 'Intermediate Robotics – Autonomous Systems',
    level: 'Intermediate',
    duration: '30 hours',
    description: 'Learn ROS, autonomous navigation, and sensor fusion. Build robots that can navigate real environments.',
    tools: ['ROS', 'Python', 'SLAM', 'Navigation Stack', 'Gazebo', 'RViz'],
    modules: [
      {
        title: 'ROS Fundamentals',
        topics: ['ROS architecture', 'Topics, services, actions', 'ROS nodes and packages', 'Workspace setup'],
      },
      {
        title: 'Robot Modeling',
        topics: ['URDF files', 'Robot description', 'TF transforms', 'Visualization'],
      },
      {
        title: 'Sensor Integration',
        topics: ['LIDAR integration', 'Camera processing', 'IMU fusion', 'Sensor drivers'],
      },
      {
        title: 'SLAM & Navigation',
        topics: ['Mapping algorithms', 'Localization', 'Path planning', 'Navigation stack'],
      },
      {
        title: 'Capstone Project',
        topics: ['Autonomous mobile robot', 'Mapping unknown environments', 'Navigation to goals', 'Real-world deployment'],
      },
    ],
    capstone: 'Develop an autonomous mobile robot with mapping and navigation',
    outcomes: [
      'Master ROS for robotics development',
      'Implement SLAM algorithms',
      'Build autonomous navigation systems',
      'Deploy robots in real environments',
    ],
  },
  advanced: {
    title: 'Advanced Robotics – Robotic Arms & Manipulation',
    level: 'Advanced',
    duration: '30 hours',
    description: 'Master robotic manipulation, inverse kinematics, and advanced control systems for industrial applications.',
    tools: ['ROS', 'MoveIt', 'Kinematics', 'Gripper Control', 'Gazebo', 'URDF'],
    modules: [
      {
        title: 'Kinematics & Dynamics',
        topics: ['Forward kinematics', 'Inverse kinematics', 'Jacobian matrices', 'Dynamics modeling'],
      },
      {
        title: 'MoveIt Framework',
        topics: ['MoveIt setup', 'Motion planning', 'Collision detection', 'Trajectory execution'],
      },
      {
        title: 'Gripper & End-Effector Design',
        topics: ['Gripper types', 'Force control', 'Grasp planning', 'Tool design'],
      },
      {
        title: 'Advanced Control',
        topics: ['PID control', 'Trajectory tracking', 'Force/torque control', 'Compliance'],
      },
      {
        title: 'Capstone Project',
        topics: ['6-DOF robotic arm', 'Pick and place operations', 'Assembly tasks', 'Industrial integration'],
      },
    ],
    capstone: 'Design and control a 6-DOF robotic arm for pick-and-place operations',
    outcomes: [
      'Understand robotic kinematics and dynamics',
      'Use MoveIt for motion planning',
      'Design and control robotic manipulators',
      'Build industrial-grade manipulation systems',
    ],
  },
  'ai-vision': {
    title: 'AI & Vision for Robotics',
    level: 'Advanced',
    duration: '30 hours',
    description: 'Integrate computer vision and AI into robotics. Build systems that see, understand, and act.',
    tools: ['OpenCV', 'TensorFlow', 'YOLO', 'Jetson Nano', 'ROS', 'PyTorch'],
    modules: [
      {
        title: 'Computer Vision Basics',
        topics: ['Image processing', 'Feature detection', 'Object recognition', 'OpenCV fundamentals'],
      },
      {
        title: 'Deep Learning for Vision',
        topics: ['CNN architectures', 'Transfer learning', 'Object detection (YOLO)', 'Semantic segmentation'],
      },
      {
        title: 'Vision-Robot Integration',
        topics: ['Camera calibration', '3D reconstruction', 'Visual servoing', 'ROS vision stack'],
      },
      {
        title: 'Edge AI Deployment',
        topics: ['Jetson Nano setup', 'Model optimization', 'Real-time inference', 'Performance tuning'],
      },
      {
        title: 'Capstone Project',
        topics: ['Vision-based manipulation', 'Object detection system', 'Real-time processing', 'Production deployment'],
      },
    ],
    capstone: 'Build a vision-based object detection and manipulation system',
    outcomes: [
      'Implement computer vision algorithms',
      'Deploy deep learning models on edge devices',
      'Integrate vision with robotic systems',
      'Build production-ready vision systems',
    ],
  },
  drones: {
    title: 'Drone Programming & Control',
    level: 'Intermediate',
    duration: '30 hours',
    description: 'Learn drone programming, flight control, and autonomous mission planning for commercial applications.',
    tools: ['PX4', 'MAVLink', 'ArduPilot', 'Flight Control', 'QGroundControl', 'ROS'],
    modules: [
      {
        title: 'Drone Fundamentals',
        topics: ['Drone architecture', 'Flight dynamics', 'Propulsion systems', 'Safety protocols'],
      },
      {
        title: 'Flight Control Systems',
        topics: ['PX4 autopilot', 'ArduPilot setup', 'Flight modes', 'Stabilization'],
      },
      {
        title: 'Autonomous Mission Planning',
        topics: ['Waypoint navigation', 'Mission planning', 'Geofencing', 'Return-to-home'],
      },
      {
        title: 'Sensor Integration',
        topics: ['GPS integration', 'IMU calibration', 'Camera gimbals', 'Payload systems'],
      },
      {
        title: 'Capstone Project',
        topics: ['Autonomous inspection drone', 'Delivery mission', 'Real-world flight testing', 'Data collection'],
      },
    ],
    capstone: 'Program an autonomous drone for inspection and delivery missions',
    outcomes: [
      'Program and control drones',
      'Design autonomous missions',
      'Integrate sensors and payloads',
      'Deploy commercial drone applications',
    ],
  },
}

export default function CourseDetailPage() {
  const params = useParams()
  const id = params?.id as string
  const course = id ? courseData[id] : null

  if (!id || !course) {
    return (
      <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-[#00D9FF] hover:text-[#00FF88]">
            Back to Courses
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-[#00D9FF]/20 text-[#00D9FF] text-sm font-semibold rounded-full">
              {course.level}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{course.title}</h1>
          <p className="text-xl text-[#EDEDED]/80 mb-8">{course.description}</p>
          
          <div className="flex flex-wrap gap-6 text-[#EDEDED]/60">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={18} />
              <span>Industry Certificate</span>
            </div>
          </div>
        </motion.div>

        {/* What You Will Build */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Target className="text-[#00FF88]" size={32} />
            What You Will Build
          </h2>
          <p className="text-xl text-[#EDEDED]/80">{course.capstone}</p>
        </motion.section>

        {/* Tools & Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Code className="text-[#00D9FF]" size={32} />
            Tools & Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {course.tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg text-[#EDEDED]"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Module Breakdown */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Module-by-Module Breakdown</h2>
          <div className="space-y-6">
            {course.modules.map((module, index) => (
              <div
                key={index}
                className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-[#00D9FF]">
                  Module {index + 1}: {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start gap-2 text-[#EDEDED]/80">
                      <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={18} />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Career Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Career Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-4"
              >
                <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={20} />
                <span className="text-[#EDEDED]/80">{outcome}</span>
              </div>
            ))}
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
          <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Join engineers building the future of robotics
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
