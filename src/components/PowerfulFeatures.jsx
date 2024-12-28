import React from 'react';
import { Building2, Users2, Wallet, Network } from 'lucide-react';

const PowerfulFeatures = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Smart Property Listings",
      description: "Advanced search filters, virtual tours, and detailed property insights help you make informed decisions.",
      bgColor: "bg-white",
      items: [
        "Location-based property search",
        "Real-time availability updates",
        "Detailed property analytics"
      ]
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "Service Provider Network",
      description: "Connect with verified professionals and manage all your property services in one place.",
      bgColor: "bg-green-50",
      items: [
        "Verified service providers",
        "Real-time availability tracking",
        "Secure payment system"
      ]
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Investment Opportunities",
      description: "Track your investments, analyze performance, and discover new opportunities.",
      bgColor: "bg-orange-50",
      items: [
        "Portfolio tracking",
        "ROI calculator",
        "Investment opportunities"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Business Synergy Hub",
      description: "Collaborate with other businesses to create powerful partnerships and expand your market reach together.",
      bgColor: "bg-purple-50",
      items: [
        "Cross-promotional opportunities",
        "Resource sharing network",
        "Joint venture matching"
      ]
    }
  ];

  return (
    <section className="w-full bg-purple-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powerful Features at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the comprehensive suite of tools designed to revolutionize your property experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${feature.bgColor} rounded-lg p-8`}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center gap-2">
                    <svg 
                      className="w-5 h-5 text-green-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;