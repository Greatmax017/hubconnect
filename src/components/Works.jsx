import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: "CREATE YOUR ACCOUNT",
      description: "Sign up effortlessly by entering your details and choosing your account type. Complete your profile to unlock tailored features for property seekers, merchants, or service providers."
    },
    {
      title: "BROWSE & CONNECT",
      description: "Explore a curated selection of properties and services that match your preferences. Connect directly with trusted merchants, service providers, or buyers to get exactly what you need."
    },
    {
      title: "MAKE IT HAPPEN",
      description: "Finalize property deals, book reliable services, and manage every step of the process with ease. From payments to progress tracking, everything is streamlined in one place."
    }
  ];

  return (
    <section className="w-full bg-[#F7FFF5] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Get started with HubConnect in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/how.png" 
              alt="HubConnect App Interface" 
              className="w-full max-w-md mx-auto"
            />
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;