import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import {style} from '../style'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
const ServiceCard=({index, title, icon})=>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right','spring',0.5*index, 0.75)} className='w-full grey-gradient p-[1px]
      rounded-[20px] shadow-card'>
        <div options={{max:45, scale:1, speed:450}} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div className='bg-black'>
      <motion.div variants={textVariant()} >
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-white text-justify text-[17px] max-w-3xl leading-[30px]'>
      I am an undergraduate student specializing in Computer Science and Engineering (Cyber Security), 
      with a strong passion for web application development and cybersecurity.
      My experience spans creating dynamic, user-friendly websites and exploring cutting-edge security practices. 
      I enjoy tackling new challenges, learning emerging technologies, and applying my skills
      to build secure and efficient digital solutions. 
      Whether it's coding, analyzing security threats, or staying updated on the 
      latest trends, I’m driven by curiosity and a desire to innovate
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index)=>(<ServiceCard key={service.title} index={index}{...service}/>))}
      </div>
    </div>
  )
}

export default SectionWrapper(About,'about')