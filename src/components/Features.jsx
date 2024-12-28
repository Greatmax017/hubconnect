import React from 'react';
import { Building2, Users2, Wallet, TrendingUp } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-purple-600" />,
      title: "Property Listings",
      description: "Browse through verified properties with detailed information and high-quality images."
    },
    {
      icon: <Users2 className="w-12 h-12 text-purple-600" />,
      title: "Service Providers",
      description: "Connect with trusted professionals for all your property-related services."
    },
    {
      icon: <Wallet className="w-12 h-12 text-purple-600" />,
      title: "Investment Opportunities",
      description: "Explore and participate in carefully vetted real estate investment opportunities."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: "Business Growth Benefits",
      description: "Build your profile, showcase your portfolio, and grow your customer base through our platform"
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Everything You Need in One Place</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of users choose HubConnect for their property and service needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;