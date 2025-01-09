export interface Engine {
  type: string;
  size: string;
  power: string;
}

export interface MarketplaceCar {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  engine: Engine;
  transmission: string;
  price: number;
  currency: string;
  location: string;
  marketplace: string;
  imageUrl: string;
  bodyType: string;
}

export interface PremiumCar {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  mileage: string;
  location: string;
  details: string;
  marketplace: string;
  bodyType: string;
}

export interface SortOption {
  label: string;
  value: string;
  ascending: boolean;
}

export const makes = [
  'Audi',
  'BMW',
  'Ford',
  'Mercedes-Benz',
  'Toyota',
  'Volkswagen',
  'Volvo',
  'Porsche',
  'Tesla',
  'Honda',
  'Hyundai',
  'Kia',
  'Mazda',
  'Nissan',
  'Škoda',
  'Peugeot',
  'Renault',
  'Citroën',
  'Land Rover',
  'Lexus'
];

export const fuelTypes = [
  'Diesel',
  'Petrol',
  'Electric',
  'Hybrid',
  'Plug-in Hybrid',
  'LPG',
  'CNG',
  'Hydrogen'
];

export const bodyTypes = [
  'Sedan',
  'Estate',
  'SUV',
  'Coupe',
  'Hatchback',
  'Convertible',
  'Van',
  'Pickup',
  'Crossover',
  'MPV',
  'Sport Car',
  'Luxury Car'
];

export const sortOptions: SortOption[] = [
  { label: 'Price (Low to High)', value: 'price_asc', ascending: true },
  { label: 'Price (High to Low)', value: 'price_desc', ascending: false },
  { label: 'Year (Newest)', value: 'year_desc', ascending: false },
  { label: 'Year (Oldest)', value: 'year_asc', ascending: true },
  { label: 'Mileage (Low to High)', value: 'mileage_asc', ascending: true },
  { label: 'Mileage (High to Low)', value: 'mileage_desc', ascending: false }
];

export const marketplaceListings: MarketplaceCar[] = [
  {
    id: 1,
    make: 'Volkswagen',
    model: 'Passat',
    year: 2019,
    mileage: 50000,
    engine: {
      type: 'Diesel',
      size: '2.0',
      power: '150hp'
    },
    transmission: 'Manual',
    price: 52132,
    currency: 'EUR',
    location: 'Latvia',
    marketplace: 'SS.COM',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Estate'
  },
  {
    id: 2,
    make: 'BMW',
    model: 'X5',
    year: 2020,
    mileage: 35000,
    engine: {
      type: 'Diesel',
      size: '3.0',
      power: '265hp'
    },
    transmission: 'Automatic',
    price: 65900,
    currency: 'EUR',
    location: 'Lithuania',
    marketplace: 'AutoPlus.lt',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 3,
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    mileage: 15000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '283hp'
    },
    transmission: 'Automatic',
    price: 42900,
    currency: 'EUR',
    location: 'Estonia',
    marketplace: 'Auto24.ee',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Sedan'
  },
  {
    id: 4,
    make: 'Audi',
    model: 'e-tron',
    year: 2021,
    mileage: 28000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '408hp'
    },
    transmission: 'Automatic',
    price: 59900,
    currency: 'EUR',
    location: 'Germany',
    marketplace: 'Mobile.de',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 5,
    make: 'Toyota',
    model: 'RAV4',
    year: 2021,
    mileage: 42000,
    engine: {
      type: 'Hybrid',
      size: '2.5',
      power: '218hp'
    },
    transmission: 'Automatic',
    price: 38500,
    currency: 'EUR',
    location: 'Poland',
    marketplace: 'Otomoto.pl',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 6,
    make: 'Volvo',
    model: 'XC60',
    year: 2020,
    mileage: 45000,
    engine: {
      type: 'Plug-in Hybrid',
      size: '2.0',
      power: '390hp'
    },
    transmission: 'Automatic',
    price: 49900,
    currency: 'EUR',
    location: 'Sweden',
    marketplace: 'Blocket.se',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 7,
    make: 'Škoda',
    model: 'Octavia',
    year: 2021,
    mileage: 32000,
    engine: {
      type: 'Petrol',
      size: '1.5',
      power: '150hp'
    },
    transmission: 'Manual',
    price: 24900,
    currency: 'EUR',
    location: 'Czech Republic',
    marketplace: 'Sauto.cz',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Estate'
  },
  {
    id: 8,
    make: 'Mercedes-Benz',
    model: 'EQC',
    year: 2021,
    mileage: 25000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '408hp'
    },
    transmission: 'Automatic',
    price: 61900,
    currency: 'EUR',
    location: 'Netherlands',
    marketplace: 'AutoTrader.nl',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 9,
    make: 'Porsche',
    model: 'Taycan',
    year: 2022,
    mileage: 18000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '530hp'
    },
    transmission: 'Automatic',
    price: 89900,
    currency: 'EUR',
    location: 'Austria',
    marketplace: 'Willhaben.at',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Sport Car'
  },
  {
    id: 10,
    make: 'Honda',
    model: 'CR-V',
    year: 2020,
    mileage: 38000,
    engine: {
      type: 'Hybrid',
      size: '2.0',
      power: '184hp'
    },
    transmission: 'Automatic',
    price: 32900,
    currency: 'EUR',
    location: 'Finland',
    marketplace: 'Nettiauto.com',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 11,
    make: 'Hyundai',
    model: 'IONIQ 5',
    year: 2023,
    mileage: 12000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '305hp'
    },
    transmission: 'Automatic',
    price: 45900,
    currency: 'EUR',
    location: 'Denmark',
    marketplace: 'Bilbasen.dk',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 12,
    make: 'Kia',
    model: 'EV6 GT',
    year: 2023,
    mileage: 8500,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '585hp'
    },
    transmission: 'Automatic',
    price: 63900,
    currency: 'EUR',
    location: 'Belgium',
    marketplace: 'AutoScout24',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Crossover'
  },
  {
    id: 13,
    make: 'Ford',
    model: 'Mustang Mach-E',
    year: 2022,
    mileage: 25000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '346hp'
    },
    transmission: 'Automatic',
    price: 52900,
    currency: 'EUR',
    location: 'Norway',
    marketplace: 'Finn.no',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 14,
    make: 'Peugeot',
    model: '3008',
    year: 2021,
    mileage: 45000,
    engine: {
      type: 'Plug-in Hybrid',
      size: '1.6',
      power: '300hp'
    },
    transmission: 'Automatic',
    price: 39900,
    currency: 'EUR',
    location: 'France',
    marketplace: 'LeBonCoin',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'SUV'
  },
  {
    id: 15,
    make: 'Renault',
    model: 'Megane E-Tech',
    year: 2023,
    mileage: 15000,
    engine: {
      type: 'Electric',
      size: 'N/A',
      power: '220hp'
    },
    transmission: 'Automatic',
    price: 38900,
    currency: 'EUR',
    location: 'Spain',
    marketplace: 'Coches.net',
    imageUrl: '/api/placeholder/400/300',
    bodyType: 'Hatchback'
  }
];

export const premiumListings: PremiumCar[] = [
  {
    id: 1,
    make: 'BMW',
    model: 'M4 Competition',
    year: 2023,
    price: '€82,900',
    mileage: '12,500 km',
    location: 'Munich, Germany',
    details: 'Carbon Package, M Driver\'s Package, Full Service History',
    marketplace: 'AutoScout24',
    bodyType: 'Coupe'
  },
  {
    id: 2,
    make: 'Mercedes-Benz',
    model: 'EQS 450+',
    year: 2024,
    price: '€96,500',
    mileage: '8,900 km',
    location: 'Amsterdam, Netherlands',
    details: 'AMG Line, Hyperscreen, Burmester Sound System',
    marketplace: 'Mobile.de',
    bodyType: 'Luxury Car'
  },
  {
    id: 3,
    make: 'Porsche',
    model: 'Taycan Turbo',
    year: 2023,
    price: '€128,900',
    mileage: '15,200 km',
    location: 'Milan, Italy',
    details: 'Performance Package, Panoramic Roof, Sport Chrono',
    marketplace: 'AutoScout24',
    bodyType: 'Sport Car'
  },
  {
    id: 4,
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2024,
    price: '€104,500',
    mileage: '9,800 km',
    location: 'Barcelona, Spain',
    details: 'Dynamic Package Plus, B&O Sound System',
    marketplace: 'Mobile.de',
    bodyType: 'Sport Car'
  },
  {
    id: 5,
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2023,
    price: '€115,900',
    mileage: '18,500 km',
    location: 'Stockholm, Sweden',
    details: 'Autobiography Dynamic, Head-up Display, Meridian Signature Sound',
    marketplace: 'AutoScout24',
    bodyType: 'SUV'
  },
  {
    id: 6,
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: '€112,900',
    mileage: '5,200 km',
    location: 'Paris, France',
    details: 'Full Self-Driving Capability, Premium Interior',
    marketplace: 'Mobile.de',
    bodyType: 'Luxury Car'
  },
  {
    id: 7,
    make: 'Lexus',
    model: 'LC 500h',
    year: 2023,
    price: '€98,900',
    mileage: '11,200 km',
    location: 'Vienna, Austria',
    details: 'Sport+ Package, Mark Levinson Audio, Glass Roof',
    marketplace: 'AutoScout24',
    bodyType: 'Luxury Car'
  },
  {
    id: 8,
    make: 'BMW',
    model: 'iX M60',
    year: 2024,
    price: '€125,900',
    mileage: '7,800 km',
    location: 'Brussels, Belgium',
    details: 'M Sport Package, Bowers & Wilkins Diamond Surround Sound',
    marketplace: 'Mobile.de',
    bodyType: 'SUV'
  },
  {
    id: 9,
    make: 'Porsche',
    model: '911 GT3',
    year: 2024,
    price: '€189,900',
    mileage: '1,200 km',
    location: 'Monaco',
    details: 'Weissach Package, Ceramic Brakes, Front Axle Lift, Sport Chrono',
    marketplace: 'AutoScout24',
    bodyType: 'Sport Car'
  },
  {
    id: 10,
    make: 'Mercedes-Benz',
    model: 'AMG G 63',
    year: 2024,
    price: '€215,900',
    mileage: '3,500 km',
    location: 'Switzerland',
    details: 'Stronger Than Time Edition, Night Package, 22" AMG Wheels',
    marketplace: 'Mobile.de',
    bodyType: 'SUV'
  },
  {
    id: 11,
    make: 'Bentley',
    model: 'Continental GT Speed',
    year: 2023,
    price: '€245,900',
    mileage: '4,800 km',
    location: 'London, UK',
    details: 'Mulliner Driving Specification, Naim Audio, All Terrain Package',
    marketplace: 'AutoScout24',
    bodyType: 'Luxury Car'
  },
  {
    id: 12,
    make: 'Aston Martin',
    model: 'DBX707',
    year: 2024,
    price: '€235,900',
    mileage: '2,900 km',
    location: 'Rome, Italy',
    details: 'Q Collection, Sports Plus Seats, 23" Wheels, Premium Audio',
    marketplace: 'Mobile.de',
    bodyType: 'SUV'
  }
];
