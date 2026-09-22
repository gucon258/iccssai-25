"use client"
import React, { useState } from "react";

// Tourist attractions data with valid Google Maps URLs and location tags
const attractions = [
  {
    name: "Red Fort",
    location: "Old Delhi • ~45 km",
    description: "A historic fort in Delhi that served as the main residence of the Mughal emperors, showcasing magnificent Mughal architecture.",
    image: "https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Red+Fort+Delhi"
  },
  {
    name: "Qutub Minar",
    location: "South Delhi • ~40 km",
    description: "A 73-meter tall minaret and UNESCO World Heritage Site, representing one of the finest architectural marvels of the Delhi Sultanate.",
    image: "https://images.unsplash.com/photo-1632426237957-5ea14aae7100?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Qutub+Minar+Delhi"
  },
  {
    name: "India Gate",
    location: "Central Delhi • ~42 km",
    description: "An iconic 42-meter high war memorial located along the Kartavya Path in New Delhi, honoring fallen Indian soldiers.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=India+Gate+New+Delhi"
  },
  {
    name: "Rishikesh",
    location: "Uttarakhand • Gateway to Himalayas",
    description: "A spiritual city known globally as the 'Yoga Capital of the World', nestled in the Himalayan foothills along the sacred Ganges.",
    image: "/places/rishi.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rishikesh+Uttarakhand"
  },
  {
    name: "Haridwar",
    location: "Uttarakhand • Holy Pilgrimage",
    description: "One of the seven holiest places in India, renowned worldwide for the mesmerizing Ganga Aarti at the sacred Har Ki Pauri ghat.",
    image: "/places/haridwar.jpg",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Haridwar+Uttarakhand"
  },
  {
    name: "Taj Mahal",
    location: "Agra, UP • UNESCO World Wonder",
    description: "An iconic ivory-white marble mausoleum in Agra and one of the New Seven Wonders of the World, built by Emperor Shah Jahan.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Taj+Mahal+Agra"
  }
];

const TouristAttractions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-12 lg:py-16 relative">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#BE2727] text-xs sm:text-sm font-semibold shadow-sm mb-4">
          <svg className="w-4 h-4 text-[#BE2727]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Explore NCR & Beyond
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          Tourist <span className="bg-gradient-to-r from-[#BE2727] to-[#F96604] bg-clip-text text-transparent">Attractions</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#BE2727] to-[#F96604] mx-auto rounded-full mt-3 mb-4"></div>
        <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
          Discover the rich cultural heritage, majestic monuments, and scenic marvels around Galgotias University and the Greater Noida / NCR region.
        </p>
      </div>

      {/* Attractions Grid */}
      <div className="w-full md:max-w-[90%] lg:max-w-[85%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {attractions.map((place, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image & Map Hover Container */}
              <div 
                className="relative w-full h-60 sm:h-64 overflow-hidden bg-gray-100 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}
                />

                {/* Location Pill Badge on Image */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium shadow-sm">
                    <svg className="w-3 h-3 text-[#F8C907]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {place.location}
                  </span>
                </div>
                
                {place.mapUrl && (
                  <div className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    <iframe
                      title={`${place.name} Location`}
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(place.name + " India")}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#BE2727] transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mt-2 line-clamp-3">
                    {place.description}
                  </p>
                </div>
                
                <div className="pt-2">
                  <a 
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#BE2727] to-[#F96604] hover:from-[#9e1c1c] hover:to-[#df5700] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 w-full cursor-pointer group-hover:shadow-red-500/20"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    View on Google Maps
                    <svg className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TouristAttractions;