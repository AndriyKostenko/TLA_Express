import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';




export default function Home() {
	return (
		<div className="container">

			<Header className="container"/>
		
			<main>
				<HeroSection/>
				<AboutSection/> 
				{/* <OurServicesSection/>
				<FormSection/> */}
			</main>  
			
			{/* <Footer/> */}

		</div>
	);
}
