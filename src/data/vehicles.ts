export interface Vehicle {
  id: string
  name: string
  category: string
  price: string
  description: string
  fuelType: string
  seats: string
  transmission: string
  image: string
}

export const featuredVehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Toyota Corolla Sedan',
    category: 'Sedan',
    price: 'From ₦ 12,500,000',
    description:
      'The most reliable daily driver on Nigerian roads. Fuel-efficient, easy to maintain, and built with a suspension that handles city commutes effortlessly.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v2',
    name: 'Lexus RX 350',
    category: 'SUV',
    price: 'From ₦ 35,000,000',
    description:
      'The perfect blend of luxury and durability. Features premium leather interior, a quiet cabin, and elevated ground clearance ideal for any terrain.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v3',
    name: 'Toyota Land Cruiser Prado',
    category: 'SUV',
    price: 'From ₦ 55,000,000',
    description:
      'Unmatched road presence and off-road capability. Built for executives and families who demand safety, space, and prestige on the highway.',
    fuelType: 'Petrol',
    seats: '7 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v4',
    name: 'Toyota Hilux V6',
    category: 'Truck',
    price: 'From ₦ 42,000,000',
    description:
      'The undisputed king of the pickup segment. Rugged frame, generous towing capacity, and reliable performance whether on the site or in the city.',
    fuelType: 'Diesel',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v5',
    name: 'Honda Accord Touring',
    category: 'Sedan',
    price: 'From ₦ 18,500,000',
    description:
      'A sleek, executive sedan offering a spacious tech-forward cabin, strong AC for hot days, and a smooth ride that rivals luxury brands.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v6',
    name: 'Mercedes-Benz GLE 450',
    category: 'SUV',
    price: 'From ₦ 85,000,000',
    description:
      'Ultimate luxury in an SUV package. Features MBUX infotainment, adaptive air suspension, and an imposing stance that commands respect.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v7',
    name: 'Range Rover Vogue',
    category: 'SUV',
    price: 'From ₦ 110,000,000',
    description:
      'The pinnacle of British automotive luxury. Exquisite craftsmanship, panoramic roof, and a ride so smooth you forget the potholes.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v8',
    name: 'Hyundai Elantra',
    category: 'Sedan',
    price: 'From ₦ 14,200,000',
    description:
      'A modern, sharp-looking sedan that is highly economical. Perfect for young professionals looking for style, low maintenance, and tech.',
    fuelType: 'Petrol',
    seats: '5 Seats',
    transmission: 'Automatic',
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'v9',
    name: 'Toyota Hiace Bus',
    category: 'Commercial',
    price: 'From ₦ 38,000,000',
    description:
      'The leading choice for transport companies, schools, and corporate fleets across Nigeria. Built to last with unparalleled resale value.',
    fuelType: 'Petrol',
    seats: '14 Seats',
    transmission: 'Manual',
    image:
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
  },
]
