import type { Stat } from '../components/StatBar/StatBar'
import type { ProcessStep } from '../components/ProcessSteps/ProcessSteps'

export const dealershipStats: Stat[] = [
  { value: '15+', label: 'Years in Business' },
  { value: '4,800+', label: 'Vehicles Sold' },
  { value: '4.9★', label: 'Average Rating' },
  { value: '96%', label: 'Customer Referral Rate' },
]

export const buyingSteps: ProcessStep[] = [
  {
    title: 'Browse & Compare',
    body: 'Explore our featured inventory online and shortlist the vehicles that match your budget and lifestyle.',
  },
  {
    title: 'Book a Test Drive',
    body: 'Reserve a time slot in seconds and we will have your chosen vehicle ready when you arrive.',
  },
  {
    title: 'Get Pre-Approved',
    body: 'Submit a quick financing inquiry and our team will match you with lenders suited to your credit profile.',
  },
  {
    title: 'Drive Away',
    body: 'Sign your paperwork with transparent, itemized pricing and drive off the lot the same day.',
  },
]

export const milestones: ProcessStep[] = [
  {
    title: '2011',
    body: 'Ocean Inc. opens its doors as a small independent lot in Ikeja with twelve vehicles and a promise of honest pricing.',
  },
  {
    title: '2015',
    body: 'We open our in-house financing desk, partnering with regional banks to serve buyers of every credit background.',
  },
  {
    title: '2019',
    body: 'Our service department expands to handle maintenance, diagnosis, and repairs for the full range of makes we sell.',
  },
  {
    title: 'Today',
    body: 'Over 4,800 vehicles sold and a growing team dedicated to making car buying transparent and stress-free in Nigeria.',
  },
]
