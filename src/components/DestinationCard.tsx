import React, { useState } from 'react';
import { MapPin, Star, Heart } from 'lucide-react';
import DestinationModal from './DestinationModal';

interface DestinationCardProps {
  destination: {
    id: number;
    name: string;
    images: string[];
    location: string;
    price: number;
    rating: number;
    activities: string[];
  };
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { name, images, location, price, rating } = destination;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  // Get the image name from the URL or path
  const getImageName = (imagePath: string) => {
    const parts = imagePath.split('/');
    return parts[parts.length - 1].split('?')[0]; // Remove query parameters
  };

  return (
    <>
      <div className="card group">
        {/* Card Image */}
        <div className="relative overflow-hidden h-64">
          <img 
            src={`/src/assets/destinations/${getImageName(images[0])}`} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--primary)]"></div>
          
          {/* Favorite Button */}
          <button 
            className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm p-2 rounded-full transition-colors hover:bg-[var(--accent-light)]"
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              size={18} 
              className={`${isFavorite ? 'text-red-500 fill-red-500' : 'text-white'}`} 
            />
          </button>
        </div>
        
        {/* Card Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          
          <div className="flex items-center mb-3">
            <MapPin size={16} className="text-[var(--accent-light)] mr-1" />
            <span className="text-sm text-gray-300">{location}</span>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Star size={16} className="text-[var(--warning)] fill-current mr-1" />
              <span className="text-sm">{rating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-xs text-gray-400">Starting from</span>
              <span className="text-2xl font-bold text-[var(--accent-light)]">${price}</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn btn-accent py-2 px-4 text-sm"
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      <DestinationModal 
        destination={destination}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default DestinationCard;