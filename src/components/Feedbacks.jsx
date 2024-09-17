import React from "react";
import { motion } from "framer-motion";

import { style } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { link } from "framer-motion/client";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  image,
  linkto,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black p-10 rounded-3xl xs:w-[350px] w-full'
  >
    <p className='text-white font-black text-[48px] bg-black'>"</p>

    <div className='mt-1 bg-black'>
    <a href={`${linkto}`}><p className='text-white tracking-wider text-[18px]'>{testimonial}</p></a>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        <a href={`${linkto}`}><p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p></a>
        </div>

        <a href={`${linkto}`}><img
          src={image}
          alt={`${name}`}
          className='w-10 h-10 rounded-full object-cover'
        /></a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-black rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={style.sectionHeadText}>Social Profiles</p>
        </motion.div>
      </div>
      <div className={`-mt-20 bg-black pb-14 ${style.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");