"use client"
import React, { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [text, setText] = useState('');
  const phrases = ["Website developer.", "Graphic Designer.", "Banana."];
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
          timeoutId = setTimeout(type, 1000); // Wait before deleting
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
    <section className='hero-section' id="home">
        <div className='hero-content'>
            <h1>Hello Im Arvin.</h1>
            <h1>Im a {text}</h1>
            <div className='paragraph'>
                Experienced website developer with expertise in React, JavaScript, WordPress, PHP, Hydrogen, and Shopify.
            </div>
        </div>
    </section>
  );
};
