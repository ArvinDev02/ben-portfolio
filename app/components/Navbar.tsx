"use client"
import React, { useState } from 'react'
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

export default Navbar