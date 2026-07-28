export interface Vehicle {
  id: string
  name: string
  category: string
  price: string
  description: string
}

export const featuredVehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Aurora GT Sedan',
    category: 'Sedan',
    price: 'From $32,900',
    description: 'A refined daily driver with premium interior finishes and confident handling.',
  },
  {
    id: 'v2',
    name: 'Summit XL SUV',
    category: 'SUV',
    price: 'From $41,500',
    description: 'Spacious, all-weather capable, and built for family road trips.',
  },
  {
    id: 'v3',
    name: 'Voyager Hybrid',
    category: 'Hybrid',
    price: 'From $28,750',
    description: 'Exceptional fuel efficiency without compromising on comfort or tech.',
  },
]
