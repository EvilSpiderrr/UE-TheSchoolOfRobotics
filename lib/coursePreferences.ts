/**
 * Preferred-for mapping for each course. Inclusive, guidance-oriented (not eligibility).
 * - CSE / AI / Data Science → AI & Vision, Intermediate – Autonomous Systems
 * - Mechanical → Fundamentals, Advanced – Robotic Arms & Manipulation
 * - ECE / Electrical → Fundamentals, Drone Programming & Control
 * - Mechatronics → All courses
 * - Beginners (Any Branch) → Robotics Fundamentals
 */

export type CourseId = 'fundamentals' | 'intermediate' | 'advanced' | 'ai-vision' | 'drones'

/** Short display labels for compact UI (e.g. "Mechanical • Mechatronics") */
const DISPLAY_LABELS: Record<string, string> = {
  'Mechanical Engineering': 'Mechanical',
  'Electrical Engineering': 'Electrical',
  'Mechatronics Engineering': 'Mechatronics',
  'Beginners (Any Branch)': 'Beginners',
}

export function getPreferredBranches(courseId: CourseId | string): string[] {
  const mapping: Record<string, string[]> = {
    fundamentals: ['Mechanical Engineering', 'ECE', 'Electrical Engineering', 'Beginners (Any Branch)', 'Mechatronics Engineering'],
    intermediate: ['CSE', 'AI', 'Data Science', 'Mechatronics Engineering'],
    advanced: ['Mechanical Engineering', 'Mechatronics Engineering'],
    'ai-vision': ['CSE', 'AI', 'Data Science', 'Mechatronics Engineering'],
    drones: ['ECE', 'Electrical Engineering', 'Mechatronics Engineering'],
  }
  return mapping[courseId] || []
}

export function formatPreferredBranches(branches: string[]): string {
  if (branches.length === 0) return ''
  const display = branches.map((b) => DISPLAY_LABELS[b] ?? b)
  return display.join(' • ')
}

/** Returns "Preferred For: X • Y • Z" for use in UI. Empty string if no branches. */
export function getPreferredForText(courseId: CourseId | string): string {
  const branches = getPreferredBranches(courseId)
  if (branches.length === 0) return ''
  return `Preferred For: ${formatPreferredBranches(branches)}`
}
