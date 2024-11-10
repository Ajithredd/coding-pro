import React from 'react';
import phone from '../assets/phone.png';
import Glyph from '../assets/Glyph.png';
import keyboard from '../assets/keyboard.png';
import quiz from '../assets/quiz.png';
import dev from '../assets/dev.png';
import cloud from '../assets/cloud.png';
import evalu from '../assets/eval.png';
import Magazine from '../assets/Magazine.png';
import play from '../assets/play.png';
import apple from '../assets/apple.png';

const JoinUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 px-6 bg-white md:flex-row md:justify-between md:items-center max-w-6xl mx-auto">
      
      {/* Left Side - Phone Mockup */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        {/* Phone Mockup without shadow */}
        <div className="relative">
          <img src={phone} alt="Coding Pro" className="w-72 h-auto object-cover rounded-lg" />
        </div>
      </div>
      
      {/* Right Side - Features and Join Us Section */}
      <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left flex flex-col justify-between">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Wanna See More? <br />
          <span className="text-blue-600 text-4xl md:text-5xl">Join Us!</span>
        </h2>
        
        {/* Features List */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mb-8">
          <div className="flex items-center gap-2">
            <img src={Glyph} alt="" className="w-8 h-auto" /> <span className="text-lg">Recorded Lectures</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={keyboard} alt="" className="w-8 h-auto" /> <span className="text-lg">Language-specific keyboard</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={quiz} alt="" className="w-8 h-auto" /> <span className="text-lg">Online Quizzes</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={dev} alt="" className="w-8 h-auto" /> <span className="text-lg">Infinite Project Size</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={cloud} alt="" className="w-8 h-auto" /> <span className="text-lg">In-app Coding</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={evalu} alt="" className="w-8 h-auto" /> <span className="text-lg">Cloud Computation</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={evalu} alt="" className="w-8 h-auto" /> <span className="text-lg">Evaluation Reports</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={Magazine} alt="" className="w-8 h-auto" /> <span className="text-lg">Coding Magazine</span>
          </div>
        </div>

        {/* Active Users and Buttons */}
        <div className="mt-4 text-center">
          {/* Active Users Text */}
          <p className="text-gray-500 text-xl sm:text-2xl mb-6">50k+ Active Users</p>

          {/* Buttons for Play Store and Apple Store */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Google Play Store Button */}
            <div className="text-center">
              <button className="flex items-center bg-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 text-lg sm:text-xl">
                <img src={play} alt="Google Play" className="w-10 h-auto mr-3" />
                Get it on Play Store
              </button>
            </div>

            {/* Apple App Store Button */}
            <div className="text-center">
              <button className="flex items-center bg-teal-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 text-lg sm:text-xl">
                <img src={apple} alt="Apple App Store" className="w-10 h-auto mr-3" />
                Download on App Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
