import React, { useRef } from 'react';
import Image1 from '../assets/p1.png';
import Image2 from '../assets/p2.png';
import Image3 from '../assets/p3.png';

const Mentor: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const mentors = [
    {
      id: 1,
      name1: 'Vikas ',
      name2: 'Shukla',
      role1: 'Software Engineering',
      role2: 'IIT-BHU',
      description: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “',
      imageUrl: Image1,
    },
    {
      id: 2,
      name1: 'Sumit',
      name2: 'Bhatt',
      role1: 'Software Engineering',
      role2: 'IIT-BHU',
      description: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “',
      imageUrl: Image2,
    },
    {
      id: 3,
      name1: 'Neelu',
      name2: 'Verma',
      role1: 'Software Engineering',
      role2: 'IIT-BHU',
      description: '“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. “',
      imageUrl: Image3,
    },
  ];

  // Scroll handler to move mentor cards left and right
  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400; // Adjust the scroll amount
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-500 mb-2">
        We know just education is not enough anymore
      </h2>
      <h2 className="text-4xl font-bold text-gray-800 mb-12">
        So we’ve got the <span className="text-teal-800">Best Mentors</span> for you.
      </h2>

      {/* Buttons to scroll left and right */}
     
      {/* Mentor Cards - Grid layout for desktop & horizontal scroll for mobile */}
      <div
        ref={scrollRef}
        className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-16 no-scrollbar"
      >
        {mentors.map((mentor, index) => (
          <div
            key={mentor.id}
            className="relative w-[300px] md:w-[380px] h-[650px] mx-4 mb-8 transform transition-transform hover:scale-105"
          >
            {/* Top section with gradient background (70% height) */}
            <div
              className="w-full h-[65%] relative"
              style={{
                background:
                  index === 1
                    ? 'linear-gradient(172.28deg, #2B95ED 10.49%, #85B9E4 101.5%)'
                    : 'linear-gradient(179.98deg, #17C6D8 0.02%, #FAFAFA 118.65%)',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', // Clip-path for top-right corner
              }}
            >
              {/* Mentor's name1 and name2 overlay on top-left */}
              <div className="absolute top-4 left-4 text-4xl font-extrabold text-white opacity-90">
                {mentor.name1}
              </div>
              <div className="absolute top-16 left-4 text-4xl font-extrabold text-white opacity-90">
                {mentor.name2}
              </div>

              {/* Image positioned at bottom-right, shifted to the right */}
              <img
                src={mentor.imageUrl}
                alt={mentor.name1}
                className="absolute bottom-0"
                style={{
                  height: '340px',
                  right: index === 1 ? '-170px' : '-100px', // Move 2nd image more to the right
                }}
              />

              {/* Mentor roles positioned at the bottom of the top section (above the blurred section) */}
              <div className="absolute bottom-0 w-full p-3 bg-gray-700 bg-opacity-80 backdrop-blur-md text-white">
                <h3 className="text-lg font-semibold">{mentor.role1}</h3>
                <h4 className="text-sm font-medium">{mentor.role2}</h4>
              </div>
            </div>

            {/* Bottom section (30% height) for description with dark, blurred background */}
            <div className="w-full h-[35%] p-4 bg-black bg-opacity-80 backdrop-blur-md flex items-center">
              <p className="text-white text-sm">{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;
