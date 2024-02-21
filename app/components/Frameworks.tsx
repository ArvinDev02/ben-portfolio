import React from 'react'
import { motion } from "framer-motion";

export const Frameworks = () => {
  return (
    <section className='frameworks-section'>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }} 
        
        className="icon-shopify"></motion.div> 
        <motion.div
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.2,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }} 
        
        className="icon-jquery"></motion.div>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }} 
        
        className="icon-javascript"></motion.div>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.4,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }} 
        
        className="icon-tailwindcss"></motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.5,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }}
        
        className="icon-react"></motion.div>
        <motion.div
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.6,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }}
        
        className="icon-html-five"></motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.7,
					duration: 1.1,
					ease: [0.19, 1, 0.22, 1],
				}}
				viewport={{ once: true }}
        
        className="icon-css3"></motion.div>
    </section>
  )
}
