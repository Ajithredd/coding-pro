import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="text-white mx-0 w-full">
      <div className="flex flex-col md:flex-row w-full">

        {/* Left Half - Contact Form Section */}
        <div className="flex-1 bg-gradient-to-b from-[#1c408e] via-[#081228] to-[#081228] p-8 md:w-1/2 ">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s keep in touch!</h2>
          <p className="text-lg mb-6">Request a CodingPro Institute enquiry!</p>
          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Institute name"
              className="flex-1 p-4 border border-white rounded-l-full bg-[#0d4c8c] text-white"
            />
            <button className="bg-[#5fc0e4] px-6 py-4 rounded-r-full">
              <AiOutlineArrowRight size={24} color="#ffffff" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <a href="#" className="text-white text-lg">Create Account</a>
            <a href="#" className="text-white text-lg">Sign in</a>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            <p className="flex items-center text-lg"><FaPhoneAlt className="mr-3" /> +91 97973 59144</p>
            <p className="flex items-center text-lg"><FaEnvelope className="mr-3" /> codingjr.in@gmail.com</p>
            <p className="flex items-center text-lg"><FaMapMarkerAlt className="mr-3" /> AIC-BHU, Varanasi, 421004</p>
          </div>
        </div>

        {/* Right Half - Links Section */}
        <div className="flex-1 bg-gradient-to-b from-[#15568b] to-[#2595f1] p-8 md:w-1/2  flex flex-col md:flex-row justify-between">
          
          {/* Courses Section */}
          <div className="w-full mb-8 md:w-1/3">
            <h3 className="text-3xl font-semibold mb-6">Courses</h3>
            <ul className="text-lg">
              <li><a href="#" className="hover:text-[#5fc0e4]">Campus Training Program</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">Professional Training Program</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">B. Tech</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">B. Des.</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="w-full mb-8 md:w-1/3">
            <h3 className="text-3xl font-semibold mb-6">Company</h3>
            <ul className="text-lg">
              <li><a href="#" className="hover:text-[#5fc0e4]">About Us</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">Blog</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">Our Team</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#5fc0e4]">FAQ</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col items-start md:w-1/3">
            <h3 className="text-3xl font-semibold mb-6">Follow Us</h3>
            <div className="flex gap-6">
              <a href="#" className="text-3xl"><FaInstagram size={24} color="#ffffff" /></a>
              <a href="#" className="text-3xl"><FaFacebook size={24} color="#ffffff" /></a>
              <a href="#" className="text-3xl"><FaLinkedin size={24} color="#ffffff" /></a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
