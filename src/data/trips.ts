import { Trip } from '../types';

export const TRIPS: Trip[] = [
  {
    id: 1,
    title: 'Bali Cultural Immersion',
    destinationId: 1, // Bali
    image: 'https://images.pexels.com/photos/2014872/pexels-photo-2014872.jpeg',
    description: 'Immerse yourself in Balinese culture with temple visits, traditional dance performances, and local cooking classes.',
    startDate: '2024-06-15',
    endDate: '2024-06-22',
    price: 1299,
    duration: '7 days',
    maxGroupSize: 12,
    availableSeats: 8,
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
    ]
  },
  {
    id: 2,
    title: 'Bali Beach Retreat',
    destinationId: 1, // Bali
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg',
    description: 'Relax on Bali\'s finest beaches and enjoy water sports activities.',
    startDate: '2024-07-01',
    endDate: '2024-07-08',
    price: 1499,
    duration: '7 days',
    maxGroupSize: 10,
    availableSeats: 5,
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
    ]
  },
  {
    id: 3,
    title: 'Swiss Mountain Explorer',
    destinationId: 2, // Swiss Alps
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    description: 'Experience the majestic Swiss Alps through hiking and scenic train rides.',
    startDate: '2024-08-01',
    endDate: '2024-08-08',
    price: 1899,
    duration: '8 days',
    maxGroupSize: 12,
    availableSeats: 6,
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
    ]
  },
  {
    id: 4,
    title: 'Kyoto Traditional Tour',
    destinationId: 3, // Kyoto
    image: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg',
    description: 'Discover the heart of traditional Japan in historic Kyoto.',
    startDate: '2024-09-01',
    endDate: '2024-09-10',
    price: 2199,
    duration: '10 days',
    maxGroupSize: 10,
    availableSeats: 4,
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
    ]
  }
]; 