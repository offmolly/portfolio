import React from 'react'
import './SkillTray.css'
import {motion} from 'framer-motion'

function SkillTray(props) {

const images = props.icons.map(image => {
    return <motion.img key={image} src={`${process.env.PUBLIC_URL}/static/images/${image}.svg`} alt={`${image} icon`}/>
    });
  return (
    <div className="skilltray-div">
        <span className='text-[18px]'>
            {props.title}:
        </span>
        <div className='icontray-div'>
            {images}
        </div>
    </div>
  )
}

export default SkillTray
