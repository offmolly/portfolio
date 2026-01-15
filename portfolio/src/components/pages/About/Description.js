import React from 'react'

function Description(props) {
  return (
    <div className='desc-div font1'>
        <p className='desc-txt'>
            {props.text}
        </p>
    </div>
  )
}

export default Description
