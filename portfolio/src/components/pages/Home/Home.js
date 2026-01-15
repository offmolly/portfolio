import React, { useContext,useEffect, useState} from 'react'
import SocialTray from '../../SocialTray'
import './Home.css'
import HomeNav from '../../HomeNav/HomeNav'
import Name from './Name'
import { RefContext } from '../RefContext';
import useMobileView from '../../hooks/useMobileView'
import BurgerMenu from './BurgerMenu'
import ScrollDown from '../../ScrollDown'
import { motion} from 'framer-motion'
import TopButton from '../../TopButton/TopButton'
import AlertScroll from './AlertScroll'

export default function Home(props) {
    const { homeRef } = useContext(RefContext);
    const isMobile  = useMobileView();
    const [ShowTopBtn, setShowTopBtn] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 700) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

  return (
      <motion.section ref={homeRef} className='page' id="home">
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:2,ease:'circInOut'}}}className='noise'>
        <img className='noise-image' src="/static/images/Noise.png" alt="noise filter"/>
      </motion.div>
      
          <div className='home-head'>
                {isMobile && (
                        <BurgerMenu/> 
                )}
                {!isMobile && (
                    <SocialTray/>
                )}
              
          </div>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{type:'tween',delay:0.3,ease:'easeInOut',duration:0.4}} className='home-main'>
                <HomeNav />
                <motion.p data-scroll data-scroll-speed='-0.05' className="font1" id='intro'>
                    <span id="bold">Developer. Designer. Fullstack. UI/UX.</span> Focused on bringing creative and innovative ideas to life.
                </motion.p>
                <ScrollDown/>
          </motion.div>
          <Name/>
          
          
      </motion.section>  
  )
}
