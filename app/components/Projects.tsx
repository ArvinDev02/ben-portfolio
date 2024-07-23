import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Projects = () => {
  return (
    <section className='projects-section section-wrapper' id="projects" data-page="projects">
        <div>

        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.5,
                duration: 1.1,
                ease: [0.19, 1, 0.22, 1],
            }}
            viewport={{ once: true }}
        >
            <h2>Featured <br /><span>Website Projects</span></h2>
        </motion.div>
        
        <div className='prj-items-wrapper'> 
            <Link href="https://www.staturagroup.com/"  target="_blank" className='project-info'>
                <h3>Statura</h3>
                <h4>React | NextJS</h4>
            </Link>
            <Link href="https://brancocapital.co.uk/"  target="_blank" className='project-info'>
                <h3>Branco</h3>
                <h4>React | NextJS</h4>
            </Link>
            <Link href="https://villanuage.com/"  target="_blank" className='project-info'>
                <h3>Villa Nuage</h3>
                <h4>React | Hydrogen</h4>
            </Link>
            <Link href="https://novachef.co/"  target="_blank" className='project-info'>
                <h3>Nova Chef</h3>
                <h4>Shopify</h4>
            </Link>
            <Link href="https://onyxlondon.com/"  target="_blank" className='project-info'>
                <h3>Onyx</h3>
                <h4>Shopify</h4>
            </Link>
            <Link href="https://lehlointeriors.com/"  target="_blank" className='project-info'>
                <h3>Lehlo</h3>
                <h4>React | NextJS</h4>
            </Link>
            <Link href="https://bushhallmusic.co.uk/"  target="_blank" className='project-info'>
                <h3>Bush Hall</h3>
                <h4>Shopify</h4>
            </Link>
            <Link href="https://sopher-wedding.vercel.app/"  target="_blank" className='project-info'>
                <h3>Sopher Wedding</h3>
                <h4>HTML | Javascript</h4>
            </Link>
            <Link href="https://angelaspoolresortpalawanofficial.com/"  target="_blank" className='project-info'>
                <h3>Angela&apos;s Pool Resort</h3>
                <h4>Wordpress</h4>
            </Link>
            <Link href="https://reallatinamerica.com/"  target="_blank" className='project-info'>
                <h3>Real Latin America</h3>
                <h4>Shopify</h4>
            </Link>
            <Link href="https://maison-lepoque.com/"  target="_blank" className='project-info'>
                <h3>Maison Lepoque</h3>
                <h4>Shopify</h4>
            </Link>
            <Link href="https://globalcitizenco.com/"  target="_blank" className='project-info'>
                <h3>Global Citizen</h3>
                <h4>Shopify</h4>
            </Link>
            
        </div>
        </div>
    </section>
  )
}
