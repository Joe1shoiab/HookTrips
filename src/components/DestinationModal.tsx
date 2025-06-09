import React, { useState, useEffect, useCallback, memo } from 'react';
import { X, MapPin, Star, Calendar, Users, DollarSign, Activity, Info, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';

interface DestinationModalProps {
  destination: {
    id: number;
    name: string;
    images: string[];
    location: string;
    price: number;
    rating: number;
    activities: string[];
    highlights?: string[];
    description?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const DestinationModal: React.FC<DestinationModalProps> = ({ destination, isOpen, onClose }) => {
  const { name, images, location, price, rating, activities } = destination;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoplay] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Reset fullscreen state when modal opens or closes
  useEffect(() => {
    setIsFullscreen(false);
  }, [isOpen]);

  // Toggle fullscreen mode
  const toggleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(prev => !prev);
  }, []);

  // Handle escape key for fullscreen
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isFullscreen]);

  // Get the image name from the URL or path
  const getImageName = (imagePath: string) => {
    const parts = imagePath.split('/');
    return parts[parts.length - 1].split('?')[0]; // Remove query parameters
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isAutoplay) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen, isAutoplay, images.length]);

  // Navigation handlers
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

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

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className={`bg-[var(--primary)] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto ${
          isFullscreen ? 'fixed inset-0 max-w-none max-h-none rounded-none z-[60]' : ''
        } [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-[var(--primary)] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:border-2 [&::-webkit-scrollbar-track]:border-[var(--secondary)] [&::-webkit-scrollbar-thumb]:bg-[var(--secondary)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[var(--primary)] [&::-webkit-scrollbar-thumb]:hover:bg-[var(--accent-light)] [&::-webkit-scrollbar]:rounded-r-xl`}
        onClick={handleModalClick}
      >
        {/* Image Carousel */}
        <div className={`relative ${isFullscreen ? 'h-screen' : ''}`}>
          <div className={`relative ${isFullscreen ? 'h-full' : 'h-96'} overflow-hidden bg-black`}>
            {images.map((image, index) => (
              <img 
                key={index}
                src={`/src/assets/destinations/${getImageName(image)}`}
                alt={`${name} - Image ${index + 1}`}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 cursor-pointer ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                } ${isFullscreen ? 'object-contain' : 'object-cover'}`}
                onClick={toggleFullscreen}
              />
            ))}
          </div>

          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 size={20} className="text-white" />
            ) : (
              <Maximize2 size={20} className="text-white" />
            )}
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-white" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
            aria-label="Close modal"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        {/* Content - Hide when in fullscreen */}
        {!isFullscreen && (
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
        )}
      </div>
    </div>
  );
};

export default memo(DestinationModal); 