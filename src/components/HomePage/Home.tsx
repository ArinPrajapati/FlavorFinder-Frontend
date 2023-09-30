import React from "react";
import CategorySection from "./CategorySection";
import ContactForm from "./ContactForm";
import FQN from "./FQN";
import Hero from "./Hero";
import InfiniteCarousel from "./InfiniteCarousel";
import TimelineWithAvatar from "./TimelineWithAvatar";

const Home = () => {
  return (
    <>
      <Hero />
      <TimelineWithAvatar />
      <CategorySection />
      <InfiniteCarousel />
      <ContactForm />
      <FQN />
    </>
  );
};

export default Home;
