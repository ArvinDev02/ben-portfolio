"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import arrowUp from "../public/images/arrow-up.png";
import { Frameworks } from "./components/Frameworks";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="">
      <HeroSection />
      <Frameworks />
      <Projects />
      <About />
      <Contact />
      <button
        className={`back-to-top ${isScrolled ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <Image
          className=""
          src={arrowUp}
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
          priority={true}
          alt=""
        />
      </button>
    </main>
  );
}


