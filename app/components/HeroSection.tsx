"use client"
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import Navbar from './Navbar';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const phrases = ["Ben!", "a Developer."];
  const speed = 100; // Typing speed in milliseconds
  const deleteSpeed = 100; // Speed to delete text in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';
    let isDeleting = false;
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    const type = () => {
      const currentPhrase = phrases[currentIndex % phrases.length];
      if (!isDeleting) {
        currentText = currentPhrase.substring(0, currentText.length + 1);
        setText(currentText);
        if (currentText === currentPhrase) {
          isDeleting = true;
          timeoutId = setTimeout(type, 3000); // Wait before deleting
        } else {
          timeoutId = setTimeout(type, speed);
        }
      } else {
        currentText = currentPhrase.substring(0, currentText.length - 1);
        setText(currentText);
        if (currentText === '') {
          isDeleting = false;
          currentIndex++;
        }
        timeoutId = setTimeout(type, deleteSpeed);
      }
    };

    type();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className='hero-section section-wrapper' id="home" data-page="home">
        <div className='hero-content'>
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
              <h1>Hello!</h1>
              <h1>I&apos;m {text}</h1>
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

              className='paragraph'
            >
                Experienced website developer with expertise in <span>Shopify</span>, <span>React</span>, and <span>Wordpress</span>.
            </motion.div>
            <div className='scribbles-wrapper'>
            <Image
                className=''
                src="/images/scribbles.gif"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                priority={true}
                alt=""
            />
            <span className='bubble-tot'>I&apos;m a web developer!</span>
            <Image
                className='spider-gif'
                src="/images/spider.gif"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                priority={true}
                alt=""
            />
        </div>
        </div>
    </section>
  );
};
