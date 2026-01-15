import React, { useContext } from 'react'
import LinkButton from '../LinkButton'
import { RefContext } from '../pages/RefContext'
import {motion} from 'framer-motion'

function TopButton() {
  const { homeRef} = useContext(RefContext);
  const handleTopClick = ()=>{
    homeRef.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} style={{position:'absolute',bottom:'30px',right:'40px',zIndex:'999',pointerEvents:'all'}} onClick={handleTopClick}>
        <LinkButton linkto={'/'} target={false} topbtn={true} src='/static/images/arrow.svg' alt="top icon"/>
    </motion.div>
  )
}

export default TopButton
