"use client";
import React from "react";
import { Card, Rate } from "antd";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  reviewCount: number;
  price: number;
  imageUrl: string;
  isBestSeller?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  author,
  rating,
  reviewCount,
  price,
  imageUrl,
  isBestSeller,
}) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  return (
    
    <Card className="w-ful border-white cursor-pointer ">
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
            <Rate allowHalf disabled defaultValue={rating} className=" text-amber-600 text-xs" />
            <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
          </div>
          <p className="text-sm font-bold">₫{formattedPrice}</p>
        </div>
        {isBestSeller && (
          <span className="absolute bottom-2 right-2 bg-yellow-400 text-xs px-2 py-0.5 rounded text-gray-800 font-medium">
            Bán chạy nhất
          </span>
        )}
      </div>
    </Card>
  );
};

const CourseListTV: React.FC = () => {
  const coursesTV: CourseCardProps[] = [
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
      isBestSeller: true,
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.4,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-5 px-4 relative bg-white">
      <h1 className="text-2xl font-bold mb-4">
        Các khóa học hàng đầu về Tiếng Việt
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {coursesTV.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListTV;
