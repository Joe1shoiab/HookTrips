import React, { useState, useMemo, useEffect } from 'react';
import TripCard from '../components/TripCard';
import { Destination, Trip } from '../types';

const TripsPage: React.FC = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [tripsLoading, setTripsLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/destinations/simplified');
        const data = await response.json();
        // Transform the image paths to use the correct asset path
        const transformedData = data.map((dest: any) => ({
          ...dest,
          image: `/src/assets/destinations/${dest.image}`
        }));
        setDestinations(transformedData);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  useEffect(() => {
    const fetchTrips = async () => {
      setTripsLoading(true);
      try {
        const response = await fetch('http://localhost:5000/api/trips');
        const data = await response.json();
        // Transform the image paths to use the correct asset path
        const transformedData = data.map((trip: any) => ({
          ...trip,
          images: trip.images.map((image: string) => `/src/assets/trips/${image}`)
        }));
        setTrips(transformedData);
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setTripsLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // Filter trips based on selected destination
  const filteredTrips = useMemo(() => {
    if (!selectedDestination) return trips;
    return trips.filter(trip => trip.destinationId === selectedDestination);
  }, [selectedDestination, trips]);

  return (
    <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Available <span className="text-[var(--accent-light)]">Trips</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg">
            Select a destination to view available trips
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="bg-[var(--primary)] p-4 md:p-6 rounded-xl mb-8 md:mb-12">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Choose Your Destination</h2>
          {loading ? (
            <div className="text-center py-8">Loading destinations...</div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                {destinations.map((destination: Destination) => (
                  <button
                    key={destination.id}
                    onClick={() => setSelectedDestination(destination.id)}
                    className={`group relative overflow-hidden rounded-lg aspect-[3/2] transition-transform hover:scale-[1.02] ${
                      selectedDestination === destination.id ? 'ring-2 ring-[var(--accent-light)]' : ''
                    }`}
                  >
                    <img 
                      src={destination.image} 
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-2 md:p-3">
                      <h3 className="text-sm md:text-base font-medium text-white line-clamp-1">{destination.name}</h3>
                      <p className="text-xs md:text-sm text-gray-200 line-clamp-1">{destination.location}</p>
                    </div>
                  </button>
                ))}
              </div>
              
              {selectedDestination && (
                <div className="mt-4 flex justify-end">
                  <button
                    className="text-sm text-[var(--accent-light)] hover:underline"
                    onClick={() => setSelectedDestination(null)}
                  >
                    Show All Trips
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Trips Grid */}
        {tripsLoading ? (
          <div className="text-center py-8">Loading trips...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map(trip => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!tripsLoading && filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No trips found</h3>
            <p className="text-gray-400">
              Try selecting a different destination or view all trips.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripsPage; 