import React from 'react'
import '../../Styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating(prop) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    prop.rating > index ? (
      <FontAwesomeIcon
        className="rt-star rt-star-red"
        icon={faStar}
        key={index}
      />
    ) : (
      <FontAwesomeIcon
        className="rt-star rt-star-grey"
        icon={faStar}
        key={index}
      />
    )
  )

  return <div className="rt-container-star">{stars}</div>
}

export default Rating
