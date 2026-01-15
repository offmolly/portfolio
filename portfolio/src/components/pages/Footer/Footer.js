import React, { useContext, useEffect, useState } from 'react'
import './Footer.css'
import { RefContext } from '../RefContext';
import { useInView,motion, useTransform } from 'framer-motion';

const Footer = (props) => {
    const {aboutRef} = useContext(RefContext);
    const aboutInView = useInView(aboutRef,{amount:0.1});
    const opacity = useTransform(props.mainScrollYProgress,[0.8,0.9],[0,1])
  return (
    <div className='page' id='footer' style={aboutInView?{backgroundColor:''}:{backgroundColor:'transparent'}}>
       <motion.div style={{opacity}} className='footer-main'>
            <motion.div whileHover={{opacity:0.4}}>
                <motion.span className='f-s font1'>Let's connect</motion.span>
            </motion.div >
        
        <span className='f-s2 font1'>blah blah blah legal stuff formalities blah blah copyright trademark ltd llm pvt etc. <span className='bold-font'>designed and developed by me {'<3'}</span></span>
       </motion.div>
      
    </div>
  )
}

export default Footer
