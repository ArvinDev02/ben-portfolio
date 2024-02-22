import React from 'react'
import Link from 'next/link'

export const Contact = () => {
  return (
    <section id="contact" className='contact-section'>
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
    </section>
  )
}
