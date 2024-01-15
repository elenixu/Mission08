import React from 'react'
import '../../Styles/app.css'

function Host(props) {
  return (
    <div className="h-container-global">
      <div className="h-container-text">
        <div className="h-text">{props.name.split(' ')[0]}</div>
        <div className="h-text">{props.name.split(' ')[1]}</div>
      </div>
      <div className="h-container-profilepic">
        <img src={props.profilePic} className="h-photo-profilepic" alt="" />
      </div>
    </div>
  )
}

export default Host
