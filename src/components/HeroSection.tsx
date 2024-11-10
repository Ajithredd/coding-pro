import React from 'react';
import desktopLogo from '../assets/desktop.png'; // Adjust path to the image
import banking from '../assets/bank.png';
import personal from '../assets/personal.png';
import cities from '../assets/cities.png';
import modules from '../assets/modules.png';
import hat from '../assets/hat.png';
import institute from '../assets/institute.png';
import govt from '../assets/govt.png';
import nsdc from '../assets/nsdc.png';
import startup from '../assets/startup.png';

const HeroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white-50 pb-0">
      <div className="container mx-auto px-4">
        {/* First Div (Image Section) */}
        <div className="flex flex-col items-center mb-12 md:flex-row md:items-start md:space-x-8">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img src={desktopLogo} alt="Desktop" className="w-4/5 h-auto mx-auto" />
          </div>

          {/* Second Div (Text and Training Boxes) */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <h1 className="text-6xl font-extrabold text-center text-gray-600 mb-4">Where The World </h1>
            <h1 className="text-6xl font-extrabold text-center text-gray-600 mb-4">Learns To Code</h1>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center mb-8">
              {/* Campus Training Box */}
              <div className="relative p-6 border-4 rounded-sm bg-white  w-80 flex flex-col items-center"
  style={{
    borderImage: 'linear-gradient(to bottom, #3b82f6, #14b8a6) 1',
    borderRadius: '20px', // Apply custom curve for the border
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow on left and bottom
  }}>
     <img src={banking} alt="Banking Logo" className="h-16 w-auto mb-4" />
  <h2 className="text-2xl font-semibold text-teal-600 mb-2 text-center">Campus Training</h2>
  <p className="text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci nec lorem.</p>
  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 hover:shadow-md transition-all">
    Explore &gt;
  </button>
</div>

{/* Professional Training Box */}
<div className="relative border-4 p-6 bg-white rounded-lg w-80 flex flex-col items-center"
  style={{
    borderImage: 'linear-gradient(to bottom, #3b82f6, #14b8a6) 1',
    borderRadius: '20px', // Apply custom curve for the border
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)', // Shadow on left and bottom
  }}> <img src={personal} alt="Personal Logo" className="h-16 w-auto mb-4" />
  <h2 className="text-2xl font-semibold text-teal-600 mb-2 text-center">Professional Training</h2>
  <p className="text-gray-600 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci nec lorem.</p>
  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-700 hover:shadow-md transition-all">
    Explore &gt;
  </button>
</div>

            </div>
          </div>
        </div>

        {/* Third Div (Four Equally Spaced Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Box 1 */}
          <div className="border-2 border-blue-400 p-6 rounded-lg flex items-center">
  <div className="w-1/2 flex justify-center">
    <div className="bg-teal-100 rounded-full p-3"> {/* Decreased size of the circle */}
      <img src={cities} alt="Logo" className="h-16 w-auto" />
    </div>
  </div>
  <div className="w-1/2 text-left"> {/* Changed from text-center to text-left */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">50+</h3> {/* Changed to blue-400 */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">Cities</h3> {/* Changed to blue-400 */}
  </div>
</div>

{/* Box 2 */}
<div className="border-2 border-blue-400 p-6 rounded-lg flex items-center">
  <div className="w-1/2 flex justify-center">
    <div className="bg-teal-100 rounded-full p-3"> {/* Decreased size of the circle */}
      <img src={modules} alt="Logo" className="h-16 w-auto" />
    </div>
  </div>
  <div className="w-1/2 text-left"> {/* Changed from text-center to text-left */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">80+</h3> {/* Changed to blue-400 */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">Modules</h3> {/* Changed to blue-400 */}
  </div>
</div>

{/* Box 3 */}
<div className="border-2 border-blue-400 p-6 rounded-lg flex items-center">
  <div className="w-1/2 flex justify-center">
    <div className="bg-teal-100 rounded-full p-3"> {/* Decreased size of the circle */}
      <img src={hat} alt="Logo" className="h-16 w-auto" />
    </div>
  </div>
  <div className="w-1/2 text-left"> {/* Changed from text-center to text-left */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">10K+</h3> {/* Changed to blue-400 */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">Students</h3> {/* Changed to blue-400 */}
  </div>
</div>

{/* Box 4 */}
<div className="border-2 border-blue-400 p-6 rounded-lg flex items-center">
  <div className="w-1/2 flex justify-center">
    <div className="bg-teal-100 rounded-full p-3"> {/* Decreased size of the circle */}
      <img src={institute} alt="Logo" className="h-16 w-auto" />
    </div>
  </div>
  <div className="w-1/2 text-left"> {/* Changed from text-center to text-left */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">100+</h3> {/* Changed to blue-400 */}
    <h3 className="text-blue-400 font-semibold text-3xl mb-2">Institutes</h3> {/* Changed to blue-400 */}
  </div>
</div>


        </div>
      </div>
      <div className="flex bg-blue-100 p-6 rounded-lg mt-6 mb-0">
      {/* Partition 1 */}
      <div className="flex-1 flex justify-center items-center">
        <img src={govt} alt="Logo 1" className="h-24 w-auto" /> {/* Increased logo size */}
      </div>

      {/* Grey Line Divider between Partition 1 and 2 */}
      <div className="border-l-4 border-gray-400 h-full"></div> {/* Thicker grey line */}

      {/* Partition 2 */}
      <div className="flex-1 flex justify-center items-center">
        <img src={nsdc} alt="Logo 2" className="h-24 w-auto" /> {/* Increased logo size */}
      </div>

      {/* Grey Line Divider between Partition 2 and 3 */}
      <div className="border-l-4 border-gray-400 h-full"></div> {/* Thicker grey line */}

      {/* Partition 3 */}
      <div className="flex-1 flex justify-center items-center">
        <img src={startup} alt="Logo 3" className="h-24 w-auto" /> {/* Increased logo size */}
      </div>
   
    </div>
    </section>
  );
};

export default HeroSection;
