import data from '../../data/adsHouse.json'
import React from 'react'
import '../../Styles/app.css'

function Banner(props) {
  console.log(data)
  return (
    <div className="banner-container-home">
      {<img src={props.picture} alt="ImageHome" />}
      <div className="text-home">{props.text}</div>
    </div>
  )
}

export default Banner
