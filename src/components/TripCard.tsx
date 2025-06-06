import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, X } from 'lucide-react';
import { Trip } from '../types';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();
  
  const {
    title,
    image,
    description,
    startDate,
    endDate,
    price,
    duration,
    maxGroupSize,
    availableSeats,
    highlights,
    itinerary
  } = trip;

  return (
    <>
      <div className="bg-[var(--primary)] rounded-xl overflow-hidden shadow-lg hover:transform hover:scale-[1.02] transition-all">
        <div className="relative h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          {availableSeats < 5 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              Only {availableSeats} seats left!
            </div>
          )}
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm">
              <Calendar size={16} className="text-[var(--accent-light)] mr-2" />
              <span>
                {format(new Date(startDate), 'MMM d')} - {format(new Date(endDate), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Clock size={16} className="text-[var(--accent-light)] mr-2" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center text-sm">
              <Users size={16} className="text-[var(--accent-light)] mr-2" />
              <span>Max {maxGroupSize} people</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin size={16} className="text-[var(--accent-light)] mr-2" />
              <span>{availableSeats} seats left</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-xs text-gray-400">Price per person</span>
              <span className="text-2xl font-bold text-[var(--accent-light)]">${price}</span>
            </div>
            <button 
              className="btn btn-accent"
              onClick={() => setIsModalOpen(true)}
            >
              {t('destinations.viewDetails')}
            </button>
          </div>
        </div>
      </div>

      {/* Trip Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-[var(--primary)] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[var(--primary)] p-6 border-b border-[var(--secondary)] flex justify-between items-center">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="aspect-video w-full mb-6 rounded-lg overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{t('destinations.description')}</h3>
                  <p className="text-gray-300 mb-6">{description}</p>

                  <h3 className="text-xl font-semibold mb-4">{t('destinations.tripHighlights')}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Itinerary</h3>
                  <div className="space-y-4">
                    {itinerary.map((day, index) => (
                      <div key={index} className="bg-[var(--secondary)] p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Day {day.day}: {day.title}</h4>
                        <p className="text-gray-300 text-sm">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-[var(--secondary)] pt-6">
                <div className="flex flex-wrap gap-6 justify-between items-center">
                  <div>
                    <span className="block text-sm text-gray-400 mb-1">Price per person</span>
                    <span className="text-3xl font-bold text-[var(--accent-light)]">${price}</span>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <span className="block text-sm text-gray-400 mb-1">Duration</span>
                      <span className="font-semibold">{duration}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm text-gray-400 mb-1">Group Size</span>
                      <span className="font-semibold">Max {maxGroupSize}</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-sm text-gray-400 mb-1">Available Seats</span>
                      <span className="font-semibold">{availableSeats}</span>
                    </div>
                  </div>
                  <button className="btn btn-accent">
                    Book This Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TripCard; 