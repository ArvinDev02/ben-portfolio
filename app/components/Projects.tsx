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
            <h2>Featured <span>Projects</span></h2>
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
                <Link href="" className='project-img-wrap'>
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
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet erat a nisi malesuada varius.
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
                <Link href="" className='project-img-wrap'>
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
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet erat a nisi malesuada varius.
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
                <Link href="" className='project-img-wrap'>
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
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                </div>
            </motion.div>
        </div>
    </section>
  )
}
