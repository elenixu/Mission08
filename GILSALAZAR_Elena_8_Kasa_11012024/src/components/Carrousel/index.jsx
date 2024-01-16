import React, { useState } from 'react'
import '../../Styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

function Carrousel(props) {
  console.log(props.listePics)

  //We get the picture list from the props
  const listePics = props.listePics

  //We calculate the size of the list using the property ".length"
  const lengthOfPics = listePics.length

  const [currentIndex, setCurrentIndex] = useState(1)
  const buttonClickLeft = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1)
      console.log('Current Index:', currentIndex)
    } else {
      setCurrentIndex(lengthOfPics)
    }
  }
  const buttonClickRight = () => {
    if (currentIndex < lengthOfPics) {
      setCurrentIndex(currentIndex + 1)
      console.log('Current Index:', currentIndex)
    } else {
      setCurrentIndex(1)
    }
  }
  return (
    <div className="cr-container-global">
      <div className="cr-container-image">
        <img src={listePics[currentIndex - 1]} alt="" className="cr-image" />
        <div className="cr-container-arrows">
          {lengthOfPics !== 1 && (
            <button className="cr-arrow" onClick={buttonClickLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          )}
          {lengthOfPics !== 1 && (
            <div className="cr-container-numbers">
              {currentIndex}/{lengthOfPics}
            </div>
          )}
          {lengthOfPics !== 1 && (
            <button className="cr-arrow" onClick={buttonClickRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Carrousel
