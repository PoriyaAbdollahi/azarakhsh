import React from 'react'

const Circleicon = (prop) => {
  return (
    <svg className="absolute top-0 left-0 mx-1 my-1" width="150" height="150" viewBox="0 0 195 195" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.25" cx="97.5" cy="97.5" r="97.5" fill={prop.color}/>
</svg>
  )
}

export default Circleicon