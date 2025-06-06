export interface Trip {
  id: number;
  title: string;
  destinationId: number;
  image: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  duration: string;
  maxGroupSize: number;
  availableSeats: number;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
}

export interface Destination {
  id: number;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  category: string;
  region: string;
  activities: string[];
  difficulty: string;
}

export interface DestinationWithTrips extends Destination {
  trips: Trip[];
} 