import React, { useContext, useEffect, useRef } from 'react'
import './About.css'
import Description from './Description'
import SkillTray from '../../SkillTray/SkillTray'
import { RefContext } from '../RefContext';
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
    const tools= ['figma','cli','git','insomnia','vscode','docker']
    const { aboutRef } = useContext(RefContext);
    const aboutPRef = useRef(null);
    const aboutdecsRef = useRef(null);
    const aboutskillRef = useRef(null);

    const aboutMainRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
    target: aboutMainRef,
    offset: ["start end", "end start"]
    })

    const aboutdivinview = useInView(aboutPRef,{once:true,amount:1})
    const aboutdescinview = useInView(aboutdecsRef,{once:true,amount:1})
    const aboutskillinview = useInView(aboutdecsRef,{once:true,amount:1})

    const mailOpacity = useTransform(
        scrollYProgress,
        [0.75, 0.8],
        [0, 1]
    )

    const mailScale = useTransform(
        scrollYProgress,
        [0.75,0.8],[0.85,1]
    )

    const aboutX = useTransform(
        scrollYProgress,
        [0,0.5],[100,0]
    )

    const aboutOpacity = useTransform(
        scrollYProgress,
        [0.1,0.3],[0,1]
    )

    const aboutScale = useTransform(
        scrollYProgress,
        [0.1,0.5],[0.9,1]
    )


    const text1X = useTransform(
        scrollYProgress,
        [0,0.6],[-100,0]
    )

    const text1Opacity = useTransform(
        scrollYProgress,
        [0.35,0.5],[0,1]
    )

    const text1Scale = useTransform(
        scrollYProgress,
        [0.1,0.6],[1,1]
    ) 

    const text2Opacity = useTransform(
        scrollYProgress,
        [0.5,0.6],[0,1]
    )

    const skillOpacity = useTransform(
        scrollYProgress,
        [0.6,0.7],[0,1]
    )

    return (
        <motion.div ref={aboutRef} className='page' id="about">
            <motion.div ref={aboutMainRef} className="about-main">
            <motion.h2 style={{x:aboutX,opacity:aboutOpacity,scale:aboutScale}} className='about-h font1'>About</motion.h2>
                <motion.div className='about-div font1'>
                    <motion.p style={{x:text1X,opacity:text1Opacity,scale:text1Scale}} ref={aboutPRef} className='about-txt'>
                    I’m a self-taught web developer and designer who started out freelancing with startups and local brands. I genuinely love coding and designing — and it shows in my work.
                    </motion.p>
                    <motion.div style={{opacity:text2Opacity}} ref={aboutdecsRef} className='about-sec'>
                        <Description text={'Started with python to make fun games, I made my way to javascript web development, and UI designing and UX strategizing.'}/>
                        <Description text={'Familiar with javascript, python, html, css and framworks like reactjs, django, fastapi and more.'}/>
                    </motion.div>
                </motion.div>
                <motion.div style={{opacity:skillOpacity}} ref={aboutskillRef} className='skill-div'>
                    <SkillTray title={'Languages & Frameworks'} icons={libraryAndFramerork}/>
                    <SkillTray title={'Tools'} icons={tools}/>
                </motion.div>
            </motion.div>
            <motion.div style={{opacity:mailOpacity,scale:mailScale}} className='f-h'>
                <Link to={'mailto:pranayrpublic@gmail.com'} target={'_blank'} style={{zIndex:'3',display:'flex',justifyContent :'center',alignItems:'center'}}>
                    <button className='p-[20px] px-[38px]' tabIndex={0} id='mailme'>
                        <img className='object-contain h-[32px]' src={`${process.env.PUBLIC_URL}'/static/images/mail.svg`} alt='mail-button'></img>
                    </button>
                </Link>
            </motion.div>
        </motion.div>
        
    )
}

export default About
