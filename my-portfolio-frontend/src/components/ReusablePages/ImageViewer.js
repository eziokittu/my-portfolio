import React, { useState } from 'react';

const ImageViewer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const getLeftIndex = (centerIndex) => (centerIndex - 1 + images.length) % images.length;
  const getRightIndex = (centerIndex) => (centerIndex + 1) % images.length;

  return (
    <div className="relative h-[400px] overflow-hidden flex items-center justify-center">
      {/* Left Image */}
      <div className="absolute left-0 top-0 bottom-0 w-1/6 bg-white bg-opacity-50 clip-left-end transform -skew-y-6">
        <img
          src={images[getLeftIndex(currentIndex)]}
          alt={`Left`}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Center Image */}
      <div className="flex-grow">
        <img
          src={images[currentIndex]}
          alt={`Center`}
          className="object-contain h-full w-full"
        />
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/6 bg-white bg-opacity-50 clip-right-end transform skew-y-6">
        <img
          src={images[getRightIndex(currentIndex)]}
          alt={`Right`}
          className="object-cover h-full w-full"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-1/6 cursor-pointer" onClick={() => handleClick('left')}>
        <span className="text-4xl">&lt;</span>
      </div>
      <div className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-1/6 cursor-pointer" onClick={() => handleClick('right')}>
        <span className="text-4xl">&gt;</span>
      </div>
    </div>
  );
};

export default ImageViewer;
