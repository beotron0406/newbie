import { useState } from "react";
import Image from "next/image";
import { Rate } from "antd";

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

  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };

  const formattedPrice = new Intl.NumberFormat("vi-VN").format(price);

  return (
    <div
      className="relative flex cursor-pointer m-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-52">
        <div className="relative h-28 mb-2">
          <Image alt={title} src={imageUrl} layout="fill" objectFit="cover" className="rounded" />
        </div>
        <h2 className="font-bold text-sm leading-tight mb-1">{title}</h2>
        <p className="text-xs text-gray-500 mb-1">{author}</p>
        <div className="flex items-center mb-1">
          <span className="text-gray-800 font-bold text-sm mr-1">{rating.toFixed(1)}</span>
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

export default CourseCard;
