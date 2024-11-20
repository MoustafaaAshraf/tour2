import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import PopularTours from '../components/PopularTours';
import Testimonials from '../components/Testimonials';
import BecomeGuide from '../components/BecomeGuide';

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <PopularTours />
      <Testimonials />
      <BecomeGuide />
    </>
  );
}