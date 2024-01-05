import React from 'react'
import '../../Styles/app.css'

function Tag(prop) {
  return (
    <div className="t-global-container">
      <div className="t-text-container">{prop.text}</div>
    </div>
  )
}

export default Tag
