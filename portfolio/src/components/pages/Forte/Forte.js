import React, { useRef, useState } from 'react'
import './Forte.css'
import ForteCard from './ForteCard'
import {motion, useInView, useScroll, useTransform,useMotionValueEvent} from 'framer-motion'

const Forte = () => {
  const forteMainRef = useRef(null);
  const { scrollYProgress } = useScroll({
  target: forteMainRef,
  offset: ["start end", "end start"]
});

  const [y,setY] = useState(0);
  const yvalue = useTransform(scrollYProgress,[0,0.7],[300,-100])
  const scale = useTransform(scrollYProgress,[0,0.4],[1.2,1])
  const opacity = useTransform(scrollYProgress,[0.15,0.3],[0.1,1])

  useMotionValueEvent(yvalue, "change", (latest) => {
    setY(latest)
  })
  
  return (
    <div ref={forteMainRef} className='forte'>
      <div className="forte-main">
        <div  className='forte-h-div'>
           <motion.h1 style={{y:y,scale,opacity}} transition={{duration:0.7}}>What I do</motion.h1>
        </div>
        {/* <h1 className='sr-only'>What I do</h1> */}
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
  { name: 'code', text: 'Build performant, scalable full-stack web applications' },
  { name: 'ui', text: 'Create intuitive user experiences with strong visual clarity' },
  { name: 'design', text: 'Design cohesive UI/UX, brand identities, and visual assets' },
  { name: 'api', text: 'Develop robust, secure APIs for web and mobile platforms' },
  { name: 'server', text: 'Architect and maintain relational database backends' },
  { name: 'accessibility', text: 'Implement accessible interfaces following WAI-ARIA standards' }
]

