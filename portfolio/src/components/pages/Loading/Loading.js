import React, { useState ,useEffect} from 'react'
import './Loading.css'
import '../../../App.css'
import { motion,useTransform,useMotionValue,animate } from 'framer-motion'

function Loading({loadtime}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const opacity = useTransform(rounded,[0,90],[0,1])
  const scale = useTransform(rounded,[0,100],[1.23,0])
  const scale2 = useTransform(rounded,[0,100],[2,0])
  const opacity1 = useTransform(rounded,[0,100],[0,1])
  const opacity2 = useTransform(rounded,[20,60],[1,0])
  const color = useTransform(rounded,[0,100],['#777777','#7D8E38'])

  useEffect(() => {
    const animation = animate(count, 100, { duration:(loadtime)/1000});
    return animation.stop;
  }, [count]);



  return (
      <motion.div style={{opacity}} key={"loading-div"} exit={{opacity:0,transition:{duration:0.2}}} className='w-[100vw] h-[100vh] flex justify-center relative items-center '>
       
        <motion.img style={{opacity:opacity1}} className='object-fit w-[10%] min-w-[240px] absolute ' src={`${process.env.PUBLIC_URL}/static/images/entity-load/entity.svg`}/>
        <motion.img style={{opacity:opacity2}} className='object-fit w-[10%] min-w-[240px] absolute ' src={`${process.env.PUBLIC_URL}/static/images/entity-load/entity-rage.svg`}/>
        
      </motion.div>
  )
}

export default Loading
