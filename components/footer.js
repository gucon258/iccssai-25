import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#4E0000] to-[#BE2727] text-white py-8 font-sans">
      <div className="container mx-auto px-4 flex justify-between items-start flex-col md:flex-row">
        <div className="w-full md:w-1/3 flex flex-col gap-2 md:gap-10"> {/* Left Column */}
          <div className='flex justify-between gap-10'>
            <div>
                <img src="/logos/footericcsai.png" alt="" />
            </div>
            <div className='h-full'>
            <p className="mb-4">
            Plot No. 2, Yamuna Expy, opposite<br />
            Buddha International Circuit, Sector 17A, Greater Noida, Uttar Pradesh 203201
            </p>
            </div>
          </div>
          <div>
            <a href="https://www.galgotiasieee.org/events/event-1">
              <img 
                src="https://res.cloudinary.com/dgna3swph/image/upload/v1743326940/Young_minds_lv7cc3.png" 
                alt="Young Minds logo" 
                className='h-1/2 md:h-full w-full'
              />
            </a>
          </div>
        </div>
        <div className='flex gap-20 p-5 w-full  md:w-1/3'>
        <div className="w-full"> {/* Middle Column */}
          <h3 className="text-lg font-semibold mb-2 text-left">Useful Links</h3>
          <ul className="list-disc p-0">
            <li className="mb-1"><a href="#" className="text-white hover:underline">About</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">Events</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">Gallery</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">Program</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">IEEE U.P.</a></li>
          </ul>
        </div>

        <div className="w-full "> {/* Right Column */}
          <h3 className="text-lg font-semibold mb-2">Socials</h3>
          <ul className="list-disc p-0">
            <li className="mb-1"><a href="#" className="text-white hover:underline">LinkedIn</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">Instagram</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">YouTube</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">Facebook</a></li>
            <li className="mb-1"><a href="#" className="text-white hover:underline">X (Twitter)</a></li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;