import React, { useContext, useEffect, useState } from 'react'
import './Entity.css'
import Ob from './Ob'
import { motion ,useTransform,useScroll, useInView} from 'framer-motion';
import { useRef } from 'react';
import { RefContext } from '../pages/RefContext';

const entityVariants = {
  hidden:{
    opacity:0,
    
  },
  animate:{
    opacity:1,
   
    transition:{
      ease:'easeOut',
      duration:0.6,
      staggerChildren:0.1,
    }
  }
}

function Entity(props) {
  const mainRef = useContext(RefContext);
  const entityRef = useRef(null);
  const isInview = useInView(entityRef,{amount:0.2})
  const {scrollYProgress} = useScroll({target:mainRef})

  const [colorchange1,setColorchange1] = useState(false)
  const [colorchange2,setColorchange2] = useState(false)
  const handleclick1 = () =>{
    setColorchange1(!colorchange1)
  }

  const handleclick2 = () =>{
    setColorchange2(!colorchange2)
  }
  useEffect(()=>{
    colorchange1?document.documentElement.style.setProperty('--secondary-color','#565656'):document.documentElement.style.setProperty('--secondary-color','#7D8E38');
  },[colorchange1])

  useEffect(()=>{
    colorchange2?document.documentElement.style.setProperty('--secondary-color','#AB3434'):document.documentElement.style.setProperty('--secondary-color','#7D8E38');
  },[colorchange2])

  const [mainOffset,setMainoffset] = useState([0.14,0.4]);

  useEffect(()=>{
    if (window.innerWidth<820){
      setMainoffset([0.1,0.45])
    }
    else if(window.innerWidth<600){
      setMainoffset([0.05,0.3])
    }
    else{
      setMainoffset([0.14,0.4])
    }
   },[])
  
  const posy = useTransform(scrollYProgress,mainOffset,[0,props.posyOffset])
  const posx = useTransform(scrollYProgress,mainOffset,[0,60])

  const y = useTransform(scrollYProgress,mainOffset,[0,props.obpos[0]])
  const y2 = useTransform(scrollYProgress,mainOffset,[0,props.obpos[1]])
  const y3 = useTransform(scrollYProgress,mainOffset,[0,props.obpos[2]])

  return (
    <motion.div style={{x:posx,y:posy}} ref={entityRef} className="entity">
        <motion.div variants={entityVariants} initial="hidden" animate={isInview?"animate":"hidden"} className='entity-div'  whileHover={{opacity:0.75}} onClick={handleclick1}>
            <Ob entityVariants={entityVariants} objectNo={'0'}/>
            <Ob y={y} entityVariants={entityVariants} objectNo={'1'}/>
            <Ob y={y2} entityVariants={entityVariants} objectNo={'2'}/>
            <Ob y={y3} entityVariants={entityVariants} objectNo={'3'}/>
        </motion.div>
        <motion.div variants={entityVariants} initial="hidden" animate={isInview?"animate":"hidden"} style={{scaleX:-1,rotate:35}}  whileHover={{opacity:0.75}} className='entity-div' id="other-half" onClick={handleclick2}>
            <Ob entityVariants={entityVariants} objectNo={'0'}/>
            <Ob y={y} entityVariants={entityVariants} objectNo={'1'}/>
            <Ob y={y2} entityVariants={entityVariants}objectNo={'2'}/>
            <Ob y={y3} entityVariants={entityVariants} objectNo={'3'}/>
        </motion.div>
    </motion.div>
  )
}

export default Entity
