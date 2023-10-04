import React from 'react'
import Portfolio1 from '../Components/Portfolio/Portfolio1'
import './portfoliopage.css'
import { portfolioVariants, socialMediaVariants } from '../Components/Navbar/variants'
import { motion } from 'framer-motion'

const PortfolioPage1 = () => {
  return (
  <>
    <motion.div className="portfolioPage-wrapper"
    variants={portfolioVariants}
    initial="hidden"
    animate="visible"
    >
      <div className="portfolio-left">
        <img src="/public/imgs/portfoliopng.png" alt="" />
      </div>
      <div className="portfolio-middle">
        <div>
        <div className="portfolio-intro-upper">
        <h2>Okay! Let's get serious..</h2>
        <img src="/public/imgs/code-512.webp" alt="" />
        </div>
        <h2>Take a look at some of my work.</h2>
        </div>
      <Portfolio1 />
      <div className="portfolio-button-div">
        <motion.button className='portfolio-button portfolio-button-back'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src="/public/imgs/arrowpng.png" alt="" />
          Back 
          </motion.button>
        <motion.button className='portfolio-button portfolio-button-next'
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Next 
          <img src="/public/imgs/arrowpng.png" alt="" />
          </motion.button>
        </div>
        </div>
      <div className="portfolio-right">
        <div className="portfolio-description">
          <h2>About</h2>
          <p>Here you can see some of my work. I have made a few websites, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more. I have also made a few games, and I am currently working on a few more.</p>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default PortfolioPage1