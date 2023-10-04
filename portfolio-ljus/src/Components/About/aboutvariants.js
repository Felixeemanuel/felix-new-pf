export const aboutvariants = {
    hidden: {
        opacity: 0,
        y: '100vw',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: 'spring',
            stiffness: 50,
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