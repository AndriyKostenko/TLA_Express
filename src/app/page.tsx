import { Header } from '../components/Header/Header';
import { HeroSection } from '../components/HeroSection/HeroSection';
import { AboutSection } from '../components/AboutSection/AboutSection';
import { OurTeamSection } from '../components/OurTeamSection/OurTeamSection';
import { ApplySection } from '@/components/ApplySection/ApplySection';
import { Footer } from '../components/Footer/Footer';




export default function Home() {
	return (
		<>
			<Header/>
			<main>
				<HeroSection/>
				<AboutSection/> 
				<OurTeamSection/>
				<ApplySection/>
			</main>  
			<Footer/>
		</>
	);
}
