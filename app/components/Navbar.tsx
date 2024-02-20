"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";
import logoimg from "../../public/images/my-logo.png"
import Image from 'next/image';

interface NavItem {
    label:  string,
    page: string,
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Projects",
        page: "projects",
    },
    {
        label: "Resume",
        page: "resume",
    }
]

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const rotationAngle = window.scrollY / 10; // Adjust speed of rotation as per requirement
            const logo = document.querySelector('.header-logo img');
            if (logo) {
                const logoHeight = logo.getBoundingClientRect().height;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomReached = window.scrollY + window.innerHeight >= pageHeight;
                if (bottomReached) {
                    logo.style.transform = `rotate(360deg)`;
                } else {
                    logo.style.transform = `rotate(${rotationAngle}deg)`;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='main-header'>
            <div className='header-logo'>
            <Link href='/'>
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
            <div className='nav-items'>
                {NAV_ITEMS.map((item: any, i:number) => {
                    return (
                        <a key={i}>
                            {item.label}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar;
