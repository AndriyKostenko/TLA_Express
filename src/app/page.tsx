import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { OurTeamSection } from '../components/OurTeamSection/OurTeamSection';




export default function Home() {
	return (
		<div className="container">

			<Header className="container"/>
		
			<main>
				<HeroSection/>
				<AboutSection/> 
				<OurTeamSection/>
				{/* <FormSection/> */}
			</main>  
			
			{/* <Footer/> */}

		</div>
	);
}
