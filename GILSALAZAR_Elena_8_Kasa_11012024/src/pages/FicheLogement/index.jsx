import * as React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Dropbox from '../../components/Dropbox'
import adsHouse from '../../data/adsHouse.json'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Error from '../../pages/Error'

function FicheLogement() {
  let { idAppartment } = useParams()
  console.log(idAppartment)
  const appartment = adsHouse.find(
    (appartment) => appartment.id === idAppartment
  )

  const navigate = useNavigate()
  React.useEffect(() => {
    if (!appartment) {
      navigate('/error')
    }
  }, [appartment, navigate])

  console.log('Appartement filtered : ')
  console.log(appartment)

  if (!appartment) {
    return <Error />
  }

  const listePics = appartment.pictures
  const titles = appartment.title
  const hostName = appartment.host.name
  const hostPic = appartment.host.picture
  const descLog = appartment.description
  const equipList = appartment.equipments
  const location = appartment.location

  return (
    <div className="fl-container">
      <Carrousel listePics={listePics}></Carrousel>
      <div className="fl-infotext-profilepic-desktop">
        <div className="fl-info-text-desktop">
          <div className="fl-info-title-desktop">{titles}</div>
          <div className="fl-info-subtitle-desktop">{location}</div>
        </div>
        <Host name={hostName} profilePic={hostPic}></Host>
      </div>
      <div className="fl-infotext-tags-mobile">
        <div className="fl-info-text-mobile">
          <div className="fl-info-title-mobile">{titles}</div>
          <div className="fl-info-subtitle-mobile">{location}</div>
        </div>
        <div className="fl-tag-container-mobile">
          {appartment.tags.map((item, index) => (
            <Tag text={item} key={item + index}></Tag>
          ))}
        </div>
      </div>
      <div className="fl-tagrating-container-desktop">
        <div className="fl-tag-container-desktop">
          {appartment.tags.map((item, index) => (
            <Tag text={item} key={item + index}></Tag>
          ))}
        </div>
        <div className="fl-rating-container-desktop">
          <Rating rating={appartment.rating}></Rating>
        </div>
      </div>
      <div className="fl-rating-profilepic-mobile">
        <div className="fl-rating-container-mobile">
          <Rating rating={appartment.rating}></Rating>
          <Host name={hostName} profilePic={hostPic}></Host>
        </div>
      </div>
      <div className="fl-dropbox-container">
        <Dropbox name="Description" content={descLog}></Dropbox>
        <Dropbox name="Équipements" contentList={equipList}></Dropbox>
      </div>
    </div>
  )
}

export default FicheLogement
