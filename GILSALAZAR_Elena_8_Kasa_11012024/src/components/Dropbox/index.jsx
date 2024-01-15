import React, { useState } from 'react'
import '../../Styles/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Dropbox(props) {
  const [isExpanded, setIsExpanded] = useState(false)
  const expandContent = () => {
    setIsExpanded(true)
  }

  const hideContent = () => {
    setIsExpanded(false)
  }

  //For the list display, the content is determined as below
  var contentList = null
  if (props.contentList != null) {
    contentList = (
      <ul className="d-list">
        {props.contentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  } else {
    contentList = null
  }

  return (
    <div className="dropbox">
      <div className="info-card">
        {props.name}
        {isExpanded ? (
          <FontAwesomeIcon
            icon={faChevronDown}
            className="arrow-icon-down"
            onClick={() => hideContent()}
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronUp}
            className="arrow-icon-up"
            onClick={() => expandContent()}
          />
        )}
      </div>
      {isExpanded ? (
        <div className="expand-card">
          {props.content}
          {contentList}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Dropbox
