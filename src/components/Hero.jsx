import React, { useState } from 'react';
import Form from '../features/waitlist/Form';



const Hero = () => (
  <div className="w-full bg-[#0D1534] py-20 mt-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect, Work, and Grow with{' '}
            <span className="bg-[#7AD852] bg-clip-text text-transparent">Hub</span>
            <span className="bg-[#580FEA] bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Your all-in-one platform for property listings, service providers, and investment opportunities
          </p>
          

          {/* form */}
          <Form />
        </div>
        
        <div className="relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-lg mx-auto">
            <img 
              src="/herophone.png" 
              alt="HubConnect App Interface" 
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HubConnectHero = () => (
  <div className=" flex flex-col">

    <Hero />
  </div>
);

export default HubConnectHero;