import React, { useEffect } from 'react'
import './Name.css'
import { motion } from 'framer-motion'
import useMobileView from '../../hooks/useMobileView'

const Name = ()=> {
  const calscrollspeed = (index)=>{
    if(window.innerWidth<650){
      return '0'
    }
    const addFactor = 0.03
    return `${0.1+(addFactor*(index+1))}`
  }
  return (
    <motion.div initial={{opacity:0,y:100}} animate={{opacity:1,y:0}} transition={{ease:'easeOut',duration:0.4,}} className='name-div'>
        <div className="greet-div">
          <span className='name-div-span' id='greet'>Hi, I’m</span>
        </div>
        <div className='name-main'>
          <h1 className='sr-only'>PRANAY</h1>
          {['P','R','A','N','A','Y'].map((letter,index)=>{
            return(
              <div aria-hidden key={`name-span-no-${index}`} data-scroll data-scroll-speed={calscrollspeed(index)} className='name-div-span'>
                <span id='no-glow'>
                  {letter}
                </span>

                <motion.span 
                  initial={{opacit:0}} 
                  animate={{opacity:[0,0.7],
                  transition:{delay:1,duration:10,ease:'linear',repeat:Infinity,repeatType:'reverse',repeatDelay:0}}} 
                  id='glow'>
                  {letter}
                </motion.span>
              </div>
            )
          })}
        </div>
        {/* <span id='no-glow'>
          PRANAY
        </span>
        <motion.span 
        initial={{opacit:0}} 
        animate={{opacity:[0,1],
        transition:{delay:1,duration:10,ease:'linear',repeat:Infinity,repeatType:'reverse',repeatDelay:0}}} 
        id='glow'>
          PRANAY
        </motion.span> */}
    </motion.div>
  )
}

export default Name
