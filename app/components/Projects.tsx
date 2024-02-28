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
    <section className='projects-section' id="projects">
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
            <h2>Featured <span>Website Projects</span></h2>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                delay: 0.5,
                duration: 1.2,
                ease: [0.19, 1, 0.22, 1],
            }}

            className='projects-wrapper'
        >

        <Swiper
                spaceBetween={40}   
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className='mySwiper SlideShowText'
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                speed={1500} 
                loop={false}
                autoplay={{
                    delay: 10000, 
                    disableOnInteraction: false,
                }}
                centeredSlides={true} // Enable center mode
                initialSlide={1}
                slidesPerView={1.4} // Adjust the number of slides per view (1.2 means 1 fully visible + 0.1 on each side)
                navigation={{
                    nextEl: '.swiper2-button-next',
                    prevEl: '.swiper2-button-prev',
                }}
                breakpoints={{
                    768: {
                        spaceBetween: 100, 
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3.3,
                        centeredSlides: false, 
                        spaceBetween: 100, 
                    },
                    1200: {
                        slidesPerView: 3.6,
                        spaceBetween: 100, 
                    },
                }}
            >
                    
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject1.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>1</h2>
                        <div className='project-info'>
                            <h3>Statura</h3>
                            <h4>React | NextJS</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject2.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>2</h2>
                        <div className='project-info'>
                            <h3>Nova Chef</h3>
                            <h4>Shopify</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject3.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>3</h2>
                        <div className='project-info'>
                            <h3>Bush Hall</h3>
                            <h4>Shopify</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject4.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>4</h2>
                        <div className='project-info'>
                            <h3>Branco</h3>
                            <h4>Shopify</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject5.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>5</h2>
                        <div className='project-info'>
                            <h3>Villa Nuage</h3>
                            <h4>React | Hydrogen</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject6.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>6</h2>
                        <div className='project-info'>
                            <h3>Lehlo</h3>
                            <h4>React | Hydrogen</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="" className="project-item-contaner">
                        <Image
                            className="proj-main-img"
                            src="/images/imgproject7.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h2>7</h2>
                        <div className='project-info'>
                            <h3>Onyx</h3>
                            <h4>Shopify</h4>
                        </div>
                        <Image
                            className="arrow-project"
                            src="/images/arrow-project.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                    </Link>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    </section>
  )
}
