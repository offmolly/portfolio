import React, { useContext } from 'react'
import './HomeNav.css'
import { RefContext } from '../pages/RefContext';
import { motion } from 'framer-motion';

function HomeNav() {

  const { aboutRef } = useContext(RefContext);
  const { projectsRef } = useContext(RefContext);


  const handleClick = (e) =>{
    if(e.target.id === 'about-nav'){
      aboutRef.current.scrollIntoView({behavior: 'smooth' })
    }
    else if(e.target.id === 'project-nav'){
      projectsRef.current.scrollIntoView({behavior: 'smooth',block:"center" });
    }
    else if(e.target.id === 'connect-nav'){
      window.scrollTo(0,document.body.scrollHeight)
    }
    
    
  }

  return (
    <motion.div  data-scroll data-scroll-speed={window.innerWidth<650?'0.08':'0.2'} data-scroll-position='end' className='home-nav-div font1'>
        <h2 tabIndex={0}  id='project-nav' onClick={handleClick}>PROJECTS</h2>
        <h2 tabIndex={0} id='about-nav' onClick={handleClick}>ABOUT</h2>
        <h2 tabIndex={0} id='connect-nav'  onClick={handleClick}>CONNECT</h2>
    </motion.div>
  )
}

export default HomeNav
