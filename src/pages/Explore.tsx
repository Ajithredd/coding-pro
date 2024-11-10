import React from 'react';
import imageSrc from '../assets/your-image.jpg'; // Replace with your image path

const Explore: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center max-w-7xl w-full">
        
        {/* Left Side - Flipped Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={imageSrc}
            alt="Programming"
            className="rounded-lg object-cover w-full h-[80%] md:h-full transform scale-x-[-1]" // Flips the image horizontally
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
            Find Out
          </h2>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-700 mb-4 md:mb-6">
            More Reasons To Stay
          </h2>
          
          <form className="space-y-4 md:space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Mobile no."
              className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-6 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            <div className="flex items-start space-x-2">
              <input type="checkbox" className="w-5 h-5 mt-1" />
              <p className="text-gray-600 text-sm">
                Creating an account means you're okay with our Terms of Service, Privacy Policy, and default Notification Settings
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
          </form>
          
          <p className="text-center text-gray-500 mt-6">
            Already Have An Account? <a href="#" className="text-blue-600 font-semibold">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explore;
