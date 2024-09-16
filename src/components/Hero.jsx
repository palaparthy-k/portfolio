import {motion} from 'framer-motion';
import {style} from '../style';
import React from 'react'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${style.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='felx flex-col justify-center items-center mt-5'>
          <div className=' w-5 h-5 rounded-full bg-[#808080]'/>
          <div className='mx-2 w-1 sm:h-80 h-40 grey-gradient'/>
        </div>    
        <div>
          <h1 className={`${style.heroHeadText}`}>
            Hello! I am <br className='sm:block hidden'></br><span className='text-[#808080]'>Keerthana Palaparthy</span>
          </h1><br className='sm:block hidden'></br>
          <p className={`${style.heroSubText} mt-2 text-white text-justify`}>
          I am an undergraduate student, a web application developer, and a cybersecurity enthusiast.
          </p>
        </div>    
      </div>
    </section>
  )
}

export default Hero