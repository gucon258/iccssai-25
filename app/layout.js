import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ICCSAI 2026",
  description: "Official website for the 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <MaxWidthWrapper>
          <Navbar />
          {children}
          <Footer />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
