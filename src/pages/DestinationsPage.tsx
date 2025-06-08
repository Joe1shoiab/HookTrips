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
          <div className="max-w-md mx-auto bg-[var(--primary)] p-8 rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-500 mb-2">Error Loading Destinations</h3>
            <p className="text-gray-300 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="btn btn-accent"
            >
              Try Again
            </button>
          </div>
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