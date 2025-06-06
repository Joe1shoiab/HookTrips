import React, { useState } from 'react';
import { Check, MapPin, Calendar, Users, CreditCard, ArrowRight } from 'lucide-react';

// Sample destinations for booking
const BOOKING_DESTINATIONS = [
  {
    id: 1,
    name: 'Santorini Sunset',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    location: 'Santorini, Greece',
    price: 1799,
  },
  {
    id: 2,
    name: 'Swiss Alps',
    image: 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg',
    location: 'Swiss Alps, Switzerland',
    price: 2199,
  },
  {
    id: 3,
    name: 'Bali Paradise',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    location: 'Bali, Indonesia',
    price: 1499,
  },
  {
    id: 4,
    name: 'Kyoto Experience',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
    location: 'Kyoto, Japan',
    price: 1899,
  },
  {
    id: 5,
    name: 'Maldives Escape',
    image: 'https://images.pexels.com/photos/1645028/pexels-photo-1645028.jpeg',
    location: 'Maldives',
    price: 2499,
  },
  {
    id: 6,
    name: 'Paris Getaway',
    image: 'https://images.pexels.com/photos/3369526/pexels-photo-3369526.jpeg',
    location: 'Paris, France',
    price: 1599,
  },
  {
    id: 7,
    name: 'Dubai Luxury',
    image: 'https://images.pexels.com/photos/1656579/pexels-photo-1656579.jpeg',
    location: 'Dubai, UAE',
    price: 1999,
  },
  {
    id: 8,
    name: 'New York City',
    image: 'https://images.pexels.com/photos/3894878/pexels-photo-3894878.jpeg',
    location: 'New York, USA',
    price: 1699,
  },
];

// Sample accommodation options
const ACCOMMODATIONS = [
  { id: 1, name: 'Standard Room', description: 'Comfortable room with basic amenities', priceMultiplier: 1 },
  { id: 2, name: 'Deluxe Room', description: 'Spacious room with premium amenities', priceMultiplier: 1.3 },
  { id: 3, name: 'Suite', description: 'Luxury suite with separate living area', priceMultiplier: 1.8 },
];

// Sample additional services
const ADDITIONAL_SERVICES = [
  { id: 1, name: 'Airport Transfer', price: 50 },
  { id: 2, name: 'Daily Breakfast', price: 120 },
  { id: 3, name: 'Guided Tours', price: 200 },
  { id: 4, name: 'Travel Insurance', price: 80 },
];

const BookingPage: React.FC = () => {
  // State for multi-step form
  const [step, setStep] = useState(1);
  
  // Filter state
  const [filters, setFilters] = useState({
    priceRange: 'all',
    sortBy: 'name'
  });
  
  // Booking details state
  const [booking, setBooking] = useState({
    destinationId: 0,
    startDate: '',
    endDate: '',
    travelers: 2,
    accommodation: ACCOMMODATIONS[0].id,
    additionalServices: [] as number[],
    totalPrice: 0,
  });
  
  // Filter and sort destinations
  const filteredDestinations = BOOKING_DESTINATIONS
    .filter(destination => {
      const matchesPrice = filters.priceRange === 'all' ? true :
                          filters.priceRange === 'budget' ? destination.price < 1500 :
                          filters.priceRange === 'mid' ? destination.price >= 1500 && destination.price < 2000 :
                          destination.price >= 2000;
      return matchesPrice;
    })
    .sort((a, b) => {
      if (filters.sortBy === 'name') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'price-asc') return a.price - b.price;
      if (filters.sortBy === 'price-desc') return b.price - a.price;
      return 0;
    });

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  // Handle destination selection
  const selectDestination = (id: number) => {
    const destination = BOOKING_DESTINATIONS.find(d => d.id === id);
    setBooking({
      ...booking,
      destinationId: id,
      totalPrice: destination ? destination.price : 0,
    });
    nextStep();
  };
  
  // Handle traveler count change
  const handleTravelerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const travelers = parseInt(e.target.value);
    setBooking({ ...booking, travelers });
    calculateTotalPrice({ ...booking, travelers });
  };
  
  // Handle accommodation change
  const handleAccommodationChange = (id: number) => {
    setBooking({ ...booking, accommodation: id });
    calculateTotalPrice({ ...booking, accommodation: id });
  };
  
  // Toggle additional service
  const toggleService = (id: number) => {
    const updatedServices = booking.additionalServices.includes(id)
      ? booking.additionalServices.filter(serviceId => serviceId !== id)
      : [...booking.additionalServices, id];
    
    setBooking({ ...booking, additionalServices: updatedServices });
    calculateTotalPrice({ ...booking, additionalServices: updatedServices });
  };
  
  // Calculate total price
  const calculateTotalPrice = (currentBooking: typeof booking) => {
    const destination = BOOKING_DESTINATIONS.find(d => d.id === currentBooking.destinationId);
    if (!destination) return;
    
    const accommodation = ACCOMMODATIONS.find(a => a.id === currentBooking.accommodation);
    const basePrice = destination.price * accommodation!.priceMultiplier;
    
    const additionalServicesTotal = currentBooking.additionalServices.reduce((total, serviceId) => {
      const service = ADDITIONAL_SERVICES.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
    
    const total = (basePrice * currentBooking.travelers) + additionalServicesTotal;
    
    setBooking(prev => ({ ...prev, totalPrice: total }));
  };
  
  // Move to next step
  const nextStep = () => {
    setStep(step + 1);
  };
  
  // Move to previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Complete booking
  const completeBooking = () => {
    // In a real app, this would submit the booking to an API
    alert('Booking completed successfully! You will receive a confirmation email shortly.');
    // Reset form
    setStep(1);
    setBooking({
      destinationId: 0,
      startDate: '',
      endDate: '',
      travelers: 2,
      accommodation: ACCOMMODATIONS[0].id,
      additionalServices: [],
      totalPrice: 0,
    });
  };
  
  // Get selected destination
  const selectedDestination = BOOKING_DESTINATIONS.find(d => d.id === booking.destinationId);
  
  return (
    <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Book Your <span className="text-[var(--accent-light)]">Dream Trip</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Follow the simple steps below to book your next unforgettable travel experience
          </p>
        </div>
        
        {/* Booking Steps Progress */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 1 ? 'bg-[var(--accent-light)] text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
              }`}>
                {step > 1 ? <Check size={20} /> : 1}
              </div>
              <span className="text-sm text-center">Destination</span>
            </div>
            
            <div className={`h-1 flex-1 mx-2 ${step >= 2 ? 'bg-[var(--accent-light)]' : 'bg-[var(--primary)]'}`} />
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 2 ? 'bg-[var(--accent-light)] text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
              }`}>
                {step > 2 ? <Check size={20} /> : 2}
              </div>
              <span className="text-sm text-center">Details</span>
            </div>
            
            <div className={`h-1 flex-1 mx-2 ${step >= 3 ? 'bg-[var(--accent-light)]' : 'bg-[var(--primary)]'}`} />
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 3 ? 'bg-[var(--accent-light)] text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
              }`}>
                {step > 3 ? <Check size={20} /> : 3}
              </div>
              <span className="text-sm text-center">Options</span>
            </div>
            
            <div className={`h-1 flex-1 mx-2 ${step >= 4 ? 'bg-[var(--accent-light)]' : 'bg-[var(--primary)]'}`} />
            
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                step >= 4 ? 'bg-[var(--accent-light)] text-[var(--primary)]' : 'bg-[var(--primary)] text-white'
              }`}>
                4
              </div>
              <span className="text-sm text-center">Payment</span>
            </div>
          </div>
        </div>
        
        {/* Step 1: Destination Selection */}
        {step === 1 && (
          <div className="bg-[var(--primary)] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Select Your Destination</h2>
            
            {/* Filters */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <select
                  name="priceRange"
                  value={filters.priceRange}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 rounded-lg bg-[var(--secondary)] text-white border border-gray-600 focus:border-[var(--accent-light)] focus:outline-none"
                >
                  <option value="all">All Prices</option>
                  <option value="budget">Budget ($0-$1,499)</option>
                  <option value="mid">Mid-Range ($1,500-$1,999)</option>
                  <option value="luxury">Luxury ($2,000+)</option>
                </select>
              </div>
              <div>
                <select
                  name="sortBy"
                  value={filters.sortBy}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 rounded-lg bg-[var(--secondary)] text-white border border-gray-600 focus:border-[var(--accent-light)] focus:outline-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map(destination => (
                <div 
                  key={destination.id}
                  className="bg-[var(--secondary)] rounded-lg overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
                  onClick={() => selectDestination(destination.id)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{destination.name}</h3>
                    <div className="flex items-center text-sm text-gray-300 mb-3">
                      <MapPin size={14} className="mr-1" />
                      {destination.location}
                    </div>
                    <div className="font-bold text-[var(--accent-light)]">
                      ${destination.price.toLocaleString()} <span className="text-sm font-normal">per person</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400">No destinations found matching your criteria.</p>
              </div>
            )}
          </div>
        )}
        
        {/* Step 2: Dates and Travelers */}
        {step === 2 && selectedDestination && (
          <div className="bg-[var(--primary)] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Trip Details</h2>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-semibold">{selectedDestination.name}</h3>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin size={14} className="mr-1" />
                    {selectedDestination.location}
                  </div>
                </div>
              </div>
              
              <div className="h-px bg-[var(--secondary)] my-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="form-control">
                <label htmlFor="start-date" className="form-label">Start Date</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-light)]" />
                  <input 
                    type="date" 
                    id="start-date"
                    className="form-input pl-10" 
                    value={booking.startDate}
                    onChange={(e) => setBooking({ ...booking, startDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="form-control">
                <label htmlFor="end-date" className="form-label">End Date</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-light)]" />
                  <input 
                    type="date" 
                    id="end-date"
                    className="form-input pl-10" 
                    value={booking.endDate}
                    onChange={(e) => setBooking({ ...booking, endDate: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="travelers" className="form-label">Number of Travelers</label>
              <div className="relative">
                <Users size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-light)]" />
                <select 
                  id="travelers"
                  className="form-input pl-10 w-full md:w-1/2"
                  value={booking.travelers}
                  onChange={handleTravelerChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={prevStep}
                className="btn-outline py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button 
                onClick={nextStep}
                className="btn btn-accent"
                disabled={!booking.startDate || !booking.endDate}
              >
                Continue <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 3: Accommodation and Additional Services */}
        {step === 3 && selectedDestination && (
          <div className="bg-[var(--primary)] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Customize Your Trip</h2>
            
            {/* Accommodation Options */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Accommodation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ACCOMMODATIONS.map(option => (
                  <div 
                    key={option.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      booking.accommodation === option.id 
                        ? 'border-[var(--accent-light)] bg-[var(--secondary)]' 
                        : 'border-[var(--secondary)]'
                    }`}
                    onClick={() => handleAccommodationChange(option.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{option.name}</h4>
                      {booking.accommodation === option.id && (
                        <div className="w-5 h-5 bg-[var(--accent-light)] rounded-full flex items-center justify-center">
                          <Check size={14} className="text-[var(--primary)]" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-300 mb-2">{option.description}</p>
                    <p className="text-[var(--accent-light)] font-semibold">
                      {option.priceMultiplier === 1 ? 'Standard Rate' : `+${(option.priceMultiplier - 1) * 100}%`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Services */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ADDITIONAL_SERVICES.map(service => (
                  <div 
                    key={service.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors flex justify-between items-center ${
                      booking.additionalServices.includes(service.id) 
                        ? 'border-[var(--accent-light)] bg-[var(--secondary)]' 
                        : 'border-[var(--secondary)]'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-[var(--accent-light)]">${service.price}</p>
                    </div>
                    {booking.additionalServices.includes(service.id) ? (
                      <div className="w-5 h-5 bg-[var(--accent-light)] rounded-full flex items-center justify-center">
                        <Check size={14} className="text-[var(--primary)]" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 border border-gray-400 rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price Summary */}
            <div className="bg-[var(--secondary)] p-4 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Price Summary</h3>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Base Price ({booking.travelers} travelers)</span>
                  <span>${selectedDestination.price * booking.travelers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span>
                    {ACCOMMODATIONS.find(a => a.id === booking.accommodation)?.priceMultiplier === 1 
                      ? 'Included' 
                      : `+${((ACCOMMODATIONS.find(a => a.id === booking.accommodation)?.priceMultiplier || 1) - 1) * selectedDestination.price * booking.travelers}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Services</span>
                  <span>
                    ${booking.additionalServices.reduce((total, serviceId) => {
                      const service = ADDITIONAL_SERVICES.find(s => s.id === serviceId);
                      return total + (service ? service.price : 0);
                    }, 0)}
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-600 pt-2">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-[var(--accent-light)]">${booking.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={prevStep}
                className="btn-outline py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button 
                onClick={nextStep}
                className="btn btn-accent"
              >
                Continue to Payment <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        )}
        
        {/* Step 4: Payment */}
        {step === 4 && selectedDestination && (
          <div className="bg-[var(--primary)] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
            
            {/* Payment Form */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="form-control">
                  <label htmlFor="card-name" className="form-label">Name on Card</label>
                  <input 
                    type="text" 
                    id="card-name"
                    className="form-input" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="card-email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="card-email"
                    className="form-input" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-control mb-6">
                <label htmlFor="card-number" className="form-label">Card Number</label>
                <div className="relative">
                  <CreditCard size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--accent-light)]" />
                  <input 
                    type="text" 
                    id="card-number"
                    className="form-input pl-10" 
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="form-control">
                  <label htmlFor="card-expiry" className="form-label">Expiry Date</label>
                  <input 
                    type="text" 
                    id="card-expiry"
                    className="form-input" 
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="card-cvc" className="form-label">CVC</label>
                  <input 
                    type="text" 
                    id="card-cvc"
                    className="form-input" 
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              
              <div className="form-control mb-8">
                <label htmlFor="billing-address" className="form-label">Billing Address</label>
                <textarea 
                  id="billing-address"
                  className="form-input min-h-[80px]" 
                  placeholder="Enter your billing address"
                  required
                ></textarea>
              </div>
            </div>
            
            {/* Price Summary */}
            <div className="bg-[var(--secondary)] p-4 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
              
              <div className="flex items-center mb-4">
                <img 
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-16 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h4 className="font-semibold">{selectedDestination.name}</h4>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin size={14} className="mr-1" />
                    {selectedDestination.location}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span>Dates</span>
                  <span>{booking.startDate} — {booking.endDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Travelers</span>
                  <span>{booking.travelers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Accommodation</span>
                  <span>{ACCOMMODATIONS.find(a => a.id === booking.accommodation)?.name}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-600 pt-2">
                <div className="flex justify-between font-bold text-xl">
                  <span>Total</span>
                  <span className="text-[var(--accent-light)]">${booking.totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={prevStep}
                className="btn-outline py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button 
                onClick={completeBooking}
                className="btn btn-accent"
              >
                Complete Booking
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;