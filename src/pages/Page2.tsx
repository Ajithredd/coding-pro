import React from 'react';
import binary from '../assets/binary.jpg';
import campus from '../assets/campus.png';
import professional from '../assets/professional.png';

const Page2: React.FC = () => {
  return (
    <div className="relative py-12">
      {/* Background Image with opacity applied directly */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${binary})` }}
      ></div>

      {/* Semi-Transparent White Overlay for Right Half */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-white opacity-90"></div>

      {/* Page Content with z-index to Layer Above Background */}
      <div className="relative z-10 py-12">
        {/* Page Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4 mb-6">
          Check out our <span className="text-teal-800">holistic programs</span>
        </h2>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center px-4 mb-12">
          designed to help you reach your <span className="text-teal-800">goals</span>
        </h2>

        {/* Cards Section */}
        <div className="flex flex-col gap-8 w-11/12 lg:w-3/4 mx-auto p-4">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden h-auto relative">
            <img 
              src={campus} 
              alt="Campus Program" 
              className="w-full md:w-1/2 h-[300px] object-cover" 
            />
            <div className="flex flex-col p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold text-black mb-2">Campus Training Program</h3>
              <h4 className="text-lg text-gray-500 mb-4">For students| 24+ Modules | 10 instructors</h4>
              <p className="text-gray-700 text-lg w-[80%]">
              The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs. </p>
            </div>
            {/* Explore Button */}
            <button className="absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Explore
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-lg overflow-hidden h-auto relative">
            <img 
              src={professional} 
              alt="Professional Program" 
              className="w-full md:w-1/2 h-[300px] object-cover" 
            />
            <div className="flex flex-col p-6 md:w-1/2">
              <h3 className="text-2xl font-semibold text-black mb-2">Professional Training Program</h3>
              <h4 className="text-lg text-gray-500 mb-4">For Professionals | 24+ Modules | 10 instructors</h4>
              <p className="text-gray-700 text-lg w-[80%]">
              The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs. </p>
            </div>
            {/* Explore Button */}
            <button className=" absolute bottom-4 right-4 bg-blue-600 text-white px-6 py-2 text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
