import React from 'react'
import ProfileImage from '../assets/frontprofile.jpg'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className='pb-4'>
        <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>


        <div className='flex flex-wrap'>
            {/* Left Div */}
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <motion.img
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="rounded-md md:h-[400px] md:w-[400px] h-[400px] w-[400px]" src={ProfileImage} alt="ProfileImage"
                     />
                </div>
            </div>

            {/* Right Div */}
            <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='my-2 max-w-xl py-6'>

                 I am a dedicated BCA student and a Aspiring MERN Stack Developer with a passion of
                 creating efficient and user-friendly wed applications. With 9 months of training and a 6 month internship experience,
                 I have Worked with Worked with languages; including-HTML,CSS,javascript, React, Tailwind CSS. My journey 
                 in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously
                 strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to 
                 deliver high-quality solutions. Alongside Coding, I enjoy and Enthusiast of staying active, exploring new technologies, and 
                 contributing to open-source projects.
                 </motion.p>
                </div>
            </div>
        </div>
    </div>
  );
}
