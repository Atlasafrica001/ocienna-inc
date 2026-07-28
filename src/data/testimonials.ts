export interface Testimonial {
  id: string
  quote: string
  author: string
  location: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'No pressure, straightforward pricing, and financing that actually fit my budget. Buying my first car here was painless.',
    author: 'Chinedu Okafor',
    location: 'Lekki, Lagos',
    rating: 5,
  },
  {
    id: 't2',
    quote:
      'We were test driving the Lexus RX 350 the same afternoon we called. Paperwork took under an hour.',
    author: 'Amina Yusuf',
    location: 'Garki, Abuja',
    rating: 5,
  },
  {
    id: 't3',
    quote:
      'They treat you like a person, not a sale. I have bought two vehicles here and referred half my office.',
    author: 'Tunde Bakare',
    location: 'Ikeja, Lagos',
    rating: 5,
  },
  {
    id: 't4',
    quote:
      'I left with a clear breakdown of every option and no surprise customs duties or fees at signing, exactly like they promised.',
    author: 'Ngozi Eze',
    location: 'Port Harcourt, Rivers',
    rating: 5,
  },
  {
    id: 't5',
    quote:
      'Three years on, the service team still gives me honest quotes and explains what actually needs doing without overcharging.',
    author: 'Oluwaseun Adeyemi',
    location: 'Surulere, Lagos',
    rating: 4,
  },
  {
    id: 't6',
    quote:
      'Our trade-in estimate matched what they quoted online to the Naira. No last-minute renegotiating.',
    author: 'Fatima Bello',
    location: 'Kano, Kano',
    rating: 5,
  },
]

export const brands = ['Lagos AutoGroup', 'Naija Drive', 'Eko Fleet', 'Abuja Motors', 'Zenith AutoFinance']
