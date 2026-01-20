import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import AutoSlider from '../components/AutoSlider';
import Plans from '../components/Plans';
import OurAdvantage from '../components/OurAdvantage';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* 
        Hero is sticky top-0. 
        Main content must have z-10 and background to scroll OVER the hero.
      */}
      <main className="relative z-10 bg-none w-full flex flex-col items-center -mt-4">
        <HowItWorks />
        <AutoSlider />
        <Plans />
        <OurAdvantage />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;