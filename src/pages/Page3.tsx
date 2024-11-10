import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpg';

const Page3: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold">
          Our Efforts To <span className="text-teal-500">Innovate</span> Have Been <br />
          <span className="text-teal-500">Recognized</span> And Appreciated
        </h2>
      </div>

      <div className="flex flex-col items-center space-y-16 relative">
        
        {/* First Card with Left and Right Strips */}
        <div className="relative flex items-center space-x-6 w-full mx-auto sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-8">
          
          {/* Left Strip (Hidden on mobile) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[40%] h-[130px] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center sm:block hidden">
            
          </div>

          {/* Right Strip (Hidden on mobile) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[60%] h-[130px] bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center sm:block hidden">
            <p className="text-white text-center max-w-xs mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </p>
          </div>

          {/* Left Button */}
          <button className="bg-teal-200 rounded-full p-2 hover:bg-teal-300 sm:block hidden">
            <FaArrowLeft className="text-teal-700" />
          </button>

          {/* First Card */}
          <div className="relative sm:left-[400px] w-96 h-60 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <img
              src={img1}
              alt="Award Image 1"
              className="w-full h-full object-cover border-4 border-blue-300 rounded-lg"
            />
          </div>

          {/* Right Button */}
          <button className="bg-teal-200 rounded-full p-2 hover:bg-teal-300 sm:block hidden">
            <FaArrowRight className="text-teal-700" />
          </button>
        </div>

        {/* Second Card with Left and Right Strips */}
        <div className="relative flex items-center space-x-6 w-full mx-auto sm:flex-row flex-col sm:space-x-6 sm:space-y-0 space-y-8">
          
          {/* Left Strip (Hidden on mobile) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[60%] h-[130px] bg-gradient-to-r from-teal-500 to-blue-500 flex items-center justify-center sm:block hidden">
            <p className="text-white text-center max-w-xs mx-auto">
              Honored by Shri Dharmendra Pradhan ji
              Union Minister for Education 
              Govt. of India - 2023  
            </p>
          </div>
          
          {/* Right Strip (Hidden on mobile) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[40%] h-[130px] bg-gradient-to-r from-blue-500 to-teal-500 flex items-center sm:block hidden">
            {/* Empty content inside the right strip */}
          </div>

          {/* Left Button */}
          <button className="bg-teal-200 rounded-full p-2 hover:bg-teal-300 sm:block hidden">
            <FaArrowLeft className="text-teal-700" />
          </button>

          {/* Second Card */}
          <div className="relative sm:left-[900px] w-96 h-60 bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
            <img
              src={img2}
              alt="Award Image 2"
              className="w-full h-full object-cover border-4 border-blue-300 rounded-lg"
            />
          </div>

          {/* Right Button */}
          <button className="bg-teal-200 rounded-full p-2 hover:bg-teal-300 sm:block hidden">
            <FaArrowRight className="text-teal-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
