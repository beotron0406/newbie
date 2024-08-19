import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import Image from 'next/image';

const CustomCarousel = () => {
  return (
    <div className="relative w-[1300px] h-[400px] mx-auto">
      <Carousel
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        autoplay
        dots={false}
        style={{ width: '100%', height: '100%' }} 
      >
        <div className="relative w-full h-full">
          <Image 
            src="/study1.jpg" 
            alt="Study Image 1" 
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-full">
          <Image 
            src="/study2.jpg" 
            alt="Study Image 2" 
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-full">
          <Image 
            src="/study3.jpg" 
            alt="Study Image 3" 
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </Carousel>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <LeftOutlined className="text-xl text-black cursor-pointer" />
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <RightOutlined className="text-xl text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default CustomCarousel;
