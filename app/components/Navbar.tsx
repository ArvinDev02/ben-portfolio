"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoimg from '../../public/images/my-logo.png';
import ThemeSwitch from './Themeswitch';

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

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('');

  const handleClick = (page: any) => {
    setActiveItem(page);
  };

  return (
    <div className="main-header">
      <div className="nav-items">
        {NAV_ITEMS.map((item: NavItem, i: number) => (
          <a
            href={`#${item.page}`}
            key={i}
            className={`nav-item ${activeItem === item.page ? 'active' : ''}`}
            onClick={() => handleClick(item.page)}
          >
            <span>{item.label}</span>
          </a>
        ))}
        <div className='theme-switch'>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
