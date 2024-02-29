import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Check if the theme is dark and conditionally add the "dark-mode" class
  const theme = "dark"; // Replace this with your logic to determine the theme
  const bodyClass = theme === "dark" ? "dark-mode" : "";

  return (
    <html lang="en">
      <body className={`${inter.className} ${bodyClass}`}>
        <Provider>
          <Navbar/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
