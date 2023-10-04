import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import AnimatedOutlet from './AnimatedOutlet'

const RootLayout = () => {
  const location = useLocation()
  const [animationKey, setAnimationKey] = useState(location.pathname)

  useEffect(() => {
    setAnimationKey(location.pathname)
  }, [location])

  return (
    <>
    <AnimatePresence mode='wait'>
      <motion.div
        key={animationKey}
        location={location}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit='exit'
        // transition={{ ease: 'easeInOut', duration: 1 }}
      >
      <Navbar />
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
    </>
  )
}

export default RootLayout