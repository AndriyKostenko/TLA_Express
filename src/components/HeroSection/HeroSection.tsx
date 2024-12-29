"use client";

import styles from './HeroSection.module.css';
import buttonStyles from '../Button/Button.module.css';
import Image from 'next/image';
import heroImage2 from "../../../public/png_car.png";
import heroImage3 from "../../../public/amazon-delivery-hero-section-for-website--the-bott.png";
import heroImage1 from "../../../public/Vector 4.png";
import { Button } from '../Button/Button';



interface HeroSectionProps {
    className?: string;
}


export const HeroSection: React.FC<HeroSectionProps> = ({className}) => {


    return (
        <section className={`${className} ${styles.heroSection}`}>
            <div className={styles.heroLeft}>
                <h1>
                    TLA Express Inc.
                   
                </h1>
                <br/>
                <h2>
                    Delivery Service Partner with Amazon.
                </h2>
                <br />
                <p>
                    We are the last mile delivery company operating in Calgary. 
                    Our experienced team provides positive last mile delivery experience 
                    with on time delivery and great customer service.
                </p>
                <div className={styles.heroButton}>
                    <Button className={`${buttonStyles.mainButton} ${buttonStyles.mainButtonGreen}`} title='Apply Now'/>
                </div>
                
            </div>
    
            <div className={styles.heroRight}>
                <div className={`${styles.heroImage} ${styles.heroImage1}`}>
                    <Image src={heroImage1} alt="Hero Image 1" fill style={{objectFit: 'contain'}}/>
                </div>
                <div className={`${styles.heroImage} ${styles.heroImage2} `}>
                    <Image src={heroImage2} alt="Hero Image 2" fill style={{objectFit: 'contain'}}/>
                </div>
                <div className={`${styles.heroImage} ${styles.heroImage3}`}>
                    <Image src={heroImage3} alt="Hero Image 3" fill style={{objectFit: 'contain'}}/>
                </div>
            </div>
      </section>
    )
}