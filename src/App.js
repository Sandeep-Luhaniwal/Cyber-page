import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './compoments/Nav';
import './assets/css/Root.css';
import Misson from './compoments/Misson';
import HeroSection from './compoments/HeroSection';
import Partners from './compoments/Partners';
import Algo from './compoments/Algo';
import Wedo from './compoments/Wedo';
import Work from './compoments/Work';
import SldierCrad from './compoments/SldierCrad';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './compoments/Footer';
import RoadMap from './compoments/RoadMap';
import AccordionSlide from './compoments/AccordionSlide';
import Preloder from './compoments/Preloder';
import { useEffect } from 'react';
import BackToTop from './compoments/BackToTop';


function App() {
  useEffect(() => {
    const preloader = document.getElementById('preloader')
    setTimeout(() => {
      preloader.classList.add('d-none')
      preloader.classList.add('pointer-event-none')
      document.body.classList.remove('overflow-hidden')
    }, 2500)
    document.body.classList.add('overflow-hidden')

  }, []);
  return (
    <>
      <Preloder />
      <div className='bg_black ff_primary'>
        <Nav />
        <HeroSection />
        <Misson />
        <Partners />
        <Algo />
        <Wedo />
        <Work />
        <SldierCrad />
        <RoadMap />
        <AccordionSlide />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
