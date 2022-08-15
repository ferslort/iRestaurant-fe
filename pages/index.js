import { useEffect } from "react";
import PricingT3 from "../component/pricingTable-3";
import AboutUs3 from "../element/aboutUs-3";
import GetInTouch3 from "../element/get-in-touch";
import Newsletter3 from "../element/newsletter-3";
import Features3 from "../element/our-features-3";
import Projects3 from "../element/Projects-3";
import Service3 from "../element/service-3";
import Slider3 from "../element/slider-3";
import Team3 from "../element/team-3";
import Testimonial3 from "../element/testimonial-3";
import Blog3 from "./../element/blog-3";
import Clients3 from "./../element/clients-3";
import Footer3 from "./../layout/footer-3";
import Header3 from "./../layout/header-3";

function Index3() {
 
  return (
    <>
      <Header3 />
      <div className="page-content bg-white" id="top">
        <Slider3 />
        <Service3 />
        <AboutUs3 />
        <Features3 />
        <Projects3 />
        <Newsletter3 />
        <Team3 />
        <PricingT3 />
        <Testimonial3 />
        <Blog3 />
        <Clients3 />
        <GetInTouch3 />
        <Footer3 />
      </div>
    </>
  );
}

export default Index3;
