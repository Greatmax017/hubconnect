import React from 'react';
import { CheckCircle } from 'lucide-react';

const MobileApp = () => {
  const features = [
    "Smart property search with filters",
    "Real-time chat with service providers",
    "Secure payment integration",
    "Investment tracking dashboard"
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Experience the Future of Project Management
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our intuitive mobile app puts everything you need right at your fingertips.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src="/future.png" 
              alt="HubConnect Mobile App" 
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApp;