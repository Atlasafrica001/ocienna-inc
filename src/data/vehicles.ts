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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/2020_Toyota_Corolla_Altis_1.8_G_interior_and_exterior_in_Central_Plaza_Khon_Kaen%2C_Thailand.jpg/960px-2020_Toyota_Corolla_Altis_1.8_G_interior_and_exterior_in_Central_Plaza_Khon_Kaen%2C_Thailand.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lexus_RX_350_AWD_%28AL20%29_EX_front.jpg/960px-Lexus_RX_350_AWD_%28AL20%29_EX_front.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2018_Toyota_Land_Cruiser_Prado_%28KDJ150R%29_GXL_wagon_%282018-09-17%29_01.jpg/960px-2018_Toyota_Land_Cruiser_Prado_%28KDJ150R%29_GXL_wagon_%282018-09-17%29_01.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2021_Toyota_Hilux_Invincible_X_D-4D_4WD_Double_Cab_2.8.jpg/960px-2021_Toyota_Hilux_Invincible_X_D-4D_4WD_Double_Cab_2.8.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/2018_Honda_Accord_1.5T_EX-L_front_3.24.18.jpg/960px-2018_Honda_Accord_1.5T_EX-L_front_3.24.18.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2019_Mercedes-Benz_GLE_450_AMG_Line_Premium_Plus_4MATIC_3.0_Front.jpg/960px-2019_Mercedes-Benz_GLE_450_AMG_Line_Premium_Plus_4MATIC_3.0_Front.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/2018_Land_Rover_Range_Rover_Vogue_SE_3.0.jpg/960px-2018_Land_Rover_Range_Rover_Vogue_SE_3.0.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/2021_Hyundai_Elantra_SEL_in_Portofino_Gray%2C_Front_Left%2C_10-24-2021.jpg/960px-2021_Hyundai_Elantra_SEL_in_Portofino_Gray%2C_Front_Left%2C_10-24-2021.jpg',
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Toyota_Hiace_Commuter_Super_Long_Roof_001.JPG/960px-Toyota_Hiace_Commuter_Super_Long_Roof_001.JPG',
  },
]
