"use client";
import React, { useEffect, useState } from "react";
import { Card, Skeleton, message, Popover } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

interface WebsiteInfo {
  id: string;
  title: string;
  description: string;
  contactEmail: string;
  teacher: string;
}

const UserHomePage = () => {
  const [websiteInfos, setWebsiteInfos] = useState<WebsiteInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  useEffect(() => {
    fetchWebsiteInfos();
  }, []);

  const fetchWebsiteInfos = async () => {
    try {
      const res = await fetch("./api/websiteInfo");
      if (!res.ok) {
        throw new Error("Failed to fetch website info");
      }
      const data = await res.json();
      setWebsiteInfos(data.websiteInfos || []);
    } catch (error) {
      console.error("Error fetching website info:", error);
      message.error("Không thể tải thông tin khóa học");
    } finally {
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - cardsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(websiteInfos.length - cardsPerPage, prevIndex + cardsPerPage)
    );
  };

  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex >= websiteInfos.length - cardsPerPage;

  const renderFullInfo = (info: WebsiteInfo) => (
    <div className="max-w-sm">
      <h3 className="text-lg font-bold mb-2">{info.title}</h3>
      <p className="mb-2">
        <strong>Giáo viên:</strong> {info.teacher}
      </p>
      <p className="mb-2">
        <strong>Mô tả:</strong> {info.description}
      </p>
      <p>
        <strong>Liên hệ:</strong> {info.contactEmail}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Danh sách khóa học
        </h1>
        <Skeleton loading={loading} active paragraph={{ rows: 4 }}>
          {websiteInfos.length > 0 ? (
            <div className="relative">
              <div className="overflow-hidden">
                <div className="flex flex-wrap justify-center">
                  {websiteInfos
                    .slice(currentIndex, currentIndex + cardsPerPage)
                    .map((info) => (
                      <Popover
                        key={info.id}
                        content={renderFullInfo(info)}
                        title="Thông tin chi tiết"
                        trigger="hover"
                        placement="right"
                      >
                        <Card className="w-80 m-2 shadow-lg rounded-xl overflow-hidden flex-shrink-0 cursor-pointer">
                          <h2 className="text-xl font-bold mb-2 text-gray-800">
                            {info.title}
                          </h2>
                          <p className="text-gray-600 mb-2">
                            <strong>Giáo viên:</strong> {info.teacher}
                          </p>
                          <div className="text-sm text-gray-500">
                            Liên hệ: {info.contactEmail}
                          </div>
                        </Card>
                      </Popover>
                    ))}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                {!isFirstPage && (
                  <button
                    onClick={()=>handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full focus:outline-none transition duration-300 ease-in-out hover:opacity-70"
                  >
                    <LeftCircleFilled className="text-4xl text-black" />
                  </button>
                )}
                {!isLastPage && (
                  <button
                    onClick={()=>handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 rounded-full focus:outline-none ml-auto transition duration-300 ease-in-out hover:opacity-70"
                  >
                    <RightCircleFilled className="text-4xl text-black" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Không có thông tin khóa học nào.
            </p>
          )}
        </Skeleton>
      </div>
    </div>
  );
};

export default UserHomePage;
