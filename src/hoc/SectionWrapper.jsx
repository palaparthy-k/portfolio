import React from "react";
import { motion } from "framer-motion";
import { style } from "../style";
import { staggerContainer } from "../utils/motion";
const SectionWrapper=(Component ,idName)=>function HOC(){
    return(
        <motion.section variants={staggerContainer()} initial='hidden' whileInView='show'
        viewport={{once:true, amount:0.25}} className={`${style.padding} mx-auto relative z-0 max-w-7xl`}>
            <Component/>
        </motion.section>
    )
}
export default SectionWrapper;