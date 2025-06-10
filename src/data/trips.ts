import { Trip } from '../types';

export const TRIPS: Trip[] = [
  {
    id: 1,
    title: 'Bali Cultural Immersion',
    name: 'Bali Cultural Experience',
    images: [
      'https://images.pexels.com/photos/2014872/pexels-photo-2014872.jpeg',
      'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg'
    ],
    description: 'Immerse yourself in Balinese culture with temple visits, traditional dance performances, and local cooking classes.',
    destinationId: 1,
    price: 1299,
    duration: '7 days',
    highlights: [
      'Visit ancient temples',
      'Traditional dance workshop',
      'Cooking class with local chef',
      'Rice terrace trek',
      'Spa treatment'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Welcome Dinner',
        description: 'Airport pickup and transfer to your luxury villa. Evening welcome dinner with traditional performances.'
      },
      {
        day: 2,
        title: 'Temple Tour',
        description: 'Visit Tanah Lot and Uluwatu temples, followed by a sunset ceremony.'
      }
    ],
    createdAt: new Date('2024-01-01')
  },
  {
    id: 2,
    title: 'Bali Beach Retreat',
    name: 'Bali Beach Paradise',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
      'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg'
    ],
    description: 'Relax on Bali\'s finest beaches and enjoy water sports activities.',
    destinationId: 1,
    price: 1499,
    duration: '7 days',
    highlights: [
      'Surfing lessons',
      'Snorkeling trip',
      'Beach yoga sessions',
      'Sunset cruise',
      'Beach BBQ'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Beach Welcome',
        description: 'Arrive at your beachfront resort and enjoy a welcome cocktail party.'
      },
      {
        day: 2,
        title: 'Surf & Sun',
        description: 'Morning surf lesson followed by beach relaxation and spa treatment.'
      }
    ],
    createdAt: new Date('2024-01-15')
  },
  {
    id: 3,
    title: 'Swiss Mountain Explorer',
    name: 'Swiss Alps Adventure',
    images: [
      'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
      'https://images.pexels.com/photos/290452/pexels-photo-290452.jpeg'
    ],
    description: 'Experience the majestic Swiss Alps through hiking and scenic train rides.',
    destinationId: 2,
    price: 1899,
    duration: '8 days',
    highlights: [
      'Glacier Express journey',
      'Mountain hiking trails',
      'Cable car experiences',
      'Alpine lake visit',
      'Swiss chocolate tasting'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Zurich to Interlaken',
        description: 'Scenic train journey from Zurich to Interlaken, evening orientation walk.'
      },
      {
        day: 2,
        title: 'Jungfraujoch Experience',
        description: 'Visit to the "Top of Europe" via scenic railway.'
      }
    ],
    createdAt: new Date('2024-02-01')
  },
  {
    id: 4,
    title: 'Kyoto Traditional Tour',
    name: 'Kyoto Cultural Journey',
    images: [
      'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg',
      'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg'
    ],
    description: 'Discover the heart of traditional Japan in historic Kyoto.',
    destinationId: 3,
    price: 2199,
    duration: '10 days',
    highlights: [
      'Tea ceremony experience',
      'Geisha district tour',
      'Temple visits',
      'Japanese garden tour',
      'Kimono wearing experience'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto',
        description: 'Welcome ceremony at a traditional ryokan, evening walk in Gion.'
      },
      {
        day: 2,
        title: 'Temple Circuit',
        description: 'Visit to Kinkaku-ji and Ryoan-ji temples, afternoon tea ceremony.'
      }
    ],
    createdAt: new Date('2024-02-15')
  }
]; 