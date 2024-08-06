import React from "react";
import Header from "../Header/Header";
import PProperties from "../ErrorPage/PProperties/PProperties";
import OurTeam from "../OurTeam/OurTeam";
import OffersTestimonial from "../OffersTestimonial/OffersTestimonial";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <PProperties />
      <OurTeam />
      <OffersTestimonial />
      <Footer />
    </div>
  );
};

export default Home;
