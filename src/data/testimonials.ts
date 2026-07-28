export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The team at Ociens made buying my first car painless. No pressure, straightforward pricing, and they helped me get financing that actually worked for my budget.',
    author: 'Marcus D.',
    location: 'Riverside, NY',
  },
  {
    id: 't2',
    quote:
      'We needed a family SUV fast and they had us test driving the Summit XL the same day. Great service from start to finish.',
    author: 'Priya S.',
    location: 'Hartsdale, NY',
  },
  {
    id: 't3',
    quote:
      'As a returning customer, I keep coming back because they treat you like a person, not a sale. Highly recommend for business fleet purchases too.',
    author: 'Daniel W.',
    location: 'Yonkers, NY',
  },
]

export const brands = ['AutoMax', 'Northline Motors', 'Crestview Auto Group', 'Ridgeway Financial', 'DriveWell']
