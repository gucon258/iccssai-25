import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ICCSAI 2026 | IEEE International Conference on Communication, Security, and AI",
  description: "Official website for the 2026 IEEE 4th International Conference on Communication, Security, and Artificial Intelligence (ICCSAI-2026) at Galgotias University, Greater Noida, India.",
  keywords: "ICCSAI, IEEE, conference, artificial intelligence, communication, security, computer science, Galgotias University, 2026",
  authors: [{ name: "Galgotias University" }],
  openGraph: {
    title: "ICCSAI 2026 | IEEE International Conference",
    description: "Join us at ICCSAI-2026 for cutting-edge research in Communication, Security, and AI.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <MaxWidthWrapper>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </MaxWidthWrapper>
      </body>
    </html>
  );
}
