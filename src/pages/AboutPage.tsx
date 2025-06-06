import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Star, Building, Globe, Heart, Compass, Map } from 'lucide-react';
import '../styles/animations.css';

const AboutPage: React.FC = () => {
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const stats = [
    {
      id: 'destinations',
      count: '50+',
      label: 'Countries',
      icon: <Globe className="w-6 h-6" />,
      description: 'Spanning across all continents'
    },
    {
      id: 'travelers',
      count: '25k+',
      label: 'Happy Travelers',
      icon: <Heart className="w-6 h-6" />,
      description: 'Creating lifelong memories'
    },
    {
      id: 'adventures',
      count: '100+',
      label: 'Unique Adventures',
      icon: <Compass className="w-6 h-6" />,
      description: 'From mountain peaks to ocean depths'
    },
    {
      id: 'locations',
      count: '200+',
      label: 'Local Guides',
      icon: <Map className="w-6 h-6" />,
      description: 'Expert local knowledge'
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full">
            <img 
              src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team exploring mountains" 
              className="w-full h-full object-cover transform scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-[var(--secondary)] bg-opacity-70" />
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Crafting <span className="text-[var(--accent-light)]">Extraordinary</span> Adventures
            </h1>
            <p className="text-xl mb-8 animate-fade-in-delay">
              More than just a travel company - we're your gateway to life-changing experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="relative group"
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="bg-[var(--secondary)] p-8 rounded-xl transform transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-[var(--accent-light)] mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.count}</div>
                  <div className="text-lg text-gray-300">{stat.label}</div>
                  <div className={`
                    absolute bottom-0 left-0 right-0 bg-[var(--accent-light)] text-[var(--primary)]
                    p-4 rounded-b-xl transform transition-all duration-300
                    ${hoveredStat === stat.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
                  `}>
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our <span className="text-[var(--accent-light)]">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[20px] md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--accent-light)] bg-opacity-30"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24 relative" ref={timelineRef}>
              {/* 2015 */}
              <div className="flex flex-col md:flex-row items-start md:items-center group timeline-item pl-12 md:pl-0">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 transform transition-all duration-500 group-hover:-translate-x-2">
                  <h3 className="text-xl font-bold mb-2">2015</h3>
                  <h4 className="text-[var(--accent-light)] font-semibold mb-2">Company Founded</h4>
                  <p className="text-gray-300">Hook Trips was established by a group of friends with a shared passion for travel and adventure.</p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                  <Building size={16} className="text-[var(--primary)] md:w-5 md:h-5" />
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2017 */}
              <div className="flex flex-col md:flex-row items-start md:items-center group timeline-item pl-12 md:pl-0">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-[16px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                  <Users size={16} className="text-[var(--primary)] md:w-5 md:h-5" />
                </div>
                <div className="md:w-1/2 md:pl-12 transform transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-xl font-bold mb-2">2017</h3>
                  <h4 className="text-[var(--accent-light)] font-semibold mb-2">Expanded Team</h4>
                  <p className="text-gray-300">Our team grew to 25 members, including local guides and travel experts from around the world.</p>
                </div>
              </div>
              
              {/* 2020 */}
              <div className="flex flex-col md:flex-row items-start md:items-center group timeline-item pl-12 md:pl-0">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 transform transition-all duration-500 group-hover:-translate-x-2">
                  <h3 className="text-xl font-bold mb-2">2020</h3>
                  <h4 className="text-[var(--accent-light)] font-semibold mb-2">Digital Transformation</h4>
                  <p className="text-gray-300">We launched our online booking platform, making it easier for travelers to plan and book their dream trips.</p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)] md:w-5 md:h-5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
              
              {/* 2023 */}
              <div className="flex flex-col md:flex-row items-start md:items-center group timeline-item pl-12 md:pl-0">
                <div className="md:w-1/2 md:pr-12"></div>
                <div className="absolute left-[16px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                  <Award size={16} className="text-[var(--primary)] md:w-5 md:h-5" />
                </div>
                <div className="md:w-1/2 md:pl-12 transform transition-all duration-500 group-hover:translate-x-2">
                  <h3 className="text-xl font-bold mb-2">2023</h3>
                  <h4 className="text-[var(--accent-light)] font-semibold mb-2">Award-Winning Service</h4>
                  <p className="text-gray-300">Hook Trips received the "Best Adventure Travel Company" award, recognizing our commitment to excellence.</p>
                </div>
              </div>
              
              {/* 2025 */}
              <div className="flex flex-col md:flex-row items-start md:items-center group timeline-item pl-12 md:pl-0">
                <div className="md:w-1/2 md:pr-12 md:text-right mb-4 md:mb-0 transform transition-all duration-500 group-hover:-translate-x-2">
                  <h3 className="text-xl font-bold mb-2">2025</h3>
                  <h4 className="text-[var(--accent-light)] font-semibold mb-2">Global Expansion</h4>
                  <p className="text-gray-300">Today, we operate in over 50 countries, offering hundreds of unique travel experiences to explorers worldwide.</p>
                </div>
                <div className="absolute left-[16px] md:left-1/2 top-0 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--primary)] md:w-5 md:h-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="md:w-1/2 md:pl-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our <span className="text-[var(--accent-light)]">Team</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-[var(--primary)] rounded-xl overflow-hidden group relative">
              <div className="relative h-80">
                <img 
                  src='/src/assets/founders/OmarShoieb.png' 
                  alt="John Walker" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm text-white">
                    With over 15 years of experience in the travel industry, John has explored more than 70 countries. His expertise in adventure travel and sustainability has helped shape our company's vision.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Omar Shoieb</h3>
                <p className="text-[var(--accent-light)]">Founder & CEO</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-[var(--primary)] rounded-xl overflow-hidden group relative">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sarah Thompson" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm text-white">
                    Sarah has a background in hospitality management and a passion for creating exceptional customer experiences. She leads our operations team and ensures every trip runs smoothly.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Sarah Thompson</h3>
                <p className="text-[var(--accent-light)]">Operations Director</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-[var(--primary)] rounded-xl overflow-hidden group relative">
              <div className="relative h-80">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Michael Chen" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-sm text-white">
                    Michael is our technology expert who developed our booking platform and digital presence. His innovations have made trip planning and booking seamless for our customers.
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-[var(--accent-light)]">Technology Director</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications and Partners */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Our <span className="text-[var(--accent-light)]">Certifications</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[var(--secondary)] p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Certified Travel Expert</h3>
                  <p className="text-sm text-gray-300">International Tourism Board</p>
                </div>
                
                <div className="bg-[var(--secondary)] p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Safety Excellence</h3>
                  <p className="text-sm text-gray-300">Adventure Travel Association</p>
                </div>
                
                <div className="bg-[var(--secondary)] p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Eco-Tourism Gold</h3>
                  <p className="text-sm text-gray-300">Sustainable Travel Council</p>
                </div>
                
                <div className="bg-[var(--secondary)] p-4 rounded-lg flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a2b3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                    </svg>
                  </div>
                  <h3 className="font-semibold mb-1">Customer Support</h3>
                  <p className="text-sm text-gray-300">Travel Experience Award</p>
                </div>
              </div>
            </div>
            
            {/* Partners */}
            <div>
              <h2 className="text-2xl font-bold mb-8">
                Our <span className="text-[var(--accent-light)]">Partners</span>
              </h2>
              
              <div className="bg-[var(--secondary)] p-8 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">SkyWings</span>
                      <span className="text-[var(--accent-light)]"> Airways</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">Global</span>
                      <span className="text-[var(--accent-light)]"> Hotels</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">Eco</span>
                      <span className="text-[var(--accent-light)]">Travel</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">World</span>
                      <span className="text-[var(--accent-light)]">Explorer</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">Trek</span>
                      <span className="text-[var(--accent-light)]">Masters</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg h-20">
                    <div className="text-center">
                      <span className="text-xl font-bold text-white">Adventure</span>
                      <span className="text-[var(--accent-light)]">Gear</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our <span className="text-[var(--accent-light)]">Customers Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-[var(--primary)] p-6 rounded-xl relative">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-0">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <Star size={20} className="text-[var(--primary)] fill-current" />
                </div>
              </div>
              <p className="mb-6 italic text-gray-300">
                "Our trip to the Swiss Alps was beyond amazing. The accommodations were perfect, the guides were knowledgeable, and the itinerary was well-balanced between adventure and relaxation."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Robert Brown" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Robert Brown</h4>
                  <p className="text-sm text-gray-300">Adventure enthusiast</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-[var(--primary)] p-6 rounded-xl relative">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-0">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <Star size={20} className="text-[var(--primary)] fill-current" />
                </div>
              </div>
              <p className="mb-6 italic text-gray-300">
                "This was our third trip with Hook Trips, and they never disappoint. Their attention to detail and ability to create personalized experiences is why we keep coming back."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Jessica Miller" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Jessica Miller</h4>
                  <p className="text-sm text-gray-300">Frequent traveler</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-[var(--primary)] p-6 rounded-xl relative">
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-0">
                <div className="w-10 h-10 rounded-full bg-[var(--accent-light)] flex items-center justify-center">
                  <Star size={20} className="text-[var(--primary)] fill-current" />
                </div>
              </div>
              <p className="mb-6 italic text-gray-300">
                "As a solo traveler, I was looking for safety and community. Hook Trips provided both, along with incredible experiences. I felt supported throughout my journey to Peru."
              </p>
              <div className="flex items-center">
                <div className="mr-4 w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="David Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">David Wilson</h4>
                  <p className="text-sm text-gray-300">Solo adventurer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[var(--accent-light)] text-[var(--primary)]">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Adventure?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join the thousands of travelers who have discovered extraordinary destinations with Hook Trips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/destinations" className="btn bg-[var(--primary)] text-white hover:bg-opacity-90">
              Explore Destinations
            </a>
            <a href="/contact" className="btn bg-transparent border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;