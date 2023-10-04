import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { motion } from 'framer-motion'
import { logoVariants, socialMediaVariants, socialMediaVariants2, socialMediaVariants3 } from './variants'



const Navbar = () => {
  return (
    <nav className='top-nav'>
      <Link to={'/'}>
      <motion.div className="logo"
      variants={logoVariants}
      initial='hidden'
      animate='visible'
      whileHover={{ 
        scale: 1.1,
    }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h3>FELIX EDSTRÖM</h3>
        <img src="../../../public/imgs/underline.png" alt="" />
      </motion.div>
      </Link>
      <ul className="nav-links">
        <motion.li className='nav-social'
        variants={socialMediaVariants}
        initial='hidden'
        animate='visible'
        whileHover={{ 
          scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#">
            <img src="../../../public/imgs/githubpng.png" alt="" />
          </a>
        </motion.li>
        <motion.li className='nav-social'
        variants={socialMediaVariants2}
        initial='hidden'
        animate='visible'
        whileHover={{ 
          scale: 1.1,
          type: 'spring',
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#">
            <img src="../../../public/imgs/linkedinpng.webp" alt="" />
          </a>
        </motion.li>
        <motion.li className='nav-social'
        variants={socialMediaVariants3}
        initial='hidden'
        animate='visible'
        whileHover={{ 
          scale: 1.1,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <a href="#">
            <img src="../../../public/imgs/mailpng.png" alt="" />
          </a>
        </motion.li>
      </ul>
    </nav>
  )
}

export default Navbar