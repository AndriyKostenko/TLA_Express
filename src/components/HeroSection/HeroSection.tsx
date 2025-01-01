"use client";

import styles from './HeroSection.module.css';
import buttonStyles from '../Button/Button.module.css';
import Image from 'next/image';
import heroImage2 from "../../../public/png_car.png";
import heroImage3 from "../../../public/amazon-delivery-hero-section-for-website--the-bott.png";
import heroImage1 from "../../../public/Vector 4.png";
import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';



interface HeroSectionProps {
    className?: string;
}


export const HeroSection: React.FC<HeroSectionProps> = ({className}) => {
    const words = ['Seamless', 'Last Mile', 'Quick', 'Reliable'];

    const [showHeroImage2 ,setShowHeroImage2] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    // add a delay to show the second hero image
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeroImage2(true);
        }, 500); // 0.5 second delay

        return () => clearTimeout(timer);
    }, []);

    // change the word every 3 seconds
    useEffect(() => {
        const wordTimer = setTimeout(() => {
            setWordIndex((wordIndex + 1) % words.length);
        }, 3000); // 3 second delay

        return () => clearTimeout(wordTimer);
    }, [wordIndex]);



    return (
        <section className={`${className} ${styles.heroSection}`}>
            <div className={styles.heroLeft}>
                <h1>
                    Experience <span>{words[wordIndex]}</span> <br></br>Delivery with us. 
                </h1>
                <br/>
                <div className={styles.heroButton}>
                    <Button className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`} title='Apply Now'/>
                </div>
                
            </div>
    
            <div className={styles.heroRight}>
                <div className={`${styles.heroImage} ${styles.heroImage1}`}>
                    <Image src={heroImage1} alt="Hero Image 1" fill style={{objectFit: 'contain'}}/>
                </div>
                <div className={`${styles.heroImage} ${styles.heroImage2} ${showHeroImage2 ? styles.showHeroImage2 : ''}`}>
                    <Image src={heroImage2} alt="Hero Image 2" fill style={{objectFit: 'contain'}}/>
                </div>
                <div className={`${styles.heroImage} ${styles.heroImage3}`}>
                    <Image src={heroImage3} alt="Hero Image 3" fill style={{objectFit: 'contain'}}/>
                </div>
            </div>
      </section>
    )
}