import React from 'react'
import '../../Styles/app.css'
import { Link } from 'react-router-dom'

function Card(props) {
  const image = props.cover

  const cardStyle = {
    backgroundImage: `url(${image})`,
  }

  const url = `/fichelogement/${props.idAppartment}`

  return (
    <Link to={url}>
      <div className="card-container" style={cardStyle}>
        <div className="card-content">
          {props.text}
          <div className="card-background"></div>
        </div>
      </div>
    </Link>
  )
}

export default Card
