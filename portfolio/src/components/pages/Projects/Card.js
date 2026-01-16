import React, { useEffect, useRef, useState } from 'react'
import CardSvg from './CardSvg'
import './Card.css'
import {motion, useInView } from 'framer-motion'

/**
 * 
 * @param {string} projectname name of the project
 * @param {string} projectdetails short description of the project
 * @param {number} styleId
 * @returns 
 */

const cardVariants = {
    hidden:{
        opacity:0.4,
        y:0,
        transition:{
            duration:0.4,
            ease:'easeInOut'
        }
    },
    nooverlay:{
        opacity:0,
        transition:{
            duration:0.2,
            ease:'linear'
        }
    },
    overlay:{
        opacity:0.75,
        transition:{
            duration:0.2,
            ease:'linear'
        }
    },
    visible:{
        opacity:1,
        y:-20,
        transition:{
            duration:0.4,
            ease:'easeInOut'
        }
    },
    tap:{
        scale:0.99
    },
    hover:{
        scale:1.02,
        transition:{
            ease:"easeInOut"
        }
    },
    linkhidden:{
        opacity:0
    },
    linkvisible:{
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.3,
            ease:"easeInOut"
        }
    }
}

const Card = (props) => {
    const cardRef = useRef(null);
    const [cardAmount,setCardAmount] = useState(0.7);
    const isinview = useInView(cardRef,{amount:cardAmount,margin:"0px -30% 0px -20%"});

    useEffect(()=>{
        if(window.innerWidth<600){
            setCardAmount(0.1)
        }
        else{
            setCardAmount(0.7)
        }
    },[])

    const [showLink,setShowLink] = useState(false);

  return (
    <motion.div tabIndex={0} initial="hidden" 
        animate={isinview?"visible":"hidden"} 
        whileHover={isinview?"hover":""}
        whileTap={isinview?"tap":""} 
        whileFocus={isinview?"hover":""} 
        variants={cardVariants} 
        ref={cardRef} 
        onMouseEnter={()=>{setShowLink(true)}}
        onMouseLeave={()=>{setShowLink(false)}}
        className={`card-main-div scheme${props.styleID}`}> 
        <div className='card-div'>
            <div className="img-div">
                {props.wip && (
                    <>
                        <motion.div  className='card-overlay'/>
                        <span className='wip font-1'>Work in progress</span>
                    </>
                )}
                {!props.wip && (
                    <>
                    {/* {showLink && (
                        <>
                            <motion.div variants={cardVariants} initial="nooverlay" animate={isinview?"overlay":""} className='card-overlay'/>
                            <motion.div variants={cardVariants} initial="linkhidden" animate={isinview?"linkvisible":""} className="crd-link-div">
                                <span className='font-1'>Github</span>
                                <img src={`${process.env.PUBLIC_URL}/static/images/link.svg`} alt="external link icon"/>
                            </motion.div>
                            
                        </>
                    )} */}
                    </>
                )}
                <img src={`${process.env.PUBLIC_URL}/static/images/${props.projectname}.png`} alt={`${props.projectname}`} />
            </div>

            <div className="info-div">
                <div className='details-div'>
                    <h3 className='prj-nm'>
                        {props.projectname}
                    </h3>
                    <p className='prj-det'>
                        {props.projectdetails}
                    </p>
                </div>
                <div className="skill-used-div">
                    {props.skills && (
                        <>
                        {props.skills.map((skill,index)=>{
                            return (
                            <div key={`${props.projectname} skill ${index}`} className='skill-tag'>
                                <span className='skill-tag-txt'>{skill}</span>
                            </div>
                            )
                        })}
                        </>
                    )}
                </div>
            </div>
        </div>
        <CardSvg/>
    </motion.div>
  )
}

export default Card
