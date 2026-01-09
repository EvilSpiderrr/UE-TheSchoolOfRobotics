'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, MessageCircle, Users, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MentorPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Course selection guidance',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Request submitted successfully!' })
        setFormData({ name: '', email: '', topic: 'Course selection guidance', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit request' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <main className="relative min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#00D9FF] hover:text-[#00FF88] transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <MessageCircle className="text-[#00D9FF]" size={48} />
            <h1 className="text-5xl font-bold">Talk to a Mentor</h1>
          </div>
          
          <p className="text-xl text-[#EDEDED]/80 mb-12">
            Get personalized guidance from experienced robotics engineers. 
            Our mentors help you navigate your learning journey and career path.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            {submitStatus.type && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === 'success' 
                  ? 'bg-[#00FF88]/20 border border-[#00FF88]/50 text-[#00FF88]' 
                  : 'bg-red-500/20 border border-red-500/50 text-red-400'
              }`}>
                {submitStatus.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                What would you like to discuss?
              </label>
              <select 
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
              >
                <option>Course selection guidance</option>
                <option>Career path advice</option>
                <option>Technical questions</option>
                <option>Project help</option>
                <option>General inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                Message
              </label>
              <textarea
                rows={6}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                placeholder="Tell us about your goals, questions, or what you'd like help with..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-5 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Request Mentor Session'}
            </button>
          </form>

          <div className="pt-12 border-t border-[#1A1A1A]">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Users className="text-[#00FF88]" size={28} />
              Why Talk to a Mentor?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Get personalized learning path recommendations',
                'Understand industry requirements and expectations',
                'Receive feedback on your projects',
                'Navigate career transitions and opportunities',
                'Learn from real-world engineering experiences',
                'Get answers to technical questions',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={20} />
                  <span className="text-[#EDEDED]/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
