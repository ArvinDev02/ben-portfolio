"use client"
import { useState, useEffect } from "react";
import { HeroSection } from "./components/HeroSection";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import ThemeSwitch from "./components/Themeswitch";


interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Contact',
    page: 'contact',
  },
];

export default function Home() {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].page);

  const handleClick = (page: string) => {
    setActiveItem(page);
    const sectionItem = document.querySelector(`.section-item[data-page="${page}"]`);
    if (sectionItem) {
      const sectionItems = document.querySelectorAll('.section-item');
      sectionItems.forEach(item => item.classList.remove('active'));
      sectionItem.classList.add('active');
    }
  };

  useEffect(() => {
    const sectionItem = document.querySelector(`.section-item[data-page="${activeItem}"]`);
    if (sectionItem) {
      const sectionItems = document.querySelectorAll('.section-item');
      sectionItems.forEach(item => item.classList.remove('active'));
      sectionItem.classList.add('active');
    }
  }, [activeItem]);

  return (
    <main className="">
      <div className="grain"></div>
      <div className="main-header">
        <div className="nav-items">
          {NAV_ITEMS.map((item: NavItem, i: number) => (
            <a
              data-page={item.page}
              key={i}
              className={`nav-item ${activeItem === item.page ? 'active' : ''}`}
              onClick={() => handleClick(item.page)}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="section-item" data-page="home">
        <HeroSection />
      </div>
      <div className="section-item" data-page="projects">
        <Projects />
      </div>
      <div className="section-item" data-page="about">
        <About />
      </div>
      <div className="section-item" data-page="contact">
        <Contact />
      </div>
      {/* <ThemeSwitch /> */}
    </main>
  );
}
