import React from 'react'
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BannerSlowerWrapper from '../components/BannerSlowerWrapper';
import BannerGlobalTableWrapper from '../components/BannerGlobalTableWrapper';
import BannerGlobalWrapper from '../components/BannerGlobalWrapper';
import BannerGlobalWrapper5 from '../components/BannerGlobalWrapper5';
import Testimonial from '../components/Testimonial';
import ParralaxWrapper from '../components/ParralaxWrapper';
import VisionWrapper from '../components/VisionWrapper';
import Contact from '../components/Contact';
import CheckWrapper from '../components/CheckWrapper';
import ParalaxWrapper2 from '../components/ParalaxWrapper2';
import NewsShelter from '../components/NewsShelter';

const Home = () => {
  return (
      <>
      {/* <Navbar/> */}
       <Banner/>
      <BannerSlowerWrapper />
      <BannerGlobalWrapper />
      <BannerGlobalTableWrapper />
      <BannerGlobalWrapper5 />
      <Testimonial />
      <ParralaxWrapper />
      <VisionWrapper />
      <Contact />
      <ParalaxWrapper2/>
      <CheckWrapper />
      <NewsShelter />
      {/* <Footer/> */}
      </>
  )
}

export default Home