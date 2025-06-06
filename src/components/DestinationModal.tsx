import React from 'react';
import { X, MapPin, Clock, Star, Calendar, Users, DollarSign } from 'lucide-react';

interface DestinationModalProps {
  destination: {
    id: number;
    name: string;
    image: string;
    location: string;
    price: number;
    rating: number;
    duration: string;
    category: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ destination, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { name, image, location, price, rating, duration, category } = destination;

  // Prevent modal close when clicking inside the modal
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[var(--primary)] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={handleModalClick}
      >
        {/* Header with close button */}
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Close modal"
          >
            <X size={20} className="text-white" />
          </button>
          <div className="absolute top-4 left-4 bg-[var(--primary)] px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{name}</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <MapPin size={20} className="text-[var(--accent-light)] mr-2" />
              <span>{location}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="text-[var(--accent-light)] mr-2" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center">
              <Star size={20} className="text-[var(--warning)] fill-current mr-2" />
              <span>{rating.toFixed(1)} Rating</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={20} className="text-[var(--accent-light)] mr-2" />
              <span>From ${price}</span>
            </div>
          </div>

          <div className="border-t border-[var(--secondary)] pt-6">
            <h3 className="text-xl font-semibold mb-4">Trip Highlights</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar size={20} className="text-[var(--accent-light)] mr-2 mt-1" />
                <span>Flexible booking dates available throughout the year</span>
              </li>
              <li className="flex items-start">
                <Users size={20} className="text-[var(--accent-light)] mr-2 mt-1" />
                <span>Small groups of 8-12 people for a more intimate experience</span>
              </li>
              <li className="flex items-start">
                <Star size={20} className="text-[var(--accent-light)] mr-2 mt-1" />
                <span>Expert local guides and carefully curated experiences</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[var(--secondary)] pt-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-300 mb-4">
              Experience the journey of a lifetime in {location}. This carefully crafted itinerary combines adventure, culture, and relaxation to give you an unforgettable travel experience.
            </p>
            <p className="text-gray-300">
              Our expert guides will lead you through hidden gems and must-see locations, ensuring you get the most authentic and enriching experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal; 