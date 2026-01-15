import React, { useContext, useEffect, useRef } from 'react'
import './About.css'
import Description from './Description'
import SkillTray from '../../SkillTray/SkillTray'
import { RefContext } from '../RefContext';
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'

const aboutVariants = {
    hidden:{
        opacity:0,
        skewX:-1,
        y:20,
    },
    visible:{
        opacity:1,
        skewX:0,
        y:0,
        transition:{
            duration:0.2,
            ease:'easeIn'
        }
    },
}

function About(props) {
    const libraryAndFramerork = ['python','javascript','css','html','react','django']
    const tools= ['figma','cli','git','insomnia','vscode']
    const { aboutRef } = useContext(RefContext);
    const aboutPRef = useRef(null);
    const aboutdecsRef = useRef(null);
    const aboutskillRef = useRef(null);

    const aboutdivinview = useInView(aboutPRef,{once:true,amount:1})
    const aboutdescinview = useInView(aboutdecsRef,{once:true,amount:1})
    const aboutskillinview = useInView(aboutdecsRef,{once:true,amount:1})

    return (
        <motion.div ref={aboutRef} className='page' id="about">
            <motion.div className="about-main">
            <h2 className='about-h font1'>About</h2>
                <motion.div className='about-div font1'>
                    <motion.p ref={aboutPRef} initial="hidden" animate={aboutdivinview?"visible":"hidden"} variants={aboutVariants} className='about-txt'>
                    I’m a self-taught web developer and designer who started out freelancing with startups and local brands. I genuinely love coding and designing — and it shows in my work.
                    </motion.p>
                    <motion.div ref={aboutdecsRef} initial="hidden" animate={aboutdescinview?"visible":"hidden"} variants={aboutVariants} className='about-sec'>
                        <Description text={'Started with python to make fun games, I made my way to javascript web development, and UI designing and UX strategizing.'}/>
                        <Description text={'Familiar with javascript, python, html, css and framworks like reactjs and django.'}/>
                    </motion.div>
                </motion.div>
                <motion.div ref={aboutskillRef} initial="hidden" animate={aboutskillinview?"visible":"hidden"} variants={aboutVariants} className='skill-div'>
                    <SkillTray title={'Languages & Frameworks'} icons={libraryAndFramerork}/>
                    <SkillTray title={'Tools'} icons={tools}/>
                </motion.div>
            </motion.div>
            <motion.div initial={{opacity:0}} whileHover={{opacity:0.8}} whileInView={{opacity:1,transition:{duration:1}}} exit={{opacity:0}} viewport={{amount:'all'}} className='f-h'>
                <Link to={'mailto:pranayrpublic@gmail.com'} target={'_blank'} style={{width:'100%',height:'100%',zIndex:'3'}}>
                    <button tabIndex={0} id='mailme'>
                        <label style={{pointerEvents:'none'}} htmlFor="mailme" className='font1'> Mail me</label>
                    </button>
                </Link>
        </motion.div>
        </motion.div>
        
    )
}

export default About
