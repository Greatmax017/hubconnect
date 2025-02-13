import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Form = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          waitlist_id: 25160
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        triggerConfetti();
        setEmail('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#0D1534] text-white px-4 py-3 rounded-lg w-full max-w-sm border border-[#e7e8eb]/50 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isLoading ? 'Joining...' : 'Join waitlist'}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-red-500 text-sm">{error}</p>
        )}
      </form>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full transform transition-all">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Welcome Aboard! 🎉</h3>
              <p className="text-gray-600 mb-6">
                Thank you for joining our waitlist! We'll keep you updated on our progress.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;