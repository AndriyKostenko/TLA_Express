import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';




export default function Home() {
	return (
		<div className="grid-container">

			<Header className="header"/>
		
			<main>
				<HeroSection className="hero"/>
				<AboutSection className="about"/> 
				{/* <OurServicesSection/>
				<FormSection/> */}
			</main>  
			
			{/* <Footer/> */}

		</div>
	);
}
