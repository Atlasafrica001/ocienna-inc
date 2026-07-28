import type { IconName } from '../components/Icon/Icon'

export interface Differentiator {
  icon: IconName
  title: string
  body: string
}

export const differentiators: Differentiator[] = [
  {
    icon: 'document',
    title: 'Upfront, itemized pricing',
    body: 'Every price is posted before you ask. No back-and-forth, no last-minute customs duties or hidden fees at signing.',
  },
  {
    icon: 'creditCard',
    title: 'Financing for real credit histories',
    body: 'Our lender network covers a wide range of credit profiles, working with top Nigerian banks to get you approved.',
  },
  {
    icon: 'wrench',
    title: 'Certified service, not a guessing game',
    body: 'Our mechanics explain what actually needs doing and quote it before touching your vehicle. No unnecessary replacements.',
  },
  {
    icon: 'users',
    title: 'Nigerian-owned since day one',
    body: 'Local automotive experts founded Ocean Inc. in 2011. We understand Nigerian roads and what vehicles survive them.',
  },
]
