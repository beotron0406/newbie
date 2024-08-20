"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Rate, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { CarouselRef } from "antd/es/carousel";

interface CourseCardProps {
  title: string;
  author: string;
  rating: number;
  reviews: number;
  price: number;
  imageUrl: string;
  description: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  author,
  rating,
  reviews,
  price,
  imageUrl,
  description,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  return (
    <div
      className="relative flex cursor-pointer m-2"
      onMouseEnter={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
    >
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

      {showDetail && (
        <div className="absolute z-10 w-96 p-4 bg-white shadow-lg rounded top-0 left-full ml-4">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Mô tả khóa học: </strong> {description}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Tác giả: </strong> {author}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>Giá: </strong> ₫{formattedPrice}
          </p>
          <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700">
            Thêm vào giỏ hàng
          </button>
        </div>
      )}
    </div>
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
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
  author: "Andrei Neagoie, Yihua Zhang",
  rating: 4.6,
  reviews: 28420,
  price: 1799000,
  imageUrl: "/study2.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "JavaScript Pro: Mastering Advanced Concepts and...",
  author: "Colt Steele",
  rating: 4.8,
  reviews: 754,
  price: 399000,
  imageUrl: "/study3.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
  author: "Brad Traversy, Florin Pop",
  rating: 4.7,
  reviews: 11822,
  price: 1899000,
  imageUrl: "/study4.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Modern JavaScript From The Beginning 2.0 (2024)",
  author: "Brad Traversy",
  rating: 4.7,
  reviews: 33992,
  price: 2399000,
  imageUrl: "/study5.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
  author: "Andrei Neagoie, Yihua Zhang",
  rating: 4.6,
  reviews: 28420,
  price: 1799000,
  imageUrl: "/study6.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "The Modern Javascript Bootcamp Course",
  author: "Colt Steele, Stephen Grider",
  rating: 4.7,
  reviews: 12508,
  price: 2199000,
  imageUrl: "/study1.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
  author: "Andrei Neagoie, Yihua Zhang",
  rating: 4.6,
  reviews: 28420,
  price: 1799000,
  imageUrl: "/study2.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "JavaScript Pro: Mastering Advanced Concepts and...",
  author: "Colt Steele",
  rating: 4.8,
  reviews: 754,
  price: 399000,
  imageUrl: "/study3.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "50 Projects In 50 Days - HTML, CSS & JavaScript",
  author: "Brad Traversy, Florin Pop",
  rating: 4.7,
  reviews: 11822,
  price: 1899000,
  imageUrl: "/study4.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Modern JavaScript From The Beginning 2.0 (2024)",
  author: "Brad Traversy",
  rating: 4.7,
  reviews: 33992,
  price: 2399000,
  imageUrl: "/study5.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
},
{
  title: "Complete React Developer (w/ Redux, Hooks, GraphQL)",
  author: "Andrei Neagoie, Yihua Zhang",
  rating: 4.6,
  reviews: 28420,
  price: 1799000,
  imageUrl: "/study6.jpg",
  description:
    "Bạn sẽ hiểu biết về cơ sở hạ tầng toàn cầu của AWS như IAM, S3, CloudFront, EC2, CloudWatch, CLI, Lambda, Route 53, RDS, DynamoDB, ElastiCache, Aurora, VPC, SQ Đạt được kiến thức nền tảng về các phương pháp hay được đề xuất để xây dựng an toàn và đáng tin cậy trên nền tảng điện toán đám mây AWS iểu biết về các nguyên tắc kiến trúc cơ bản và dịch vụ trong việc xây dựng hệ thống ứng dụng trên AWS",
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
