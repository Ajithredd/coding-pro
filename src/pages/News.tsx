import React from 'react';
import { FaArrowRight } from 'react-icons/fa';  // Import the arrow icon from react-icons
import bussiness from '../assets/bussiness.png';
import print from '../assets/print.png';
import times from '../assets/times.png';

const News: React.FC = () => {
  const articles = [
    {
      id: 1,
      source: 'ThePrint',
      date: '31 March, 2023',
      title: 'Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40',
      link: '#',
      imageUrl: times, // Using the 'times' image for all articles
      logoUrl: print, // The first card should use 'print' logo
    },
    {
      id: 2,
      source: 'Business Outreach',
      date: '01 March, 2023',
      title: 'Meet Vikas Shukla- The flag bearer of technology and . . .',
      link: '#',
      imageUrl: times, // Using the 'times' image for all articles
      logoUrl: bussiness, // The second card should use 'bussiness' logo
    },
    {
      id: 3,
      source: 'ThePrint',
      date: '01 March, 2023',
      title: 'Meet Vikas Shukla- The flag bearer of technology and . . .',
      link: '#',
      imageUrl: times, // Using the 'times' image for all articles
      logoUrl: print, // The third card should use 'print' logo
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
        We’ve Also Been In <span className="text-teal-600">News!</span>
      </h2>
      
      <div className="flex flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1),0px_2px_12px_0px_rgba(0,0,0,0.1)] p-4 w-full transform transition-transform hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <img
                src={article.logoUrl}
                alt={article.source}
                className="h-8 object-contain ml-0"
              />
              <span className="text-sm text-gray-500">{article.date}</span>
            </div>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-60 object-cover rounded-lg mb-4"  // Increased image size
            />
            <p className="text-gray-800 font-medium">{article.title}</p>
            <a 
              href={article.link} 
              className="text-blue-600 mt-4 flex justify-between items-center gap-1 font-medium"
            >
              <span>Read article</span>
              <FaArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
