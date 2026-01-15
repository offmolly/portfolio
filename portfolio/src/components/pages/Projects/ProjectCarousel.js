import React, { useState} from 'react'
import './ProjectCarousel.css'
import Card from './Card'
import { motion} from 'framer-motion'

function ProjectCarousel(props) {

  /*format:
      projectname : name of project (same as project image name!)
      projectdetails: details about the porject
      skills: skills used to complete the porject (list [])
  */
 
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} style={props.x?{x:props.x}:{}} className='carousel-div'>
        {props.projects.map((project,index)=>{
          const styleID = index%2===0?2:1;
          return(
            <Card styleID={styleID} projectname={project.projectname} projectdetails={project.projectdetails} skills={project.skills} wip={project.wip?true:false}/>
          )
        })}
    </motion.div>
  )
}

export default ProjectCarousel
