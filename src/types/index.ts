export interface Trip {
  id: number;
  title: string;
  name: string;
  images: string[];
  description: string;
  destinationId: number;
  price: number;
  duration: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  createdAt: Date;
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