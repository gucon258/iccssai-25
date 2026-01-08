"use client";

import React, { useEffect, useState } from 'react';
import { data } from '@/utils/slideArray';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  // Add responsive breakpoints handling
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="w-full px-4 py-8 mx-auto lg:px-8 max-w-[1440px]">
      {isMounted && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="rounded-2xl shadow-2xl overflow-hidden group"
          style={{
            width: '100%',
            height: 'auto',
            '--swiper-pagination-color': '#BE2727',
            '--swiper-pagination-bullet-inactive-color': '#999999',
            '--swiper-pagination-bullet-inactive-opacity': '0.5',
            '--swiper-pagination-bullet-size': '10px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
            '--swiper-navigation-color': '#fff',
          }}
          breakpoints={{
            320: { height: '300px' },
            640: { height: '400px' },
            768: { height: '500px' },
            1024: { height: '600px' },
          }}
        >
          {data.map((d) => (
            <SwiperSlide key={d.name}>
              <div className="relative w-full h-full">
                {/* Image */}
                <img
                  src={d.src}
                  alt={d.name}
                  className="w-full h-full object-cover transform transition-transform duration-[10s] hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                {/* Optional Text Overlay (if data has description, currently generic) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 drop-shadow-lg opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                      ICCSAI-2026
                    </h3>
                    <div className="h-1 w-20 bg-[#F8C907] rounded-full mb-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}></div>
                    <p className="text-sm md:text-base text-gray-200 opacity-0 animate-fadeInUp line-clamp-2" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                      International Conference on Communication, Security and Artificial Intelligence
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Slider;