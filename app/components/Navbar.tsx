"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoimg from '../../public/images/my-logo.png';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Projects',
    page: 'projects',
  },
  {
    label: 'About',
    page: 'about',
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top + scrollY;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveItem(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="main-header">
      <div className="header-logo">
        <Link href="/">
          <Image
            className=""
            src={logoimg}
            fill
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
            priority={true}
            alt=""
          />
        </Link>
      </div>
      <div className="nav-items">
        {NAV_ITEMS.map((item: NavItem, i: number) => (
          <a
            href={`#${item.page}`}
            key={i}
            className={activeItem === item.page ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
