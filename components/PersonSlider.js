'use client'

import React from "react";
import { cards } from "@/utils/slideArray";

const PersonSlider = () => {
  // const cards = Array(10).fill({
  //   name: "Dr Dhruv Galgotia",
  //   position: "CEO",
  //   organization: "Galgotia University India",
  //   imgSrc: "/ImportantPersons/dhruvSir 2.png", // Replace with the actual path
  // });

  return (
    <div className="overflow-hidden bg-gray-100 py-6">
      <h1 className="relative text-center tracking-tight text-balance pb-6 font-bold !leading-tight text-gray-900 text-lg md:text-xl lg:text-2xl">
        Committee Members
      </h1>
      <div className="flex w-max animate-scroll space-x-16" style={{
        animation: 'scroll 60s linear infinite',
      }}>
        {cards.concat(cards).slice(0, 18).map((card, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-[320px] h-[120px] p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#BE2727] to-[#F96604] p-0.5">
              <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img
                  src={card.imgSrc}
                  alt={card.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h2 className="text-base font-bold text-gray-900 truncate group-hover:text-[#BE2727] transition-colors">{card.name}</h2>
              <p className="text-xs font-semibold text-[#024CAD] uppercase tracking-wide truncate">{card.position}</p>
              <p className="text-xs text-gray-500 truncate">{card.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonSlider;


