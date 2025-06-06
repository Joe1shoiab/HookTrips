import React from 'react';
import DestinationCard from '../components/DestinationCard';

// Sample destinations data
const ALL_DESTINATIONS = [
  {
    id: 1,
    name: 'Bali Retreat',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Bali, Indonesia',
    price: 1299,
    rating: 4.8,
    duration: '7 days',
    category: 'Beach',
    region: 'Asia',
    activities: ['relaxation', 'culture', 'nature'],
    difficulty: 'easy'
  },
  {
    id: 2,
    name: 'Swiss Alps Adventure',
    image: 'https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Interlaken, Switzerland',
    price: 1599,
    rating: 4.9,
    duration: '8 days',
    category: 'Mountain',
    region: 'Europe',
    activities: ['hiking', 'skiing', 'adventure'],
    difficulty: 'moderate'
  },
  {
    id: 3,
    name: 'Kyoto Experience',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Kyoto, Japan',
    price: 1899,
    rating: 4.7,
    duration: '10 days',
    category: 'Cultural',
    region: 'Asia',
    activities: ['culture', 'history', 'food'],
    difficulty: 'easy'
  },
  {
    id: 4,
    name: 'Machu Picchu Trek',
    image: 'https://images.pexels.com/photos/2105785/pexels-photo-2105785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Cusco, Peru',
    price: 2199,
    rating: 4.9,
    duration: '12 days',
    category: 'Adventure',
    region: 'South America',
    activities: ['hiking', 'history', 'nature'],
    difficulty: 'challenging'
  },
  {
    id: 5,
    name: 'Greek Island Hopping',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Santorini, Greece',
    price: 1799,
    rating: 4.6,
    duration: '9 days',
    category: 'Beach',
    region: 'Europe',
    activities: ['relaxation', 'culture', 'food'],
    difficulty: 'easy'
  },
  {
    id: 6,
    name: 'Safari Experience',
    image: 'https://images.pexels.com/photos/33045/lion-wild-africa-african.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Serengeti, Tanzania',
    price: 3299,
    rating: 4.9,
    duration: '10 days',
    category: 'Safari',
    region: 'Africa',
    activities: ['wildlife', 'nature', 'photography'],
    difficulty: 'moderate'
  },
  {
    id: 7,
    name: 'New Zealand Road Trip',
    image: 'https://images.pexels.com/photos/724949/pexels-photo-724949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'South Island, New Zealand',
    price: 2499,
    rating: 4.8,
    duration: '14 days',
    category: 'Adventure',
    region: 'Oceania',
    activities: ['road trip', 'hiking', 'adventure'],
    difficulty: 'moderate'
  },
  {
    id: 8,
    name: 'Northern Lights Tour',
    image: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Tromsø, Norway',
    price: 2199,
    rating: 4.7,
    duration: '6 days',
    category: 'Nature',
    region: 'Europe',
    activities: ['nature', 'photography', 'culture'],
    difficulty: 'easy'
  },
  {
    id: 9,
    name: 'Maldives Luxury Escape',
    image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    location: 'Malé, Maldives',
    price: 3999,
    rating: 4.9,
    duration: '8 days',
    category: 'Beach',
    region: 'Asia',
    activities: ['relaxation', 'snorkeling', 'luxury'],
    difficulty: 'easy'
  }
];

const DestinationsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Explore Our <span className="text-[var(--accent-light)]">Destinations</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Discover extraordinary places around the world with our carefully curated travel experiences
          </p>
        </div>
        
        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_DESTINATIONS.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;