import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import {aboutvariants} from './aboutvariants'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <motion.div className="about-wrapper"
        variants={aboutvariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
            <div className="about-left">
                <img style={{ width: '15rem'}} src="../../../public/imgs/me.png" alt="" />
            </div>
            <div className="about-middle">
                <h2>About me!</h2>
                <div className="about-info-box">
                24 year old from Stockholm, Sweden. Currently pursuing an education in Front End development with a lot of focus on JavaScript, React and TypeScript. 
                </div>
                <div className="about-info-box">
                I am currently looking for an internship to further develop my skillset and proceed to build my career as a Junior Developer.
                </div>
            </div>
            <div className="about-right">
                <img src="../../../public/imgs/id.png" alt="" />
                <div className="about-info-box">
                  When I’m not buried in code, I enjoy spending my free time at the gym, playing football and hanging out with my friends!
                </div>
                <Link to={'/portfolio'}>
                <button>Portfolio</button>
                </Link>
            </div>
        </motion.div>
    </>
  )
}

export default About