import React from 'react'
import { motion } from 'framer-motion';


export default function Experience() {

    const EXPERIENCE = [
        {
            year: "September 2024 - Present",
            role: "MERN Stack Trainee",
            company: "Sqilco",
            description: `Working with a team in developing and maintaining web application using Javascript, React.js, Implemented RESTful APIs and Integrated with MongoDB databases. Collaborated with stakeholders to define project requirements ande timelines.`,
            technologies:["HTML","CSS", "Javascript","React.js","Next.js","MongoDB"],
        },
        {
            year: " July 2024 - August 2024",
            role: "Core Java",
            Company: "Sqilco",
            description: "I joined SQILCO to complete a 2-month Core Java Developer program aimed at building a strong",
            technologies: ["Java", "Javafx"],
        }
    ]
  return (
    <div>
        <h1 className='my-20 text-center text-4xl'>Experience</h1>

        <div>
            {EXPERIENCE.map((experience,index) => (
                <div className='mb-8 flex flex-wrap lg:justify-center' key={index}>

                    {/* Left Div */}
                    <div className='w-full lg:w-1/4'>
                    <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='mb-2 text-sm text-neutral-400'>{experience.year}</motion.p>
                    </div>

                    {/* Right Div*/}
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{experience.role} - <span className='text-sm text-purple-100'></span></h6>
 
                    <p className='mb-4 text-neutral-400'>{experience.description}</p>

                    {experience.technologies.map((technology, index) => (
                        <span className='mr-2 rounded border border-neutral-800 px-2 py-1 text:xs hover:bg-neutral-800' key={index}>{technology}</span>
                    ))}
                    </motion.div>

                </div>
            ))}
        </div>
    </div>
  )
}
