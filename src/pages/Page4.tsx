import React from 'react';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import m4 from '../assets/m4.png';
import m5 from '../assets/m5.png';
import m6 from '../assets/m6.png';
import line from '../assets/line.png';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';

const Page4: React.FC = () => {
  const cards = [
    { id: 1, title: "Custom Specialization", description: "We understand the value of choice, so we empower you to design your course and select the specialization that best suits your goals.", logo: m1 },
    { id: 2, title: "Virtual Labs", description: "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.", logo: m2 },
    { id: 3, title: "AI Tests", description: "We understand that teaching alone isn't enough, so we provide our students with AI-powered tests to assess their progress.", logo: m3 },
    { id: 4, title: "Resume Builder", description: "We not only support skill development but also leverage AI to highlight those skills effectively on your resume to help you stand out from the crowd.", logo: m4 },
    { id: 5, title: "Placement Preparation", description: "We go beyond building skills, taking our students to the next level by providing them with thorough placement preparation.", logo: m5 },
    { id: 6, title: "AI Interviews", description: "Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.", logo: m6 },
  ];

  return (
    <div className="bg-white pt-0 flex flex-col items-center relative mt-0">
      {/* Vertical Line in Background */}
      <div className="absolute inset-0 flex justify-center z-0">
        <img src={line} alt="Vertical Line" className="w-[15px] h-full" />
      </div>

      {/* Cards Section */}
      <div className="relative z-10 flex flex-wrap justify-center  mt-5 w-full max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`relative w-full lg:w-1/2 p-4 ${index % 2 === 0 ? 'lg:pr-2' : 'lg:pl-2'} ${
              index % 2 === 0 ? 'text-left' : 'text-right'
            }`}
            style={{ marginTop: `${index * 2}rem` }}
          >
            <div className="relative bg-white border-2 border-teal-500 shadow-lg rounded-lg p-8 max-w-[500px] mx-auto">
              {/* Card Number in Centered Circle */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center justify-center w-12 h-12 bg-teal-700 text-white font-bold rounded-full">
                  {card.id}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex items-start space-x-4 pt-6">
                {/* Logo */}
                <img src={card.logo} alt={`Logo ${card.id}`} className="w-12 h-12 self-start" />
                <div>
                  {/* Heading */}
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                </div>
              </div>
              {/* Description */}
              <p className="mt-4 text-gray-600 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Image Section */}
      <div className="mt-16 flex justify-center space-x-8 mb-0">
        <img src={i1} alt="Image 1" className="w-full h-72 object-cover hidden lg:block" />
        <img src={i2} alt="Image 2" className="w-full h-72 object-cover hidden lg:block" />
        <img src={i3} alt="Image 3" className="w-full h-72 object-cover hidden lg:block" />
        <img src={i4} alt="Image 4" className="w-full h-72 object-cover hidden lg:block mb-[-20px]" />
      </div>
    </div>
  );
};

export default Page4;
