"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

export const Contact = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e: any) => {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setImagePosition({ x, y });
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1,
          duration: 1.1,
          ease: [0.19, 1, 0.22, 1],
        }}
        viewport={{ once: true }}
      >
        <h1>Contact Me!</h1>
        <ul>
          <li>
            <div>
                <Link href="https://www.instagram.com/arvingarcellano/" target="_blank">
                <span onMouseMove={handleMouseMove}>Instagram</span>
                </Link>
                <motion.div
                className='pointer-img-wrap'
                style={{
                    position: 'absolute',
                    top: imagePosition.y,
                    left: imagePosition.x,
                }}
                >
                <Image
                    ref={imageRef}
                    src="/images/contact1.gif"
                    fill
                    sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                    priority={true}
                    alt=""
                />
                </motion.div>
            </div>
          </li>
          <li>
            <div>
            <Link href="https://www.linkedin.com/in/arvin-garcellano-a81257282/" target="_blank">
              <span onMouseMove={handleMouseMove}>LinkedIn</span>
            </Link>
            <motion.div
            className='pointer-img-wrap'
              style={{
                position: 'absolute',
                top: imagePosition.y,
                left: imagePosition.x,
              }}
            >
              <Image
                ref={imageRef}
                src="/images/contact2.gif"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                priority={true}
                alt=""
              />
            </motion.div>
            </div>
          </li>
          <li>
          <div>
            <Link href="mailto:garcellanoarvin@gmail.com" target="_blank">
              <span onMouseMove={handleMouseMove}>Email</span>
            </Link>
            <motion.div
            className='pointer-img-wrap'
              style={{
                position: 'absolute',
                top: imagePosition.y,
                left: imagePosition.x,
              }}
            >
              <Image
                ref={imageRef}
                src="/images/contact3.gif"
                fill
                sizes="(max-width: 768px) 200px, (max-width: 1024px) 500px, 500px"
                priority={true}
                alt=""
              />
            </motion.div>
            </div>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
