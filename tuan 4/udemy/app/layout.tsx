import Navbar from "../components/Navbar";
import CourseCarousel  from "./../components/CourseCard";
import "./globals.css";
import Hello from "../components/Hello";
import CourseListTV from "../components/CourseListTV";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <Hello/>
        <CourseCarousel  />
        <CourseListTV/>
        <main>{children}</main>
      </body>
    </html>
  );
}
