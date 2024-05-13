import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/Hero/Hero";
import HomeCards from "../../Components/HomeCards/HomeCards";
import HomeContact from "../../Components/Contact/HomeContact";
import Motto from "../../Components/About/Motto/Motto";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <HomeCards />
      <Motto />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Home;
