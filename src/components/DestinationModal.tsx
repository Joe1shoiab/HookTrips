import React from 'react';
import { X, MapPin, Star, Calendar, Users, DollarSign, Activity, Info } from 'lucide-react';

interface DestinationModalProps {
  destination: {
    id: number;
    name: string;
    image: string;
    location: string;
    price: number;
    rating: number;
    category: string;
    activities: string[];
    highlights?: string[];
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ destination, isOpen, onClose }) => {
  if (!isOpen) return null;

  const { name, image, location, price, rating, category, activities } = destination;

  // Get the image name from the URL or path
  const getImageName = (imagePath: string) => {
    const parts = imagePath.split('/');
    return parts[parts.length - 1].split('?')[0]; // Remove query parameters
  };

  // Default highlights if none provided
  const defaultHighlights = [
    {
      icon: <Calendar size={20} className="text-[var(--accent-light)] mr-2 mt-1" />,
      text: "Flexible booking dates available throughout the year"
    },
    {
      icon: <Users size={20} className="text-[var(--accent-light)] mr-2 mt-1" />,
      text: "Small groups of 8-12 people for a more intimate experience"
    },
    {
      icon: <Activity size={20} className="text-[var(--accent-light)] mr-2 mt-1" />,
      text: "Carefully curated activities based on your preferences"
    },
    {
      icon: <Star size={20} className="text-[var(--accent-light)] mr-2 mt-1" />,
      text: "Expert local guides and carefully curated experiences"
    }
  ];

  // Use provided highlights or default ones
  const displayHighlights = destination.highlights && destination.highlights.length > 0
    ? destination.highlights.map((highlight, index) => ({
        icon: defaultHighlights[index % defaultHighlights.length].icon,
        text: highlight
      }))
    : defaultHighlights;

  // Default description if none provided
  const defaultDescription = `Experience the journey of a lifetime in ${location}. This carefully crafted itinerary combines adventure, culture, and relaxation to give you an unforgettable travel experience. Our expert guides will lead you through hidden gems and must-see locations, ensuring you get the most authentic and enriching experience possible.`;

  // Use provided description or default one
  const displayDescription = destination.description || defaultDescription;

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
            src={`/src/assets/destinations/${getImageName(image)}`} 
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
              <Star size={20} className="text-[var(--warning)] fill-current mr-2" />
              <span>{rating.toFixed(1)} Rating</span>
            </div>
            <div className="flex items-center">
              <DollarSign size={20} className="text-[var(--accent-light)] mr-2" />
              <span>From ${price}</span>
            </div>
          </div>

          <div className="border-t border-[var(--secondary)] pt-6">
            <h3 className="text-xl font-semibold mb-4">Activities</h3>
            <div className="flex flex-wrap gap-2">
              {activities.map((activity, index) => (
                <span 
                  key={index}
                  className="bg-[var(--secondary)] px-3 py-1 rounded-full text-sm"
                >
                  {activity}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-[var(--secondary)] pt-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Trip Highlights</h3>
            <ul className="space-y-3">
              {displayHighlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  {highlight.icon}
                  <span>{highlight.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-[var(--secondary)] pt-6 mt-6">
            <h3 className="text-xl font-semibold mb-4">Description</h3>
            <div className="flex items-start mb-4">
              <Info size={20} className="text-[var(--accent-light)] mr-2 mt-1" />
              <p className="text-gray-300">
                {displayDescription}
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button 
              className="btn btn-accent px-8 py-3"
              onClick={() => {
                // TODO: Implement booking functionality
                alert('Booking functionality coming soon!');
              }}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationModal; 