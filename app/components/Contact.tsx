import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className='contact-section'>
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
            <h1>Contact Me</h1>
            <ul>
                <li>
                    <Link href="https://www.instagram.com/arvingarcellano/" target='_blank'>
                        Instagram
                    </Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/arvin-garcellano-a81257282/" target='_blank'>
                        LinkedIn
                    </Link>
                </li>
                <li>
                    <Link href="mailto:garcellanoarvin@gmail.com">
                        Email me
                    </Link>
                </li>
            </ul>
        </motion.div>
    </section>
  )
}
