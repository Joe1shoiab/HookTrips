import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';

interface Destination {
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

const DestinationsPage: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/destinations');
        if (!response.ok) {
          throw new Error('Failed to fetch destinations');
        }
        const data = await response.json();
        setDestinations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
        <div className="container text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[var(--accent-light)] mx-auto"></div>
          <p className="mt-4 text-lg">Loading destinations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
        <div className="container text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

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
          {destinations.map(destination => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;