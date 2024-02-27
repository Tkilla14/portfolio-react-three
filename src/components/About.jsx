import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-whote text-[20px] 
              font-bold text-creator"> {title}</h3>


          </div>
        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}
        >Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
        >
        "I am a versatile full stack developer with a broad spectrum of expertise in software development encompassing multiple programming languages. My skill set extends beyond website design to encompass the creation of assets from inception for various purposes, including website development and game creation. Additionally, I specialize in animating assets to bring them to life. With extensive experience in development tools ranging from game engines like Unity & Unreal to design software like Blender, Adobe and Canva, I bring a diverse toolkit to every project. Alongside proficiency in HTML, CSS, JavaScript, and React, I excel in database architecture and API integration. Furthermore, I am adept in utilizing additional frameworks and libraries such as Bootstrap, Chakra, and Framer to enhance development efficiency and quality. While further elevating my development capabilities. Leveraging prompt engineering and LLM methodologies, I continuously strive for next-level development proficiency, augmented by agent training."

        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index= {index}
            {...service} />
          ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")