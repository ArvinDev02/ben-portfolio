"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export const About = () => {
  // State to keep track of the active accordion item
  const [activeItem, setActiveItem] = useState(null);

  // Function to toggle accordion item's active state
  const toggleActiveItem = (item: any) => {
    if (activeItem === item) {
      // If the item is already active, set it to null to collapse it
      setActiveItem(null);
    } else {
      // Else set the item as active
      setActiveItem(item);
    }
  };

  return (
    <section className='about-section' id="about">
        <div className='container'>
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 1,
                    duration: 1.1,
                    ease: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className='profile-img-wrapper'
            >
                <Image
                    src="/images/profile-img2.png"
                    fill
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                    priority={true}
                    alt=""
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 1,
                    duration: 1.1,
                    ease: [0.19, 1, 0.22, 1],
                }}
                viewport={{ once: true }}
                className='info'
            >
                <h3>Oh Hello There!</h3>
                <p>
                    I'm Arvin Garcellano, a Philippines-based front-end website developer and graphic designer. I specialize in crafting visually stunning websites with seamless user experiences. Let's work together to bring your digital ideas to life!
                </p>
                <p>
                    Outside of work, I enjoy fishing, camping, hiking and drawing.
                </p>
                <div className='accordion-wrapper'>
                    <div className={`accordion-item ${activeItem === 'location' ? 'active' : ''}`} onClick={() => toggleActiveItem('location')}>
                        <Image
                            className='accordion-arrow'
                            src="/images/arrow-down.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h4 className='accordion-title'>Location</h4>
                        <div className='accordion-content'>
                            Puerto Princesa, Palawan,<br/> Philippines
                        </div>
                    </div>
                    <div className={`accordion-item ${activeItem === 'education' ? 'active' : ''}`} onClick={() => toggleActiveItem('education')}>
                        <Image
                            className='accordion-arrow'
                            src="/images/arrow-down.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h4 className='accordion-title'>Education</h4>
                        <div className='accordion-content'>
                            Bachelor of Science & Technology<br/>
                            2014 - 2018<br/>
                            @Palawan State University
                        </div>
                    </div>
                    <div className={`accordion-item ${activeItem === 'experience' ? 'active' : ''}`} onClick={() => toggleActiveItem('experience')}>
                        <Image
                            className='accordion-arrow'
                            src="/images/arrow-down.png"
                            fill
                            sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                            priority={true}
                            alt=""
                        />
                        <h4 className='accordion-title'>Experience</h4>
                        <div className='accordion-content'>
                            6 years
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

