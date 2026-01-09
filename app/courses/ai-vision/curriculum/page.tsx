'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, BookOpen, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const modules = [
  {
    title: 'Module 1: Computer Vision Fundamentals',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 1.1: Image Processing Basics',
        duration: '2h',
        topics: ['Image representation & color spaces', 'Filtering & convolution', 'Edge detection (Sobel, Canny)'],
      },
      {
        title: 'Lesson 1.2: Feature Detection & Matching',
        duration: '2h',
        topics: ['Keypoints (SIFT, SURF, ORB)', 'Feature descriptors', 'Template matching'],
      },
      {
        title: 'Lesson 1.3: Geometric Transformations',
        duration: '1h',
        topics: ['Perspective transforms', 'Image registration'],
      },
      {
        title: 'Lesson 1.4: OpenCV for Robotics',
        duration: '1h',
        topics: ['OpenCV library setup', 'Python bindings', 'Real-time video processing'],
      },
    ],
  },
  {
    title: 'Module 2: Object Detection & Recognition',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 2.1: Classical Methods',
        duration: '2h',
        topics: ['Haar cascades', 'Histogram of Oriented Gradients (HOG)', 'Color-based detection'],
      },
      {
        title: 'Lesson 2.2: Deep Learning-Based Detection',
        duration: '2h',
        topics: ['Convolutional Neural Networks (CNN) overview', 'YOLO (You Only Look Once)', 'Faster R-CNN', '**Project**: Object detection with pre-trained models'],
      },
      {
        title: 'Lesson 2.3: Transfer Learning',
        duration: '1h',
        topics: ['Fine-tuning models', 'Domain adaptation'],
      },
      {
        title: 'Lesson 2.4: Real-Time Implementation',
        duration: '1h',
        topics: ['Edge devices (Jetson Nano, Raspberry Pi)', 'Model optimization (quantization, pruning)'],
      },
    ],
  },
  {
    title: 'Module 3: Machine Learning for Robotics',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 3.1: Supervised Learning',
        duration: '1.5h',
        topics: ['Classification & regression', 'Training & evaluation', 'Cross-validation'],
      },
      {
        title: 'Lesson 3.2: Reinforcement Learning Basics',
        duration: '2h',
        topics: ['Q-learning', 'Policy gradient methods', 'Simulation environment (OpenAI Gym)'],
      },
      {
        title: 'Lesson 3.3: Unsupervised Learning',
        duration: '1h',
        topics: ['Clustering (K-means)', 'Dimensionality reduction'],
      },
      {
        title: 'Lesson 3.4: Practical ML Workflows',
        duration: '1.5h',
        topics: ['Data collection & labeling', 'Hyperparameter tuning', 'Model deployment'],
      },
    ],
  },
  {
    title: 'Module 4: Integration with Robotics Systems',
    hours: 6,
    lessons: [
      {
        title: 'Lesson 4.1: Vision-ROS Integration',
        duration: '1.5h',
        topics: ['Image topics in ROS', 'Publishing/subscribing to camera feeds', 'Synchronizing multiple sensors'],
      },
      {
        title: 'Lesson 4.2: Real-Time Performance',
        duration: '1.5h',
        topics: ['Latency optimization', 'GPU acceleration (CUDA)', 'Threading & multiprocessing'],
      },
      {
        title: 'Lesson 4.3: Sensor Fusion',
        duration: '1h',
        topics: ['Combining vision with other sensors', 'Kalman filtering for tracking'],
      },
      {
        title: 'Lesson 4.4: Handling Edge Cases',
        duration: '1h',
        topics: ['Occlusions', 'Varying lighting', 'Robustness strategies'],
      },
    ],
  },
  {
    title: 'Module 5: Capstone Project',
    hours: 6,
    lessons: [
      {
        title: 'Project: AI-Powered Robot for Object Sorting',
        duration: '6h',
        topics: [
          'Build a vision system for object detection',
          'Train a custom classifier or use transfer learning',
          'Integrate with robotic arm',
          'Automate sorting task (red vs. blue objects)',
        ],
        deliverables: [
          'Trained model + evaluation metrics',
          'ROS nodes for vision & control',
          'Integration documentation',
          'System performance report',
        ],
      },
    ],
  },
]

const learningOutcomes = [
  'Computer vision fundamentals',
  'Machine learning for robotics',
  'Object detection & tracking',
  'Real-time inference on robots',
]

export default function AIVisionCurriculumPage() {
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/courses/ai-vision"
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AI & Vision for Robotics</h1>
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
          <h3 className="text-3xl font-bold mb-4">Ready to Master AI & Vision?</h3>
          <p className="text-xl text-[#EDEDED]/80 mb-8">
            Enroll now and build intelligent vision systems for robotics
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
