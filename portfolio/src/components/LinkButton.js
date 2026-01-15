import { Link } from "react-router-dom"
import '../App.css'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

//takes src , alt as props

function LinkButton(props) {
  const [style,setStyle] = useState();
  useEffect(()=>{
    if(props.topbtn){
      setStyle({background:'var(--primary-color)'});
    }
  },[props])

  console.log(props.src)

  return (
    <motion.div variants={props.animationVariant} className="link-bttn">
        <Link tabIndex={0} to={props.linkto} target={props.target?"_blank":""}>
            <motion.button whileHover={{opacity:0.5,transition:{duration:0.2,ease:'linear'}}} whileTap={{scale:0.93}} style={style}> 
                <img style={{position:"absolute"}} src={props.src} alt={`${props.alt} icon`}/>     
            </motion.button>
        </Link> 
    </motion.div>
  )
}

export default LinkButton
