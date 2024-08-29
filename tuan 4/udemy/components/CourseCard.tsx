"use client";
"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Rate, Carousel, Tooltip } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  reviews: number;
  price: number;
  imageUrl: string;
  description: string[];
  isBestSeller?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  author,
  rating,
  reviews,
  price,
  imageUrl,
  description,
  isBestSeller,
}) => {
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  const tooltipContent = (
    <div className="p-2 bg-white   border-white ">
      <h3 className="font-semibold text-lg mb-2 text-gray-900 break-words">
        {title}
        {isBestSeller && (
          <span className="block mt-1 w-24 bg-yellow-200 text-xs px-2 py-0.5  text-gray-800 font-medium">
            Bán chạy nhất
          </span>
        )}
      </h3>
      <p className="text-sm text-gray-700 mb-2 break-words">
        <strong>Mô tả khóa học: </strong>
        <ul className="list-disc list-inside mt-1">
          {description.map((item, index) => (
            <li key={index} className="text-sm text-gray-700 break-words">
              {item}
            </li>
          ))}
        </ul>
      </p>
      <p className="text-sm text-gray-700 mb-2 break-words">
        <strong>Tác giả: </strong> {author}
      </p>
      <p className="text-sm text-gray-700 mb-2 break-words">
        <strong>Giá: </strong> ₫{formattedPrice}
      </p>
      <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
  
  return (
    <Tooltip
      placement="right"
      title={tooltipContent}
      trigger="hover"
      overlayInnerStyle={{
        backgroundColor: 'white',
      }}
      
    >
      <div className="relative flex cursor-pointer m-2">
        <div className="w-52">
          <div className="relative h-28 mb-2">
            <Image
              alt={title}
              src={imageUrl}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <h2 className="font-bold text-sm leading-tight mb-1">{title}</h2>
          {isBestSeller && (
            <span className="absolute bottom-2 right-2 bg-yellow-200 text-xs px-2 py-0.5  text-gray-800 font-medium">
              Bán chạy nhất
            </span>
          )}
          <p className="text-xs text-gray-500 mb-1">{author}</p>
          <div className="flex items-center mb-1">
            <span className="text-gray-800 font-bold text-sm mr-1">
              {rating.toFixed(1)}
            </span>
            <Rate
              allowHalf
              disabled
              defaultValue={rating}
              className="text-amber-600 text-xs"
            />
            <span className="text-xs text-gray-500 ml-1">({reviews})</span>
          </div>
          <p className="font-bold text-base">₫{formattedPrice}</p>
        </div>
      </div>
    </Tooltip>
  );
  
   
};

const CourseCarousel: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses: CourseCardProps[] = [
    {
      title: "The Modern Javascript Bootcamp Course",
      author: "Colt Steele, Stephen Grider",
      rating: 4.7,
      reviews: 12508,
      price: 2199000,
      imageUrl: "/study1.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
      isBestSeller: true,
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      reviews: 28420,
      price: 1799000,
      imageUrl: "/study2.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "JavaScript Pro: Mastering Advanced Concepts and...",
      author: "Colt Steele",
      rating: 4.8,
      reviews: 754,
      price: 399000,
      imageUrl: "/study3.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
      author: "Brad Traversy, Florin Pop",
      rating: 4.7,
      reviews: 11822,
      price: 1899000,
      imageUrl: "/study4.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "Modern JavaScript From The Beginning 2.0 (2024)",
      author: "Brad Traversy",
      rating: 4.7,
      reviews: 33992,
      price: 2399000,
      imageUrl: "/study5.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      reviews: 28420,
      price: 1799000,
      imageUrl: "/study6.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "The Modern Javascript Bootcamp Course",
      author: "Colt Steele, Stephen Grider",
      rating: 4.7,
      reviews: 12508,
      price: 2199000,
      imageUrl: "/study1.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      reviews: 28420,
      price: 1799000,
      imageUrl: "/study2.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "JavaScript Pro: Mastering Advanced Concepts and...",
      author: "Colt Steele",
      rating: 4.8,
      reviews: 754,
      price: 399000,
      imageUrl: "/study3.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
      author: "Brad Traversy, Florin Pop",
      rating: 4.7,
      reviews: 11822,
      price: 1899000,
      imageUrl: "/study4.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "Modern JavaScript From The Beginning 2.0 (2024)",
      author: "Brad Traversy",
      rating: 4.7,
      reviews: 33992,
      price: 2399000,
      imageUrl: "/study5.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
    {
      title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
      author: "Andrei Neagoie, Yihua Zhang",
      rating: 4.6,
      reviews: 28420,
      price: 1799000,
      imageUrl: "/study6.jpg",
      description: [
        "Learn React from the ground up and finish the course as an advanced React developer.",
        "Build multiple high-quality demo apps, including a fullstack app built with NextJS.",
        "Join more than 800,000 students in this course & more than 2,500,000 students I taught across all my courses.",
      ],
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  return (
    <div className="max-w-7xl mx-auto px-4 relative bg-white">
      <div className="mb-4">
        <p className="font-bold text-4xl">Lĩnh vực sẽ học tiếp theo</p>
        <p className="text-2xl">
          Vì bạn đã xem{" "}
          <span className="text-blue-500 underline">
            "AWS Cloud cơ bản (Tiếng Việt)"
          </span>
        </p>
      </div>
      <Carousel className="bg-white" ref={carouselRef} {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="px-2">
            <CourseCard {...course} />
          </div>
        ))}
      </Carousel>
      {currentSlide > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
          style={{ marginLeft: "10px" }}
        >
          <LeftOutlined className="text-white text-xs" />
        </button>
      )}
      {currentSlide < courses.length - settings.slidesToShow && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 focus:outline-none bg-black rounded-full shadow-md w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
          style={{ marginRight: "10px" }}
        >
          <RightOutlined className="text-white text-xs" />
        </button>
      )}
    </div>
  );
};

export default CourseCarousel;
