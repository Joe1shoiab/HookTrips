import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  useTranslation();
  const [currentBg, setCurrentBg] = useState(0);

  const backgroundImages = [
    'https://images.pexels.com/photos/3046582/pexels-photo-3046582.jpeg',  // Scuba diving with coral
    'https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg',  // Underwater photography
    'https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg',  // Snorkeling in crystal clear waters
    'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg',  // Vibrant coral reef
    'https://images.pexels.com/photos/1656579/pexels-photo-1656579.jpeg',  // Surface swimming with snorkel
    'https://images.pexels.com/photos/3894878/pexels-photo-3894878.jpeg',  // Freediving
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredDestinations = [
    {
      id: 1,
      name: 'Santorini Sunset',
      image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
      location: 'Greece',
      rating: 4.9,
      price: 1799
    },
    {
      id: 2,
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
      location: 'Switzerland',
      rating: 4.8,
      price: 2199
    },
    {
      id: 3,
      name: 'Bali Paradise',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
      location: 'Indonesia',
      rating: 4.9,
      price: 1499
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
      text: 'The trip to Bali was absolutely magical! Every detail was perfectly planned.',
      destination: 'Bali Paradise',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
      text: 'Hiking in the Swiss Alps was a life-changing experience. The views were breathtaking!',
      destination: 'Swiss Alps',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Wilson',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      text: 'The Santorini sunset tour exceeded all my expectations. Truly unforgettable!',
      destination: 'Santorini Sunset',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBg ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Next <span className="text-[var(--accent-light)]">Adventure</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Explore the world's most beautiful destinations with our curated travel experiences
              </p>
              <div className="flex gap-4">
                <Link to="/destinations" className="btn btn-accent">
                  Explore Destinations
                </Link>
                <Link to="/trips" className="btn btn-outline">
                  View All Trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-[var(--accent-light)]">Destinations</span>
            </h2>
            <p className="text-gray-300">Discover our most popular travel experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map(destination => (
              <div key={destination.id} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[4/3]">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin size={16} className="text-[var(--accent-light)] mr-1" />
                      <span className="text-gray-200">{destination.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="text-[var(--accent-light)] mr-1" />
                      <span className="text-gray-200">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-300">Starting from</span>
                      <p className="text-xl font-bold text-[var(--accent-light)]">${destination.price}</p>
                    </div>
                    <Link to={`/destinations/${destination.id}`} className="btn btn-sm btn-accent">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--secondary)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-light)] mb-2">20+</div>
              <div className="text-gray-300">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-light)] mb-2">10k+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-light)] mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[var(--accent-light)] mb-2">4.9</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--primary)]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-[var(--accent-light)]">Travelers Say</span>
            </h2>
            <p className="text-gray-300">Real experiences from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-[var(--secondary)] p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.destination}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-[var(--accent-light)] text-[var(--accent-light)]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="text-[var(--accent-light)]">Adventure?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied travelers who have experienced the world with us
            </p>
            <Link
              to="/booking"
              className="btn btn-accent btn-lg inline-flex items-center"
            >
              Book Your Trip Now
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;