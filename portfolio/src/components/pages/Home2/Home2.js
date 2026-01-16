import React, { useEffect, useRef,useState } from 'react'
import './Home2.css'
import Entity from '../../Entity/Entity'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import useScreenSize from '../../hooks/useScreenSize'

function Home2() {
  const targetRef = useRef(null);
  const title1ref = useRef(null);
  const title1inview = useInView(title1ref,{once:true,amount:0.8})
  const {scrollYProgress} = useScroll({target:targetRef, offset:["start end","end end"]})

  const [maxy,setMaxy] = useState(0.4)
  const y = useTransform(scrollYProgress, [0,maxy],[500,0]);

  const screensize = useScreenSize()
  const [obpos, setObpos] = useState([]);
  const [posyOffset,setPosyOffset] = useState(0);

 useEffect(()=>{
  if (screensize.width<1100){
    setObpos([-60,-120,-180])
    setPosyOffset(100)
    setMaxy(1)
  }
  else{
    setObpos([-140,-220,-300])
    setPosyOffset(320)
    setMaxy(0.4)
  }
 },[screensize])

  return (
    <motion.div style={window.innerWidth<650?{}:{y}} ref={targetRef} className='page' id='home2'>
        <motion.div className='home2-title-div'>
            <motion.div ref={title1ref} initial={{opacity:0}} animate={title1inview?{opacity:1}:{opacity:0}} transition={{ease:'linear',duration:0.4}} id="dev">Web <br/> Developer</motion.div>
            <motion.div initial={{opacity:0}} animate={title1inview?{opacity:1}:{opacity:0}} transition={{ease:'linear',duration:0.4}} id="des"><span>& designer</span></motion.div>
        </motion.div>
        {/* <div data-scroll data-scroll-speed='0.1' className='home2-div2'>
            <span>Creating visually engaging, intuitive webapps.</span>
        </div> */}
        <Entity scrollYProgress={scrollYProgress} posyOffset={posyOffset} obpos={obpos}/>
        
    </motion.div>
  )
}

export default Home2
