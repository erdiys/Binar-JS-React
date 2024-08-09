import React from "react";

import NavBarTmmin from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import OurServices from "../components/our-services";
import WhyUs from "../components/why-us";
import Testimonial from "../components/testimonial";
import CTABanner from "../components/banner";
import FAQ from "../components/faq";

function Home() {
  return (
    <>
      <NavBarTmmin />

      <Hero button={true} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <FAQ />

      <Footer />
    </>
  );
}

export default Home;
