import React from 'react';
import full from '../assets/full.png';
import half from '../assets/half.png';
import students from '../assets/students.png';

const Offer: React.FC = () => {
  return (
    <div className="bg-white pt-12 flex flex-col items-center text-center space-y-12">
      
      {/* Heading Section */}
      <div className="text-center pt-12">
        <h2 className="text-4xl font-semibold leading-tight">
          Because We Offer What You Need <br />
          at <span className="text-teal-700">every step</span> of your <br />
          <span className="text-teal-700">transformative learning journey</span>
        </h2>
      </div>

      {/* Image Stack */}
      <div className="relative w-full max-w-lg h-[400px] flex justify-center items-center">
        {/* Base Image - Full */}
        <img
          src={full}
          alt="Full Image"
          className="w-full h-auto rounded-lg object-cover  absolute bottom-0 z-10"
        />

        {/* Middle Image - Students */}
        <img
          src={students}
          alt="Students Image"
          className="w-[85%] h-auto rounded-lg object-cover  absolute bottom-18 z-20"
        />

        {/* Top Image - Half */}
        <img
          src={half}
          alt="Half Image"
          className="w-full h-auto rounded-lg object-cover  absolute bottom-0 z-30"
        />
      </div>
    </div>
  );
};

export default Offer;
