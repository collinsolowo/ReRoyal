export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  price: number;
  size: number;
  bedrooms?: number;
  bathrooms?: number;
  image: string;
  description: string;
  features: string[];
  status: 'available' | 'sold' | 'pending';
}

export const properties: Property[] = [
  {
    id: 1,
    title: 'Luxury Penthouse Waterfront',
    type: 'Residential',
    location: 'Banana Island, Lagos',
    price: 850000000,
    size: 450,
    bedrooms: 5,
    bathrooms: 6,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Stunning waterfront penthouse with panoramic views of the Lagos lagoon',
    features: ['Ocean View', 'Private Pool', 'Smart Home', 'Private Elevator', 'Concierge Service'],
    status: 'available'
  },
  {
    id: 2,
    title: 'Modern Commercial Complex',
    type: 'Commercial',
    location: 'Victoria Island, Lagos',
    price: 1200000000,
    size: 2500,
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Prime commercial space in the heart of Victoria Island business district',
    features: ['High-Speed Elevators', 'Underground Parking', '24/7 Security', 'Backup Power', 'Modern Architecture'],
    status: 'available'
  },
  {
    id: 3,
    title: 'Executive Mansion Estate',
    type: 'Residential',
    location: 'Lekki Phase 1, Lagos',
    price: 450000000,
    size: 650,
    bedrooms: 6,
    bathrooms: 7,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Magnificent mansion with classical architecture and modern amenities',
    features: ['Cinema Room', 'Wine Cellar', 'Gym', 'Garden', 'Staff Quarters'],
    status: 'available'
  },
  {
    id: 4,
    title: 'Premium Office Tower',
    type: 'Commercial',
    location: 'Ikoyi, Lagos',
    price: 2500000000,
    size: 5000,
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'State-of-the-art office tower with premium finishes and facilities',
    features: ['Conference Centers', 'Rooftop Lounge', 'Fiber Optic', 'LEED Certified', 'Sky Lobby'],
    status: 'available'
  },
  {
    id: 5,
    title: 'Luxury Duplex Residence',
    type: 'Residential',
    location: 'Parkview Estate, Ikoyi',
    price: 320000000,
    size: 380,
    bedrooms: 4,
    bathrooms: 5,
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Contemporary duplex in exclusive gated community',
    features: ['Gated Community', 'Clubhouse Access', 'Tennis Court', 'Swimming Pool', 'Generator'],
    status: 'pending'
  },
  {
    id: 6,
    title: 'Mixed-Use Development',
    type: 'Commercial',
    location: 'Lekki-Epe Expressway',
    price: 3500000000,
    size: 8000,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Integrated mixed-use development with retail, office, and residential spaces',
    features: ['Multi-Purpose', 'High Traffic Area', 'Ample Parking', 'Modern Design', 'Investment Opportunity'],
    status: 'available'
  }
];
