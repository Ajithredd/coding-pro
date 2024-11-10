import React, { useState } from 'react';
import prog from '../assets/prog.jpg';

const Students: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const students = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Software Engineer',
      logoUrl: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Data Scientist',
      logoUrl: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
    {
      id: 3,
      name: 'Michael Lee',
      position: 'Product Manager',
      logoUrl: 'https://via.placeholder.com/150',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length);
  };

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#0196F9] via-[#2B95ED] to-[#14CBD5]/70"
        style={{ zIndex: -1 }}
      ></div>

      <div className="text-center mt-20 mb-20">
        <h1 className="text-3xl md:text-5xl font-medium text-white" style={{ fontFamily: 'Poppins' }}>
          And our students agree . . .
        </h1>
      </div>

      {/* Card Container */}
      <div className="relative flex items-center justify-center md:space-x-8">
        <button
          className="hidden md:block absolute left-4 p-3 bg-white bg-opacity-20 rounded-full text-white"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Cards */}
        <div className="flex overflow-x-auto md:overflow-visible snap-x md:snap-none md:justify-center">
          {students.map((student, index) => {
            const isActive = index === currentIndex;

            return (
              <div
                key={student.id}
                className={`transition-all duration-300 transform ${
                  isActive ? 'scale-105 z-10 mx-8' : 'scale-90 opacity-60 mx-4'
                } w-[90%] md:w-[38%] h-[300px] md:h-[300px] flex-shrink-0 md:flex-shrink-1 snap-center`}
              >
                <div className="relative bg-white rounded-lg flex flex-col items-center justify-center pt-24 pb-8 shadow-lg h-full">
                  {/* Logo Image */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-25">
                    <img
                      src={prog}
                      alt="Logo"
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white object-cover"
                    />
                  </div>

                  <p className="text-gray-800 text-center px-4 md:px-6">{student.description}</p>

                  <div className="absolute bottom-0 w-full p-4 text-[#1C408E] text-center">
                    <h3 className="font-semibold text-lg md:text-xl">{student.name}</h3>
                    <p className="text-sm">{student.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="hidden md:block absolute right-4 p-3 bg-white bg-opacity-20 rounded-full text-white"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        <button className="w-10 h-10 rounded-full bg-teal-700 bg-opacity-20 text-white" onClick={handlePrev}>
          &lt;
        </button>
        <button className="w-10 h-10 rounded-full bg-teal-700 bg-opacity-20 text-white" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Students;
