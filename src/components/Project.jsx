import React from 'react'
import project1 from '../assets/projects/images.jpeg'
import project2 from '../assets/projects/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg'
import project3 from '../assets/projects/Screenshot (1).png'
import { motion } from 'framer-motion';
 
export default function Project() {

    const PROJECTS = [
         {
            title: "Blogger",
            image: project1,
            description: "MERN Stack Developer, Tech Stack: ReactJS, Express, Javascript, NodeJS, MongoDB. Create Blogger library website. Where Users give review on Blogger. Here use JWT authentication for protected APIs. Like library-Blogger, etc.",
            technologies: ["React", "Tailwind", "Express", "Javasript", "Node.js", "MongoDB"],
         },
         {
            title: "Shopping Cart",
            image: project2,
            description: "MERN Stack Developer, Tech Stack: ReactJS, Express, Javascript, NodeJS, MongoDB. Created an Shopping cart website's backend part with multiple APIs based on products, users, carts and orders. Here use JWT authentication for protected APIs and also use AWS. Like Amazon and Flipkart etc.",
            technologies: ["React", "Tailwind", "Express", "Javasript", "Node.js", "MongoDB"],
         },
         {
            title: "Portfolio Website",
            image: project3,
            description: "A personal portfolio website showcasing projects, skills, and contact information.",
            technologies: ["HTML","CSS","React", "Tailwind"],
         },
    ];

  return (
    <div>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>

        <div>
            {PROJECTS.map((project,index) => (
                <div className='mb-8 flex flex-wrap lg: justify-center' key={index}>

                    {/*Left Div*/}
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/4'>
                      <img className='mb-6 rounded' src={project.image} width={200} height={200} alt={project.title} />
                    </motion.div>

                    {/* Right Div*/}
                    <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semihold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>

                    {project.technologies.map((value, index) => (
                        <span className='mr-2 rounded border border-blue-800 px-2 py-1 text-xs hover:bg-neutral-800 hover: text-purple-800' key={index}>{value}</span>
                    ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}
