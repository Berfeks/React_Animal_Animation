import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-2.jpg'
import { motion } from "framer-motion";
import { animationTwo, transition } from "../animations";
function About() {
    return (
        <motion.div initial='out' animate='in' exit='out' 
        variants={animationTwo} transition={transition}>
            <Header />
            <Hero image={Image} title="Beautiful views nature" desc="Never seen before"/>
            
        </motion.div>
    )
}

export default About
