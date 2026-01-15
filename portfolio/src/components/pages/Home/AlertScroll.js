import React, { useEffect, useRef} from 'react'
import './AlertScroll.css'
import { animate, useMotionValue,motion } from 'framer-motion'

const AlertScroll = () => {
    const xTranslation = useMotionValue(0);
    const controlsRef = useRef(null);
    useEffect(()=>{
        let controls = animate(xTranslation,[0,-500],{
            ease:'linear',
            duration:8,
            repeat:Infinity,
            repeatType:'loop',
            repeatDelay:0,
        })

        controlsRef.current = controls;
    return controls.stop;
    },[xTranslation])

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6,duration:1,ease:'linear'}} className='alert-scrl-div'>
        <motion.div onMouseEnter={()=>{controlsRef.current?.pause()}} onMouseLeave={()=>{controlsRef.current?.play()}} style={{x:xTranslation}} className="alert-carousel-div">
            {Array.from({ length: 10 }, (_, index) => <AlertScrollMain key={`AlertScrollComponent NO.${index}`} />)}
        </motion.div>
       
    </motion.div>
  )
}


const AlertScrollMain = ()=>{
    return(
        <motion.div initial={{opacity:0,skewX:20}} animate={{opacity:1,skewX:0}} transition={{delay:0.7,duration:1}} className='alert-scrl-main'>
            <p className='font1'>AVAILABLE FOR WORK</p>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="7" fill="#161616"/>
            </svg>
        </motion.div>
    )
}
export default AlertScroll
