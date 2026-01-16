import React, { useContext } from 'react'
import { RefContext } from '../RefContext'
import './Projects.css'
import ProjectCarousel from './ProjectCarousel'
import { useScroll, useTransform, motion } from 'framer-motion'


/*format:
      projectname : name of project (same as project image name!)
      projectdetails: details about the porject
      skills: skills used to complete the porject (list [])
  */

      const projects =[
        {
          projectname:'Minesweeper',
          projectdetails:'A simple minesweeper game made using python and tkinter library.',
          skills:['Python'],
        },
        {
          projectname:'Littlelemon',
          projectdetails:'Demo functional api for a resturant order/delivery system. Offers delivery Crew, Manager, customer roles to access different endpoints',
          skills:['Python','Django'],
        },
        {
          projectname:'Tictactoe',
          projectdetails:'Tictactoe game that you can play against Computer THAT NEVER LOSES. or play against another player for fun.',
          skills:['Python'],
        },
        {
          projectname:'PartyRooms',
          projectdetails:'Underworks. A full fledged app that lets you host/join parties where users can enjoy playlists together',
          skills:['Python','Django','Reactjs'],
          wip:true
        }
      ]

function Projects() {

  const { projectsRef } = useContext(RefContext);
  const { scrollYProgress } = useScroll({target:projectsRef});
  const x = useTransform(scrollYProgress,[0.2,1],['0%','-104.6%']);  
  const opacity = useTransform(scrollYProgress,[0,0.15],[.1,1])
  const opacityText = useTransform(scrollYProgress,[0.18,0.35],[1,0])
  const y = useTransform(scrollYProgress,[0,0.15],[100,0]);

  const widthofcarousel = `${(projects.length*420)+800}px`;

  return (
    <div className="project-page" style={{height:widthofcarousel}} ref={projectsRef}>
      <motion.div style={{opacity,y}} transition={{ease:'easeOut',duration:0.7}}  className="project-wrap">
        <motion.div className="project-main">
          <motion.div style={{opacity:opacityText}} className="p-h-div">
            <span id='mtxt'>Some <span className='bold-font highlight'>Projects</span> I've made</span><br/>
            <div className='view-more-div'>
              <span>SCROLL DOWN TO VIEW MORE</span>
                <div className='view-more-icon'>
                  <svg width="29" height="40" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 25.4001C2 28.7418 3.31693 31.9469 5.66113 34.3098C8.00534 36.6729 11.1848 38 14.5 38C17.8152 38 20.9946 36.6729 23.3387 34.3098C25.683 31.9469 27 28.7418 27 25.4001V14.6001C27 11.2583 25.683 8.05352 23.3387 5.69054C20.9946 3.32758 17.8152 2 14.5 2C11.1848 2 8.00534 3.32758 5.66113 5.69054C3.31693 8.05352 2 11.2583 2 14.6001V25.4001Z" 
                  
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>

                    <path d="M14.5 9.19971V16.3997" 
                    
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                  </svg>

                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 13.6667L10 22L18 13.6667M2 2L10 10.3333L18 2" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                  </svg>
                </div>

            </div>
          </motion.div>

          {/* <div className='navigator-div'>
            <svg className="navigator key1" width="37" height="60" viewBox="0 0 37 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='navigator-svg' d="M14 30L37 53L30 60L-4.76837e-07 30L30 0L37 7L14 30Z"/>
            </svg>
            <svg className="navigator key2" width="37" height="60" viewBox="0 0 37 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='navigator-svg' d="M14 30L37 53L30 60L-4.76837e-07 30L30 0L37 7L14 30Z"/>
            </svg>
          </div> */}
        </motion.div>
        <ProjectCarousel x={x} projects={projects}/>
      </motion.div>
    </div>
  )
}

export default Projects
