'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnrollPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    course: 'Robotics Fundamentals',
    background: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Enrollment request submitted successfully!' })
        setFormData({ firstName: '', lastName: '', email: '', course: 'Robotics Fundamentals', background: '' })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to submit enrollment request' })
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
          <h1 className="text-5xl font-bold mb-6">Enroll in The School of Robotics</h1>
          <p className="text-xl text-[#EDEDED]/80 mb-12">
            Start your journey to becoming a robotics engineer. Fill out the form below and our team will get in touch.
          </p>

          {submitStatus.type && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitStatus.type === 'success' 
                ? 'bg-[#00FF88]/20 border border-[#00FF88]/50 text-[#00FF88]' 
                : 'bg-red-500/20 border border-red-500/50 text-red-400'
            }`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Doe"
                />
              </div>
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
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                Which course interests you most?
              </label>
              <select 
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors"
              >
                <option>Robotics Fundamentals</option>
                <option>Intermediate Robotics – Autonomous Systems</option>
                <option>Advanced Robotics – Robotic Arms & Manipulation</option>
                <option>AI & Vision for Robotics</option>
                <option>Drone Programming & Control</option>
                <option>All Courses</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-[#EDEDED]">
                Tell us about your background
              </label>
              <textarea
                rows={4}
                value={formData.background}
                onChange={(e) => setFormData({ ...formData, background: e.target.value })}
                className="w-full px-4 py-3 bg-[#050505] border border-[#1A1A1A] rounded-lg text-[#EDEDED] focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                placeholder="Your experience, goals, and what you hope to achieve..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-10 py-5 bg-gradient-to-r from-[#00D9FF] to-[#00FF88] text-black font-bold rounded-lg hover:opacity-90 transition-opacity text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enrollment Request'}
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-[#1A1A1A]">
            <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
            <div className="space-y-4">
              {[
                'Our team reviews your application',
                'We schedule a call to discuss your goals',
                'You receive a personalized learning plan',
                'You start your robotics engineering journey',
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-[#00FF88] mt-1 flex-shrink-0" size={20} />
                  <span className="text-[#EDEDED]/80">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
