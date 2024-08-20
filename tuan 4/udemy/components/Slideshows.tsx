import React, { useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

interface Slide {
  
  imageUrl: string;
}

const slides: Slide[] = [
  {
    imageUrl: "/study1.jpg"  
  },
  {
    imageUrl: "/study1.jpg"  
  },
  {
    imageUrl: "/study1.jpg"  
  },
  {
    imageUrl: "/study1.jpg"  
  },

];

const Slideshows: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[400px] bg-[#40E0D0] overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-1/2 p-8">
          
        </div>
        <div className="w-1/2">
          <img src={slides[currentSlide].imageUrl} alt="Slide" className="w-full h-auto" />
        </div>
      </div>
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <LeftOutlined />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-all"
      >
        <RightOutlined />
      </button>
    </div>
  );
};

export default Slideshows;