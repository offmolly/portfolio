import React, { useState} from 'react'
import './ProjectCarousel.css'
import Card from './Card'
import { motion} from 'framer-motion'

function ProjectCarouselV2(props) { 
  return (
    <motion.div drag="x" dragConstraints={{right:0,left:0}} style={props.x?{x:props.x}:{}} className='carousel-div'>
        {props.projects.map((project,index)=>{
          const styleID = index%2===0?2:1;
          return(
            <Card styleID={styleID} projectname={project.projectname} projectdetails={project.projectdetails} skills={project.skills}/>
          )
        })}
    </motion.div>
  )
}

export default ProjectCarouselV2
