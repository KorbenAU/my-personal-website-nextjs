import HeroSectionBackground from '../components/HeroSection/HeroSectionBackground';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/HeroSection/HeroSection';

export default function Home() {
    return (
        <>
            <div className={'h-screen w-screen'}>
                <HeroSectionBackground/>
                <HeroSection/>
                <NavBar/>
            </div>
        </>
    );
}
