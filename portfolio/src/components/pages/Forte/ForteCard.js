import React, { useEffect, useRef } from 'react'
import './Forte.css'
import ForteSvg from './ForteSvg'
import {motion,useInView} from 'framer-motion'

const ForteCard = (props) => {
    const cardref= useRef(null)
    const cardIconRef = useRef(null);

    const iconInView = useInView(cardIconRef,{amount:1,once:true})
    const isInView = useInView(cardref,{margin:'-40% 0px -40% 0px'})
  return (
    <motion.div  ref={cardref} className='fortecard-main' style={isInView?{color:'white'}:{color:'var(--tertiary-color)'}}>
      <motion.div data-scroll data-scroll-speed='0.03' ref={cardIconRef} className='forte-icon-div'>
        <ForteSvg name={props.name}/>
      </motion.div>
      <p>
        {props.text}
      </p>
    </motion.div>
  )
}

export default ForteCard
