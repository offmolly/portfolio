import React from 'react'
import '../App.css'
import LinkButton from './LinkButton'
import {AnimatePresence, motion} from 'framer-motion'

const Connect = () => {
  return (
    <AnimatePresence>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.6,ease:'easeInOut'}} className='connect-footer-div'>
            <LinkButton connect={true} target={true} src={`${process.env.PUBLIC_URL}/static/images/git-icon.svg`} linkto={'https://github.com/offmolly'} alt={'github'}/>
            <LinkButton connect={true} target={true} src={`${process.env.PUBLIC_URL}/static/images/mail.svg`} linkto={'mailto:bear@gmail.com'} alt={'mail'}/>
            <LinkButton connect={true} target={true} src={`${process.env.PUBLIC_URL}/static/images/linkedin.svg`} linkto={'https://linkedin.com'} alt={'linkedin'}/>
        </motion.div>
    </AnimatePresence>
  )
}

export default Connect
