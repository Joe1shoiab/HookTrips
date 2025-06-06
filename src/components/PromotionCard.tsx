import React from 'react';
import { Calendar, Tag } from 'lucide-react';

interface Promotion {
  id: number;
  title: string;
  description: string;
  image: string;
  discount: string;
  expiry: string;
  code: string;
}

interface PromotionCardProps {
  promotion: Promotion;
}

export const PromotionCard: React.FC<PromotionCardProps> = ({ promotion }) => {
  const { title, description, image, discount, expiry, code } = promotion;
  const [copied, setCopied] = React.useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--primary)] rounded-xl overflow-hidden shadow-lg mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 h-60 md:h-auto relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-[var(--accent-light)] text-[var(--primary)] px-4 py-2 rounded-lg font-bold text-lg">
            {discount} OFF
          </div>
        </div>
        
        {/* Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            
            <div className="flex items-center mb-4">
              <Calendar size={18} className="text-[var(--accent-light)] mr-2" />
              <span className="text-sm">Expires: {expiry}</span>
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <Tag size={18} className="text-[var(--accent-light)] mr-2" />
              <span className="text-sm">Use code:</span>
            </div>
            
            <div className="flex">
              <div className="bg-[var(--secondary)] px-4 py-2 rounded-l-lg border-r border-[var(--primary)] font-mono">
                {code}
              </div>
              <button 
                onClick={copyCode}
                className="bg-[var(--accent-light)] text-[var(--primary)] px-4 py-2 rounded-r-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};