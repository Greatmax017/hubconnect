import React, { useState } from 'react';



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
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#0D1534] text-white px-4 py-3 rounded-lg w-full max-w-sm border border-[#e7e8eb]/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button type='submit' className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 whitespace-nowrap">
                Join waitlist
              </button>
            </div>
          </form>
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