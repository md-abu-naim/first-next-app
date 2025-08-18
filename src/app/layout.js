import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Navber";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Learning Next.js",
//   description: "This site is created by me for learnign purpos",
// };
export const metadata = {
  title: {
    default: 'Learining Next.js',
    template: '%s | Learning Next.js'
  },
  description: "This site is created by me for learnign purpos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navber />
        {children}
        <Footer />
      </body>
    </html>
  );
}
