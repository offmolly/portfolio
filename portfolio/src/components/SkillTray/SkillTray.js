import React from 'react'
import './SkillTray.css'
import {motion} from 'framer-motion'

function SkillTray(props) {

const images = props.icons.map(image => {
    return <motion.img key={image} src={`/static/images/${image}.svg`} alt={`${image} icon`}/>
    });
  return (
    <div className="skilltray-div">
        <span className='size-xs font1'>
            {props.title}:
        </span>
        <div className='icontray-div'>
            {images}
        </div>
    </div>
  )
}

export default SkillTray
