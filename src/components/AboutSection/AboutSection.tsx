import aboutImg from "../../../public/delivery-car-van-modified.png";
import aboutStyles from "./AboutSection.module.css";
import Image from 'next/image';
import icon1 from "../../../public/icon1.png";
import icon2 from "../../../public/icon2.png";


interface AboutSectionProps {
    className?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({className}) => {
    return (
        <section className={`${className}  ${aboutStyles.aboutSection}`} id="about">
                <div className={aboutStyles.leftSide} >
                    <div className={aboutStyles.mainImageContainer}>
                        <Image src={aboutImg} 
                                alt="About Us" 
                                fill 
                                style={{objectFit: 'contain'}} 
                                className={aboutStyles.mainImage} />
                    </div>
                    
                </div>

                <div className={aboutStyles.rightSide}>
                    <h2>Our Partnership with Amazaon for Last Mile Solutions</h2>
                    <p>At TLA Express, we take pride in our collaboration with Amazon, 
                        ensuring timely and efficient deliveries. 
                        Our dedicated team is committed to providing exceptional service at every step of 
                        the delivery process. 
                    </p>

                    <div className={aboutStyles.leftGroup}>
                        <div className={aboutStyles.aboutImage}>
                            <Image src={icon1} alt="About Us" fill style={{objectFit: 'contain'}} />
                        </div>
                        
                        <h3>Reliable Service</h3>
                        <p>Count on us for dependable deliveries that meet your expectations every time.</p>
                    </div>

                    <div className={aboutStyles.rightGroup}>
                        <div className={aboutStyles.aboutImage}>
                            <Image src={icon2} alt="About Us" fill style={{objectFit: 'contain'}} />
                        </div>
                        
                        <h3>Customer Focused</h3>
                        <p>We prioritize your satisfaction, ensuring a seamless delivery experience with every order.</p>
                    </div>
                </div>
        </section>
    )
}