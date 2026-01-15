import React, { useContext, useEffect, useState } from 'react'
import './Footer.css'
import { RefContext } from '../RefContext';
import { useInView,motion, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    const {aboutRef} = useContext(RefContext);
    const aboutInView = useInView(aboutRef,{amount:0.1});
    const opacity = useTransform(props.mainScrollYProgress,[0.8,0.9],[0,1])
  return (
    <div className='page' id='footer' style={aboutInView?{backgroundColor:''}:{backgroundColor:'transparent'}}>
       <motion.div style={{opacity}} className='footer-main'>
       
            <motion.div whileHover={{opacity:0.4}}>
               <Link to={'mailto:pranayrpublic@gmail.com'} target={'_blank'} style={{width:'100%',height:'100%'}}>
                  <motion.span className='f-s font1'>Let's connect</motion.span>
                </Link>
            </motion.div >
        

        <span className='f-s2 font1'> designed and developed by me {'<3'}</span>
       </motion.div>
      
    </div>
  )
}

export default Footer
