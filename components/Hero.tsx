"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import CustomButton from './CustomButton';

const Hero = () => {
  const containerVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: '100vw' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 60,  damping: 20,  mass: 1, delay: 0.7 }
  },
};
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  

  };


  return (
    <div className='hero '>
     
      <motion.div
        className="flex-1  padding-x"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.5 }}
        > 
          <h1 className='hero__title'>
            Find, book, or rent a car -- quickly and easily!
          </h1>
          <p className='hero__subtitle'>
            Streamline your car rental experience with our effortless booking process.
          </p>

          <CustomButton
            title="Explore Cars"
            containerStyles="bg-[#2B59FF] text-white rounded-full mt-10"
            handleClick={handleScroll}
           />
      </motion.div>
      
      
        <motion.div
          className="hero__image-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        
        > 
          <div className="hero__image">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>

          <div className="hero__image-overlay" />
        </motion.div>
      
    </div>
  )
}

export default Hero;