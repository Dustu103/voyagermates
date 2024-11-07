import React from 'react';
import Navbar from './Navbar';

const ContactForm = () => {
  return (
    <>
    <div className='fixed z-[9999] w-full top-0 mb-6'><Navbar/></div>
    <div className=" min-h-screen w-full flex items-center justify-center mt-8 bg-opacity-80">
        
      <div className="bg-[url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2042508-jpeg.jpg')] bg-cover bg-no-repeatcontact-form-container w-full max-w-5xl grid grid-cols-4 grid-rows-[repeat(3,_auto)] gap-4 p-8  border border-gray-700 shadow-lg rounded-lg">
        
        {/* Contact Us Section */}
        <div className="contact-us relative bg-transparent col-span-1 row-span-3 flex flex-col items-center justify-center p-4 rounded-md shadow-md border border-gray-600">
          <div className="absolute top-[120px] left-[-40px] transform -rotate-90 text-white">
            <h1 className="text-lg font-bold">&#8212;&#8212;&#8212;&#8212;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div className="social-bar absolute bottom-5 left-10">
            <ul className="flex space-x-4 text-white">
              <li><i className="fab fa-facebook-f text-xl"></i></li>
              <li><i className="fab fa-twitter text-xl"></i></li>
              <li><i className="fab fa-instagram text-xl"></i></li>
              <li><i className="fab fa-dribbble text-xl"></i></li>
            </ul>
          </div>
        </div>

        {/* Header Section */}
        <div className="header col-span-3 text-center p-4 text-white">
          <h1 className="text-3xl font-bold">Let's Get Started</h1>
          <h2 className="text-xl font-light mt-2">Contact us to start your journey</h2>
        </div>

        {/* Address Section */}
        <div className="address col-span-1 text-center text-gray-600 flex flex-col items-center">
          <i className="fas fa-map-marker-alt text-[#2f0c1d] text-2xl mb-2"></i>
          <h3 className="text-lg font-light">Haldia</h3>
          <h3 className="text-lg font-light">West Bengal, India</h3>
        </div>

        {/* Phone Section */}
        <div className="phone col-span-1 text-center text-gray-600 flex flex-col items-center">
          <i className="fas fa-phone-alt text-[#F8B7D8] text-2xl mb-2"></i>
          <h3 className="text-lg font-light">0000000000</h3>
        </div>

        {/* Email Section */}
        <div className="email col-span-1 text-center text-gray-600 flex flex-col items-center">
          <i className="fas fa-envelope text-[#F8B7D8] text-2xl mb-2"></i>
          <h3 className="text-lg font-light">hello@gmail.com</h3>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form col-span-3 bg-transparent p-6 shadow-md rounded-lg border border-gray-600">
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ED8EB]"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ED8EB]"
            />
            <textarea 
              rows="4" 
              placeholder="Tell us about your journey..." 
              className="w-full px-3 py-2 bg-transparent border border-gray-500 rounded-lg text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9ED8EB] resize-none"
            ></textarea>
            <button 
              type="button" 
              className="w-full py-2 mt-4 bg-[#9ED8EB] text-white font-semibold rounded-full hover:bg-[#7bb6d2] shadow-lg"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactForm;
