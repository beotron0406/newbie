"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BellOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  DownOutlined,
  UserOutlined,
  CrownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, MenuProps, Space, Tooltip } from "antd";

const categoryItems: MenuProps["items"] = [
  {
    key: "1",
    label: "Phát triển",
  },
  {
    key: "2",
    label: "Kinh doanh",
  },
  {
    key: "3",
    label: "Tài chính & Kế toán",
  },
  {
    key: "4",
    label: "CNTT & Phần mềm",
  },
  {
    key: "5",
    label: "Năng suất văn phòng",
  },
  {
    key: "6",
    label: "Phát triển cá nhân",
  },
  {
    key: "7",
    label: "Thiết kế",
  },
  {
    key: "8",
    label: "Marketing",
  },
  {
    key: "9",
    label: "Sức khỏe & Thể dục",
  },
  {
    key: "10",
    label: "Âm nhạc",
  },
];
interface Category {
  name: string;
  subCategories?: string[];
}
const categories: Category[] = [
  {
    name: "Phát triển",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Kinh doanh",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Tài chính & Kế toán",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "CNTT & Phần mềm",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Năng suất văn phòng",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Phát triển cá nhân",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Thiết kế",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Marketing",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Sức khỏe & Thể dục",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
  {
    name: "Âm nhạc",
    subCategories: [
      "Phát triển web",
      "Phát triển ứng dụng di động",
      "Ngôn ngữ lập trình",
      "Phát triển trò chơi",
      "Thiết kế & Phát triển cơ sở dữ liệu",
      "Kiểm tra phần mềm",
    ],
  },
];

const Navbar: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<"user" | "admin" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/checkAuth", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(data.isLoggedIn);
          setUserRole(data.user?.role);
        } else {
          setIsLoggedIn(false);
          setUserRole(null);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsLoggedIn(false);
        setUserRole(null);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSearch = () => {
    if (searchValue.trim()) {
      console.log("Searching for:", searchValue);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        setIsLoggedIn(false);
        setUserRole(null);
        router.push("/");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const userMenuItems: MenuProps["items"] = [
    {
      key: "1",
      label: "Thông tin cá nhân",
      onClick: () => router.push("/profile"),
    },
    {
      key: "2",
      label: "Đăng xuất",
      onClick: () => handleLogout,
    },
  ];

  return (
    <header>
      <nav className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-lg">
        <div className="flex items-center space-x-4 px-3 py-1">
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href={
                isLoggedIn && userRole === "admin"
                  ? "/admin-home-page"
                  : "/user-home-page"
              }
            >
              <Image
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="Udemy"
                width={91}
                height={34}
              />
            </Link>
          </div>
          <Dropdown menu={{ items: categoryItems }} trigger={["hover"]}>
            <div className="text-sm font-semibold hover:text-blue-500 transition-colors cursor-pointer">
              <Space>
                Thể loại
                <DownOutlined />
              </Space>
            </div>
          </Dropdown>
          <div className="flex justify-center items-center">
            <div className="relative">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Tìm kiếm nội dung bất kỳ"
                className="rounded-full pl-10 pr-4 py-2 w-[550px] border-2 border-gray-400 bg-gray-100 placeholder-gray-600 focus:outline-none"
              />
              <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Button
                  onClick={() => handleSearch}
                  disabled={!searchValue.trim()}
                  type="text"
                  icon={<SearchOutlined />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Udemy Business",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/business"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Udemy Business
            </Link>
          </Dropdown>

          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Giảng dạy trên Udemy",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/teach"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Giảng dạy trên Udemy
            </Link>
          </Dropdown>

          <Dropdown
            menu={{
              items: [
                {
                  key: "1",
                  label: "Học tập",
                },
              ],
            }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
            trigger={["hover"]}
          >
            <Link
              href="/learning"
              className="text-sm font-semibold hover:text-blue-500 transition-colors"
            >
              Học tập
            </Link>
          </Dropdown>

          <div className="border-0">
            <HeartOutlined className="text-xl" />
          </div>
          <div className="border-0">
            <ShoppingCartOutlined className="text-xl" />
          </div>
          <div className="border-0">
            <BellOutlined className="text-xl" />
          </div>

          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                <Button
                  icon={
                    userRole === "admin" ? <CrownOutlined /> : <UserOutlined />
                  }
                  shape="circle"
                />
              </Dropdown>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link href="/login">
                <div className="px-4 py-2 text-sm font-semibold text-black border rounded hover:bg-gray-100 transition-colors">
                  Đăng nhập
                </div>
              </Link>
              <Link href="/signup">
                <div className="px-4 py-2 text-sm font-semibold text-white bg-black border border-black rounded hover:bg-gray-800 transition-colors">
                  Đăng ký
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="relative flex justify-between px-10 py-3 bg-white border-b">
        {categories.map((category) => (
          <div key={category.name} className="group relative">
            <Tooltip
              title={
                <div className="bg-black text-white py-3 px-4 fixed inset-x-0 bottom w-screen">
                  <ul className="flex justify-between">
                    {category.subCategories?.map((sub, index) => (
                      <li key={index} className="px-2">
                        <Link
                          href={`/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                        >
                          <span className="block px-1 py-1 hover:text-blue-500 transition-colors">
                            {sub}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              }
              placement="bottom"
              trigger="hover"
              className="z-50"
            >
              <span className="text-sm font-semibold text-gray-700 hover:text-blue-500 transition-colors cursor-pointer">
                {category.name}
              </span>
            </Tooltip>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
