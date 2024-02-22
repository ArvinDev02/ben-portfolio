import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

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
        <div className='projects-wrapper'>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 0.7,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item'
            >
                <Link href="https://statura.vercel.app/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject1.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Statura</h3>
                    <h4>React | NextJS</h4>
                    <span>
                        Statura is an independent provider of high-value Corporate, Trust and Private client services.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 0.9,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item right'
            >
                <Link href="https://novachef.co/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject2.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Nova Chef</h3>
                    <h4>Shopify</h4>
                    <span>
                        HIGH-END RESTAURANT MEALS WITHOUT A KITCHEN OR CHEFS
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 1.1,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item'
            >
                <Link href="https://bushhallmusic.co.uk/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject3.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Bush Hall</h3>
                    <h4>Shopify</h4>
                    <span>
                    Originally built by a publisher in 1904, one of a trio of London dance halls he built for each of his daughters, Bush Hall is the only surviving of the three.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 1.1,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item right'
            >
                <Link href="https://bushhallmusic.co.uk/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject5.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Villa Nuage</h3>
                    <h4>React | Hydrogen</h4>
                    <span>
                    Providing spacious accommodation for up to 13 people, Villa Nuage is an imposing, contemporary, south facing 800m2 luxury French villa in a totally private, verdant setting with stunning, uninterrupted views of the Mediterranean Sea and Monaco, located under ten minutes drive from Monte Carlo and all of the magic it has to offer.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 1.1,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item'
            >
                <Link href="https://bushhallmusic.co.uk/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject4.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Branco</h3>
                    <h4>Shopify</h4>
                    <span>
                        We create authentic and sustainable spaces that enhance your lifestyle.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 1.1,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item right'
            >
                <Link href="https://bushhallmusic.co.uk/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject7.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Onyx</h3>
                    <h4>Shopify</h4>
                    <span>
                        Onyx offers a multi-disciplinary service, from initial concept, planning permissions, full construction packages, project management along with interior design packages for both residential and commercial clients in Sheen, Richmond, Wimbledon.
                    </span>
                </div>
            </motion.div>
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{
                     delay: 1.1,
                     duration: 1.1,
                     ease: [0.19, 1, 0.22, 1],
                 }}
                 viewport={{ once: true }}
            
                className='project-item'
            >
                <Link href="https://bushhallmusic.co.uk/" className='project-img-wrap' target='_blank'>
                    <Image
                        className="image-background"
                        src="/images/frame-background.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                    <Image
                        className="proj-main-img"
                        src="/images/imgproject6.png"
                        fill
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                        priority={true}
                        alt=""
                    />
                </Link>
                <div className='project-info'>
                    <h3>Lehlo</h3>
                    <h4>React | Hydrogen</h4>
                    <span>
                        Lehlo Interiors is a culmination of a childhood dream. 
                    </span>
                </div>
            </motion.div>
        </div>
    </section>
  )
}
