import React from 'react';
import { Card, Rate } from 'antd';
import Image from 'next/image';

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  isBestSeller?: boolean;
}

const CourseCardTV: React.FC<CourseCardProps> = ({
    title,
    author,
    rating,
    reviewCount,
    price,
    imageUrl,
    isBestSeller,
  }) => {
    return (
      <Card className="w-full  hover:shadow-md transition-shadow duration-300" >
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 flex-shrink-0">
            <Image 
              src={imageUrl} 
              alt={title} 
              width={40} 
              height={40} 
              className="rounded-sm object-cover"
            />
          </div>
          <div className="flex-grow min-w-0">
            <h3 className="text-sm font-semibold mb-1 truncate">{title}</h3>
            <p className="text-xs text-gray-500 mb-1 truncate">{author}</p>
            <div className="flex items-center mb-1">
              <span className="text-sm font-bold mr-1">{rating.toFixed(1)}</span>
              <Rate disabled defaultValue={rating} className="text-xs" />
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
            <p className="text-sm font-bold">₫{price.toLocaleString()}</p>
          </div>
        </div>
        {isBestSeller && (
          <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-0.5 rounded text-gray-800 font-medium">
            Bán chạy nhất
          </span>
        )}
      </Card>
    );
  };
  
export default CourseCardTV;