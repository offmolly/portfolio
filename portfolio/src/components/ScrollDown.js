import React from 'react'
import '../App.css'
import { motion } from 'framer-motion'

function ScrollDown() {
  
  return (
    <motion.div whileHover={{opacity:0.6}} className='scroller'>       
        <motion.span initial={{opacity:0}} animate={{opacity:1,transition:{when:'afterChildren',duration:1}}}>SCROLL</motion.span>
        <motion.svg initial={{opacity:0}} animate={{opacity:1,transition:{duration:1}}} width="13" height="17" viewBox="0 0 23 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 15.4167L11.5 25L21 15.4167M2 2L11.5 11.5833L21 2" 
            stroke="#343434" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"/>
        </motion.svg>
    </motion.div>
  )
}

export default ScrollDown
