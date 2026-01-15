import React, { useRef, useState } from 'react'
import './Forte.css'
import ForteCard from './ForteCard'
import {motion, useInView, useScroll, useTransform,useMotionValueEvent} from 'framer-motion'

const Forte = () => {
  const forteMainRef = useRef(null);
  const {scrollYProgress} = useScroll(forteMainRef);
  const [y,setY] = useState(0);
  const yvalue = useTransform(scrollYProgress,[0,0.5],[200,0])

  useMotionValueEvent(yvalue, "change", (latest) => {
    setY(latest)
  })
  
  return (
    <div className='forte'>
      <div ref={forteMainRef} className="forte-main">
        <div  className='forte-h-div'>
          {'Things i do...'.split("").map((letter,index)=>{
            return (
              <motion.h1 style={{y:y+(index+100),width:letter===" "?'15px':''}} transition={{duration:0.7}} key={`forte-text-no-${index}`} aria-hidden>{letter}</motion.h1>
            )
          })}
        </div>
        <h1 className='sr-only'>Things I do...</h1>
        <div className="forte-div">
          {fortelist.map((forte) =>{
            return <ForteCard text={forte.text} name={forte.name} />
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Forte

const fortelist = [
  {
    name:'code',
    text:'build full-stack optimized webapps and web pages'
  },
  {
    name:'ui',
    text:'craft unique UX that stylistically stands out'
  },
  {
    name:'design',
    text:'design UI/UX, brand identity and graphics'
  },
  {
    name:'api',
    text:'BUILD FULLY FUNCTIONAL API FOR WEBSITES AND APPS'
  },
  {
    name:'server',
    text:'IMPLEMENT RELATIONAL DATABASe backend'
  },
  {
    name:'accessibility',
    text:'CREATE ACCESSIBLE ui using wai-aria standards'
  }
]
