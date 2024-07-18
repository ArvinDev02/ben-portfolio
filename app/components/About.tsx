"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export const About = () => {

  return (
    <section className='about-section section-wrapper' id="about" data-page="about">
        <div className='container'>
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
                <div>
                    <p>
                        I&apos;m Arvin Garcellano, a Philippines-based front-end website developer. I specialize in Shopify, WordPress, and React development. Let&apos;s work together to bring your digital ideas to life!
                    </p>
                    {/* <p>
                        Outside of work, I enjoy fishing, camping, hiking and drawing.
                    </p> */}
                </div>
                <div>
                    <h4 className='accordion-title'>Experience:</h4>
                    <div className='accordion-content'>
                        6 years of experience in front-end development.
                    </div>
                    <h4 className='accordion-title'>Education:</h4>
                    <div className='accordion-content'>
                        <strong>Bachelor of Science & Technology</strong><br/>
                        2014 - 2018<br/>
                        <strong><a href='https://psu.palawan.edu.ph/' target="_blank">@Palawan State University</a></strong>
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

