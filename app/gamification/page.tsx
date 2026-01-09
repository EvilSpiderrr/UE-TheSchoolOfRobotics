'use client'

import { Trophy, Flame, TrendingUp, Award, Target, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

const badges = [
  {
    name: 'First Steps',
    description: 'Complete your first project',
    icon: Target,
    color: 'from-[#00D9FF] to-[#00D9FF]',
  },
  {
    name: 'ROS Master',
    description: 'Complete all ROS modules',
    icon: Zap,
    color: 'from-[#00FF88] to-[#00FF88]',
  },
  {
    name: 'Hardware Hero',
    description: 'Build 5 hardware projects',
    icon: Trophy,
    color: 'from-[#00FFFF] to-[#00D9FF]',
  },
  {
    name: 'Capstone Champion',
    description: 'Complete a capstone project',
    icon: Award,
    color: 'from-[#00FF88] to-[#00D9FF]',
  },
  {
    name: 'Mentor',
    description: 'Help 10 peers',
    icon: TrendingUp,
    color: 'from-[#00D9FF] to-[#00FF88]',
  },
  {
    name: 'Streak Master',
    description: '30-day learning streak',
    icon: Flame,
    color: 'from-[#FF6B00] to-[#FFD700]',
  },
]

const leaderboardExample = [
  { rank: 1, name: 'Alex Chen', points: 2840, streak: 45 },
  { rank: 2, name: 'Sarah Kumar', points: 2650, streak: 38 },
  { rank: 3, name: 'Mike Rodriguez', points: 2520, streak: 42 },
]

export default function GamificationPage() {
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
            Gamification & Progress
          </h1>
          <p className="text-xl text-[#EDEDED]/80 max-w-3xl mx-auto">
            Learning robotics should feel like engineering progression, not school homework. 
            Track your growth, earn achievements, and compete with peers.
          </p>
        </motion.div>

        {/* Points System */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#00D9FF]/10 to-[#00FF88]/10 border border-[#00D9FF]/30 rounded-lg p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Points System</h2>
            <p className="text-xl text-[#EDEDED]/80 mb-8 max-w-2xl mx-auto">
              Earn points for completing lessons, projects, and helping others. 
              Points reflect real engineering progress, not just participation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { action: 'Complete Lesson', points: '+50' },
                { action: 'Finish Project', points: '+200' },
                { action: 'Capstone Project', points: '+500' },
                { action: 'Help a Peer', points: '+100' },
                { action: 'Daily Streak', points: '+25/day' },
                { action: 'Code Review', points: '+75' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-6"
                >
                  <div className="text-3xl font-bold text-[#00D9FF] mb-2">{item.points}</div>
                  <div className="text-[#EDEDED]/80">{item.action}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Badges */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievement Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-8 text-center card-hover cursor-pointer"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="text-black" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{badge.name}</h3>
                  <p className="text-[#EDEDED]/70">{badge.description}</p>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">Leaderboard</h2>
            <p className="text-center text-[#EDEDED]/80 mb-12">
              Compete with peers and see how your progress compares. 
              Top performers get featured and mentorship opportunities.
            </p>
            <div className="space-y-4 max-w-2xl mx-auto">
              {leaderboardExample.map((entry, index) => (
                <div
                  key={entry.rank}
                  className="flex items-center gap-6 bg-[#050505] border border-[#1A1A1A] rounded-lg p-6"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                    index === 0 ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-black' :
                    index === 1 ? 'bg-gradient-to-br from-[#C0C0C0] to-[#808080] text-black' :
                    index === 2 ? 'bg-gradient-to-br from-[#CD7F32] to-[#8B4513] text-white' :
                    'bg-[#1A1A1A] text-[#EDEDED]'
                  }`}>
                    {entry.rank}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{entry.name}</div>
                    <div className="text-[#EDEDED]/60 text-sm">
                      {entry.points} points • {entry.streak} day streak
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="text-[#FF6B00]" size={20} />
                    <span className="font-semibold">{entry.streak}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Streaks */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0B0B0B] border border-[#1A1A1A] rounded-lg p-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <Flame className="text-[#FF6B00]" size={48} />
              <h2 className="text-4xl font-bold">Learning Streaks</h2>
            </div>
            <p className="text-xl text-[#EDEDED]/80 text-center max-w-3xl mx-auto mb-12">
              Build consistency with daily learning. Maintain your streak by completing lessons or projects each day. 
              Longer streaks unlock exclusive badges and bonus points.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { days: 7, reward: 'Weekly Warrior Badge' },
                { days: 30, reward: 'Monthly Master Badge' },
                { days: 100, reward: 'Century Club Badge' },
              ].map((milestone, index) => (
                <div
                  key={index}
                  className="bg-[#050505] border border-[#1A1A1A] rounded-lg p-8 text-center"
                >
                  <div className="text-5xl font-bold text-[#00D9FF] mb-4">{milestone.days}</div>
                  <div className="text-lg text-[#EDEDED]/80 mb-2">Days</div>
                  <div className="text-[#00FF88] font-semibold">{milestone.reward}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  )
}
