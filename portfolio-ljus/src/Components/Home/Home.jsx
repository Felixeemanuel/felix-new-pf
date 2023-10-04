import React from 'react'
import './home.css'
import { motion, AnimatePresence } from 'framer-motion'
import { wrapperVariants, rightVariants, leftVariants } from './homevariants'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <motion.div className="wrapper"
    variants={wrapperVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
        <div className="inner-wrapper-home">
            <motion.div className="home-left"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            >
                <div className="welcome-text">
                    <div className="welcome-text-upper">
                        <h1>Hello!{'  '} 
                            <span
                            >&#128075;
                            </span>
                        </h1>
                    </div>
                    <div className="welcome-text-lower">
                        <h2>I'm a Front End Developer based in <br /> Stockholm, Sweden <span><img className='pin' src="../../../public/imgs/pin.png" alt="" /></span></h2>
                    </div>
                </div>
                <div className="tech-stack">
                    <h3>Tech</h3>
                    <div className="tech-stack-icons">
                        <motion.img src="../../../public/imgs/react.png" alt="" 
                        animate={{ rotate: 360 }}
                        transition={{ Infinity, duration: 2, repeat: Infinity, ease: "linear"}}
                        
                        />
                        <img src="../../../public/imgs/sasspng.png" alt="" />
                        <img src="../../../public/imgs/nodepng.png" alt="" />
                        <img src="../../../public/imgs/html5.png" alt="" />
                        <img src="../../../public/imgs/javascript.png" alt="" />
                        <img src="../../../public/imgs/css.png" alt="" />
                        <img src="../../../public/imgs/figma.png" alt="" />
                    </div>
                </div>
            </motion.div>
            <motion.div className="home-right"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            >
                <img className='me-pic' src="../../../public/imgs/me.png" alt="" />
                <Link to={'/about'}>
                <motion.button
                whileHover={{ 
                    scale: 1.1,
                    boxShadow: '-4px 4px 14px rgba(0, 0, 0, 0.22)',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className='home-btn'>Discover more</motion.button>
                </Link>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Home