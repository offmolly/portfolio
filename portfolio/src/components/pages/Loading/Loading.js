import React, { useState ,useEffect} from 'react'
import './Loading.css'
import '../../../App.css'
import { motion,useTransform,useMotionValue,animate } from 'framer-motion'

function Loading(props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const opacity1 = useTransform(rounded,[0,100],[0,1])
  const color = useTransform(rounded,[0,100],['#777777','#7D8E38'])

  useEffect(() => {
    const animation = animate(count, 100, { duration:(props.loadtime)/1000});
    return animation.stop;
  }, [count]);



  return (
      <motion.div  exit={{opacity:0,transition:{duration:0.2}}}  className='page' id='loading'>
        <div className='loading-main'>
          <div className="ld-lg-div">
            <motion.img style={{opacity:opacity1}}  transition={{ease:'linear',duration:0.2}} className="ld-lgo" src={`${process.env.PUBLIC_URL}/static/images/logo.svg`} alt="" />
          </div>
        </div>  
    </motion.div>
  )
}

export default Loading
