import React from 'react'
import LinkButton from './LinkButton'
import '../App.css'
import { motion } from 'framer-motion'

const animationVariant = {
  hidden:{
    opacity:0,
    y:-100
  },
  visible:{
    opacity:1,
    y:0, 
    transition:{
      duration:0.3,
      staggerChildren:0.1,
    }
  },
 
}
function SocialTray() {

  return (
       <motion.div data-scroll data-scroll-speed='0.05' variants={animationVariant} initial="hidden" animate="visible" className="connect-div">
            <LinkButton animationVariant={animationVariant} target={true} src={`${process.env.PUBLIC_URL}/static/images/git-icon.svg`} linkto={'https://github.com/offmolly'} alt={'github'}/>
            <LinkButton animationVariant={animationVariant} target={true} src={`${process.env.PUBLIC_URL}/static/images/mail.svg`} linkto={'mailto:pranayrpublic@gmail.com'} alt={'mail'}/>
            <LinkButton animationVariant={animationVariant} target={true} src={`${process.env.PUBLIC_URL}/static/images/linkedin.svg`} linkto={'https://linkedin.com/in/pranay-r-public'} alt={'linkedin'}/>
        </motion.div> 
  )
}

export default SocialTray
