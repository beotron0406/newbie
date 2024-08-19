"use client";
import CourseCard from "@/components/CourseCard";
import { Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { CarouselRef } from "antd/es/carousel";
import CustomCarousel from "@/components/CustomCarousel";
import CourseCardTV from "@/components/CourseCardTV";
export default function Home() {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const courses = [
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
  const coursesTV = [
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

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="w-full bg-white py-8">
      <div className="flex items-center mb-6 pl-2">
        <div className="w-12 h-12 flex items-center justify-center ml-28 bg-black rounded-full">
          <span className="text-lg font-bold text-white">NH</span>
        </div>
        <div className="ml-8">
          <h1 className="text-xl font-bold">Chào mừng Nguyễn Trung trở lại!</h1>
          <Button type="link" className="text-blue-600">
            Add occupation and interests
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative bg-white">
        <div className="mb-4">
          <p className="font-bold text-4xl">Lĩnh vực sẽ học tiếp theo</p>
          <p className="text-2xl">
            Vì bạn đã xem{" "}
            <span className="text-blue-500 underline">
              “AWS Cloud cơ bản (Tiếng Việt)”
            </span>
          </p>
        </div>
        <Carousel className="bg-white" ref={carouselRef} {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="px-2">
              <CourseCard
                title={course.title}
                author={course.author}
                rating={course.rating}
                reviews={course.reviews}
                price={course.price}
                imageUrl={course.imageUrl}
                description={course.description}
              />
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

      <div className="max-w-7xl mx-auto p-5 px-4 relative bg-white">
        <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4">
            Các khóa học hàng đầu về Tiếng Việt
          </h1>
          <div className="p-8">
        <main>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {coursesTV.map((course, index) => (
            <CourseCardTV key={index} {...course} />
          ))}
        </div>
        </main>
      </div>
        </div>
      </div>
      
    </div>
  );
}
