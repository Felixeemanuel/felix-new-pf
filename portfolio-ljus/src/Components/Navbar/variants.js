import { motion } from "framer-motion";

export const logoVariants = {
    hidden: {
      opacity: 0,
      x: '-10vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.3,
        type: 'spring',
        stiffness: 70,
      }
    }
  }

  export const socialMediaVariants = {
    hidden: {
        x: '100%', 
        opacity: 0,
        rotate: 90,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            duration: .5,
            type: 'spring',
            stiffness: 70,
        }
    }

  }

  export const socialMediaVariants2 = {
    hidden: {
        x: '100%', 
        opacity: 0,
        rotate: 90,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            delay: .4,
            duration: .5,
            type: 'spring',
            stiffness: 70,
        }
    }

  }

  export const socialMediaVariants3 = {
    hidden: {
        x: '100%', 
        opacity: 0,
        rotate: 90,
    },
    visible: {
        x: 0,
        opacity: 1,
        rotate: 0,
        transition: {
            delay: .6,
            duration: .5,
            type: 'spring',
            stiffness: 70,
        }
    }

  }


  export const portfolioVariants = {
    hidden: {
      opacity: 0,
      y: '100vw',
  },
  visible: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 1.5,
          type: 'spring',
          stiffness: 30,
      }
  }
  }