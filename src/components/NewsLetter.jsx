import React from 'react';

const Newsletter = () => {
  return (
    <section className="w-full bg-[#0D1534]  py-24 rounded-lg relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute right-0 bottom-0">
        <div className="w-96 h-96 bg-gradient-to-r from-green-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-[#7AD852]">Ready</span>
          <span className="text-white"> to Get Started?</span>
        </h2>
        <p className="text-white/80 text-lg mb-8">
          Join our waitlist today and be among the first to experience HubConnect.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#0D1534] text-white px-6 py-3 rounded-lg w-full max-w-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button 
            type="submit"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 whitespace-nowrap"
          >
            Join waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;