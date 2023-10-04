import { motion } from "framer-motion";


export const wrapperVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .5,
            duration: 1.5,
            type: 'spring',
            stiffness: 70,
        }
    },
    exit: {
        opacity: 0,
        y: '-100vw',
        transition: {
            ease: 'easeInOut',
            duration: .5,
        }
    }
}


export const leftVariants = {
    hidden: {
        x: '-100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: 0.5,
            type: 'spring',
            stiffness: 30,
        }
    }
}

export const rightVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: .5,
            duration: .5,
            type: 'spring',
            stiffness: 30,
        }
    }
}




