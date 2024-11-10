import React from 'react';

// Dummy logo import
import logo1 from '../assets/lg1.png';
import logo2 from '../assets/lg2.png';
import logo3 from '../assets/lg3.png';
import logo4 from '../assets/lg4.png';
import logo5 from '../assets/lg5.png';
import logo6 from '../assets/lg6.png';

const FeatureCards: React.FC = () => {
  return (
    <div className="bg-[linear-gradient(96.91deg,_#2B95ED_-2.42%,_#185587_183.96%)] p-12 text-white">
      <h2 className="text-5xl font-semibold mb-8 text-left">What sets us apart?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo1} alt="Logo 1" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">Created by IIT-IIM Alumni</h3>
          <p className="text-gray-600 text-lg">We’ve learnt from the best and strive to bring you the best..</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo2} alt="Logo 2" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">A.I. Integration</h3>
          <p className="text-gray-600 text-lg">We have harnessed the power of A.I. to enhance and assess your knowledge</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo3} alt="Logo 3" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">In-app Coding</h3>
          <p className="text-gray-600 text-lg">The app features in-app coding, eliminating the need for laptops</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo4} alt="Logo 4" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">Extensive E-books</h3>
          <p className="text-gray-600 text-lg">Deepen your understanding and mastery of the skills.</p>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo5} alt="Logo 5" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">Recorded Lectures</h3>
          <p className="text-gray-600 text-lg">Access lectures anywhere and anytime at your own pace.</p>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-lg p-6 text-left shadow-lg w-[372px]">
          <img src={logo6} alt="Logo 6" className="h-24 w-auto mb-4" />
          <h3 className="text-blue-400 font-semibold text-2xl mb-2">Flash cards</h3>
          <p className="text-gray-600 text-lg">Make learning convenient and fun using flash cards.</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
