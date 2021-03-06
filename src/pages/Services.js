import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-3.jpg";
import { motion } from "framer-motion";
import { animationThree, transition } from "../animations";

function Services() {
  return (
    <motion.div initial='out' animate='end' exit='out' 
    variants={animationThree} transition={transition}>
      <Header />
      <Hero image={Image} title="Look t this bird" desc="Can you believe this" />
    </motion.div>
  );
}

export default Services;
