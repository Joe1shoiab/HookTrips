import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });


      setSubmitStatus({
        submitted: true,
        success: response.ok,
        message: response.ok ? 'Thank you for your message! We will get back to you soon.' : 'There was an error sending your message. Please try again.',
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => {
          setSubmitStatus({
            submitted: false,
            success: false,
            message: '',
          });
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again.',
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-[var(--secondary)] pt-24 pb-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Get in <span className="text-[var(--accent-light)]">Touch</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg">
            Have questions or need assistance? Our team is here to help you plan your next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-[var(--primary)] rounded-xl p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--accent-light)] p-3 rounded-lg mr-4">
                    <MapPin size={20} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-gray-300">
                      Tahrir Square, Downtown<br />
                      Cairo, 11511, Egypt
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--accent-light)] p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-gray-300">
                    omarshoieb0@gmail.com<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--accent-light)] p-3 rounded-lg mr-4">
                    <Phone size={20} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-gray-300">
                      (+20) 115 359 5889<br />
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--accent-light)] p-3 rounded-lg mr-4">
                    <Clock size={20} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-[var(--accent-light)] mt-2">
                      All times in Eastern Time (ET)
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61559620400948"
                    className="bg-[var(--secondary)] p-3 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--primary)] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  {/* <a 
                    href="https://twitter.com"
                    className="bg-[var(--secondary)] p-3 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--primary)] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a> */}
                  <a 
                    href="https://www.instagram.com/hook.trips/"
                    className="bg-[var(--secondary)] p-3 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--primary)] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  {/* <a 
                    href="https://linkedin.com"
                    className="bg-[var(--secondary)] p-3 rounded-full hover:bg-[var(--accent-light)] hover:text-[var(--primary)] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--primary)] rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {submitStatus.submitted ? (
                <div className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-600' : 'bg-red-600'}`}>
                  <p>{submitStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="form-control">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        className="form-input" 
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-control">
                      <label htmlFor="phone" className="form-label">Your Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        className="form-input" 
                        placeholder="+20 123 456 7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="form-control mb-6">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <select 
                      id="subject"
                      name="subject"
                      className="form-input" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-control mb-6">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      className="form-input min-h-[150px]" 
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-accent flex items-center justify-center"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-12">
          <div className="bg-[var(--primary)] rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Find Us</h2>
            
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              {/* In a real app, this would be a Google Maps embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224.28330453507195!2d34.520006616872635!3d28.4990334835052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15ab4b3d37d80531%3A0x61a23ed7e634f21e!2sTHE%20PLACE%20WE%20BUILT%20OUR%20DREAMS!5e1!3m2!1sen!2seg!4v1748278617159!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Hook Trips Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked <span className="text-[var(--accent-light)]">Questions</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Find quick answers to common questions about our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[var(--primary)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">How do I book a trip?</h3>
              <p className="text-gray-300">
                You can easily book a trip through our website by visiting the Destinations page, selecting your preferred tour, and following the booking process. Alternatively, you can contact our team directly for personalized assistance.
              </p>
            </div>
            
            <div className="bg-[var(--primary)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-300">
                Our standard cancellation policy allows for a full refund if cancelled 30 days or more before the trip start date. Cancellations made 15-29 days before receive a 50% refund, while those made less than 15 days before are non-refundable.
              </p>
            </div>
            
            <div className="bg-[var(--primary)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Are flights included in your packages?</h3>
              <p className="text-gray-300">
                Most of our packages do not include flights, allowing you the flexibility to arrange your own travel to the destination. However, we do offer flight booking assistance and can arrange airport transfers.
              </p>
            </div>
            
            <div className="bg-[var(--primary)] p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Do I need travel insurance?</h3>
              <p className="text-gray-300">
                We strongly recommend purchasing comprehensive travel insurance for all trips. This provides protection against unexpected events, medical emergencies, trip cancellations, and lost luggage.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/faq" className="btn btn-outline">
              View All FAQs
            </a>
          </div>
        </div>
        
        {/* Live Chat Widget */}
        <div className="fixed bottom-8 right-8 z-40">
          <button className="bg-[var(--accent-light)] text-[var(--primary)] w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
            <MessageSquare size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;