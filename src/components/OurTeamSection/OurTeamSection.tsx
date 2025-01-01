import ourTeamStyles from './OurTeamSection.module.css';
import Image from 'next/image';
import ourTeamImg from '../../../public/our_team (1).png';



interface OurTeamSectionProps {
    className?: string;
}


export const OurTeamSection:React.FC<OurTeamSectionProps> = ({className}) => {
    return (
        <section className={`${className} ${ourTeamStyles.wrapper}`}>
            <div className={ourTeamStyles.leftSide}>
                <h2>Our Team</h2>
                <p>Meet the dedicated team behind TLA Express, 
                    committed to providing exceptional delivery services. 
                    Our team is passionate about delivering your packages with care and efficiency, 
                    ensuring that your orders arrive on time and in perfect condition.
                </p>

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