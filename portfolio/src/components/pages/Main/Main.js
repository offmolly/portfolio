import Home from '../Home/Home'
import About from '../About/About'
import Home2 from '../Home2/Home2';
import Projects from '../Projects/Projects';
import { useContext, useEffect } from 'react';
import 'locomotive-scroll';
import LocomotiveScroll from 'locomotive-scroll';

import { motion, useScroll} from 'framer-motion';
import { RefContext } from '../RefContext';
import Footer from '../Footer/Footer';
import Forte from '../Forte/Forte';

function Main(props) {
  
    const mainRef = useContext(RefContext);
    const { scrollYProgress } = useScroll(mainRef);
    
    useEffect(() => {
        const scroll = new LocomotiveScroll({
        el: mainRef.current,
        smooth: true,
        });
        
    });

    return (
        <motion.main ref={mainRef}>
            
            <Home mainScrollYProgress={scrollYProgress}/>
            <Home2/>
            <Forte/>
            <Projects/>
            <About/>
            <Footer mainScrollYProgress={scrollYProgress}/>                     
            
            
        </motion.main>
    )
}

export default Main
