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
    <Card className="w-full border border-white cursor-pointer p-1 relative">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            width={64}
            height={64}
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex-grow min-w-0">
          <h2 className="font-bold text-sm leading-tight mb-1">{title}</h2>
          <p className="text-sm text-gray-600 mb-1 truncate">{author}</p>
          <div className="flex items-center mb-1">
            <span className="text-yellow-600 font-bold text-base mr-1">
              {rating.toFixed(1)}
            </span>
            <Rate
              allowHalf
              disabled
              defaultValue={rating}
              className="text-amber-500 text-xs"
            />
            <span className="text-sm text-gray-600 ml-2">({reviewCount})</span>
          </div>
          <p className="text-lg font-bold text-gray-600">₫{formattedPrice}</p>
        </div>
      </div>
      {isBestSeller && (
        <span className="absolute bottom-2 left bg-yellow-200 text-xs px-2 py-0.5 text-gray-800 font-medium">
          Bán chạy nhất
        </span>
      )}
    </Card>
  );
};

const CourseListTV: React.FC = () => {
  const coursesTV: CourseCardProps[] = [
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.6,
      reviewCount: 464,
      price: 1299000,
      imageUrl: "/study1.jpg",
      isBestSeller: true,
    },
    {
      title: "Javascript cho người mới bắt đầu",
      author: "Hau Nguyen",
      rating: 4.5,
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
