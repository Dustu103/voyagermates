import React, { useEffect, useState } from 'react';
import backgroundImage from './PlaceDetails/assets/background.jpeg';
import Navbar from './Navbar';

const AboutUs = () => {
  const [loaded, setLoaded] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Simulate loading delay for fade-in effect
    const timer = setTimeout(() => {
      setLoaded(true);
      setShowTagline(true);
    }, 500); // Initial delay for content to appear
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <div className='fixed top-0 w-full z-[9999] important'><Navbar/></div>
    <div
      className="min-h-screen text-white flex flex-col items-center justify-center z-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Fixed background
      }}
    >
        {/* <div className='z-10000000'></div> */}
       
      {/* Hero Section with Typewriter Effect */}
      <section
        className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'} w-full h-[500px] flex items-center justify-center text-center`}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white max-w-lg fade-in animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className={`text-lg ${showTagline ? 'typewriter' : ''}`}>
            Adventure Connect - Your Ultimate Travel Companion
          </p>
        </div>
      </section>

      {/* About Us Content with Delayed Fade-In Animation */}
      <div className="container mx-auto py-12 px-6 fade-in animate-fade-in bg-opacity-50 bg-gray-900 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-300 mb-10">Our Mission</h2>
        <p className="text-center max-w-2xl mx-auto text-lg text-gray-400 mb-10">
          We believe that adventure is for everyone. At Adventure Connect, our mission is to connect thrill-seekers and explorers, organizing trips that go beyond the ordinary.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member Cards */}
          {[
            { name: "Alex Johnson", role: "Founder & Lead Guide", description: "A seasoned traveler with over a decade of experience.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=entropy&fit=crop&w=500&h=500&q=80" },
            { name: "Sara Lee", role: "Adventure Specialist", description: "Sara crafts unique experiences for each trip.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&fit=crop&w=500&h=500&q=80" },
            { name: "Chris Wu", role: "Community Manager", description: "Connecting like-minded travelers and building a community.", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?crop=entropy&fit=crop&w=500&h=500&q=80" },
          ].map((member, index) => (
            <div
              key={member.name}
              className={`bg-gray-800 bg-opacity-75 shadow-lg rounded-lg p-6 flex flex-col items-center text-center fade-in animate-fade-in delay-${index + 1}`}
            >
              <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
              <p className="mt-4 text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Community Section with Fade-In Animation */}
      <section className="bg-blue-600 bg-opacity-75 text-white py-16 fade-in animate-fade-in delay-4 rounded-lg mt-10 w-full">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg">
            Adventure awaits! Connect with people who share your passion for exploration and make memories that last a lifetime.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutUs;
