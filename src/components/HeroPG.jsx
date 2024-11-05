import React, { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://img.freepik.com/free-photo/rendering-person-with-different-personalities_23-2151112930.jpg?t=st=1729787202~exp=1729790802~hmac=8fe3bd9854a95e95f56d33d56fa4695443061e463aeae515b6fe82ecb3c0f0e4&w=740',
    'https://img.freepik.com/free-photo/abstract-psychedelic-papercut-background_23-2149303066.jpg?t=st=1729772429~exp=1729776029~hmac=6fe97c39732b0685e147d9328ad02341dbbb6db47a3d0ee11b9dead8612606d5&w=740',
    'https://img.freepik.com/free-vector/gradient-abstract-background_23-2149947340.jpg?t=st=1729772456~exp=1729776056~hmac=faeec3c1343b6f1fc0ff2a7e37e8c435e32598968ec6eea6f89430c8d3890216&w=740'
  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative overflow-hidden w-full h-screen" id="herotxt">
  
      <div
        className="w-full h-full flex flex-col justify-center items-center bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.606), rgba(0, 0, 0, 0.606)),url(${images[currentIndex]})` }}
      >
        <div className="max-w-80 sm:max-w-xl text-center">
        <h2 className="text-xl sm:text-3xl  text-white">Unlock Your Potential</h2>
        <h2 className=" text-3xl sm:text-5xl  font-bold pb-2 pri3">Shape Africa's Future</h2>
        <p className="text-white pb-3">Ready to unlock your future? Book a discovery call with us today and start your journey to growth and impact.</p>
        <Link to = '/OurInternship'><button className="text-white pri2 py-2 px-5 rounded-sm  "><p>Learn More</p></button></Link>
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md  transition duration-300"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-full shadow-md  transition duration-300"
      >
        ❯
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
