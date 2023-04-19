import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://www.bigwinmm.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                Built and Managed by
                <span className={styles.logo}>
                    <Image src="/bigwin-logo-black.png" alt="Big Win Logo" width={72} height={72} />
                </span>
            </a>
        </footer>
    )
}

export default Footer;