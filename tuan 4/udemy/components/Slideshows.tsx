"use client";
import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

interface Slide {
  imageUrl: string;
}

const slides: Slide[] = [
  {
    imageUrl: "/study1.jpg",
  },
  {
    imageUrl: "/study2.jpg",
  },
  {
    imageUrl: "/study3.jpg",
  },
  {
    imageUrl: "/study4.jpg",
  },
  {
    imageUrl: "/study5.jpg",
  },
  {
    imageUrl: "/study6.jpg",
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
    <div className="relative w-full max-w-6xl mx-auto h-[400px] overflow-hidden rounded-lg">
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
      />
      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all"
      >
        <LeftOutlined className="text-2xl" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-4 hover:bg-opacity-75 transition-all"
      >
        <RightOutlined className="text-2xl" />
      </button>
    </div>
  );
};

export default Slideshows;
