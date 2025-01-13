'use client';

import ourTeamStyles from './OurTeamSection.module.css';
import Image from 'next/image';
import ourTeamImg from '../../../public/our_team (1).png';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



interface OurTeamSectionProps {
    className?: string;
}


export const OurTeamSection:React.FC<OurTeamSectionProps> = ({className}) => {
    return (
        <section className={`${className} ${ourTeamStyles.wrapper}`} id='our-team'>
            <div className={ourTeamStyles.leftSide}>
                <h2>Our Team</h2>
                <p>Meet the dedicated team behind TLA Express, 
                    committed to providing exceptional delivery services. 
                    Our team is passionate about delivering your packages with care and efficiency, 
                    ensuring that your orders arrive on time and in perfect condition.
                </p>

                <div className={ourTeamStyles.lottieContainer}>
                    <DotLottieReact src="https://lottie.host/9e80d2d6-b55f-4600-97c3-acf029f4f889/bceQ3FrD7a.json"
                                    speed={0.8}
                                    loop
                                    autoplay
                                    style={{width: '150px', height: '150px'}}
                                    /> 
                </div>

  

            </div>

            <div className={ourTeamStyles.rightSide}>
                <div className={ourTeamStyles.imageContainer}>
                        <Image src={ourTeamImg} 
                                alt="Our Team" 
                                fill 
                                style={{objectFit: 'contain'}}/>
                </div>



                

            </div>
        </section>
    )
}