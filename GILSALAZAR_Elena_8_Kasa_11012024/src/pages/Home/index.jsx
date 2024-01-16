import appartments from '../../data/adsHouse.json'
//import { Link } from 'react-router-dom'
import React from 'react'
import Banner from '../../components/Banner/index.jsx'
import '../../Styles/app.css'
import imgHome from '../../assets/img_home.png'
import Card from '../../components/Card/index.jsx'

function Home() {
  console.log(appartments)

  return (
    <div className="home-global">
      <div className="home-container">
        <Banner picture={imgHome} text="Chez vous, partout et ailleurs" />
      </div>
      <div className="ads-container">
        {appartments.map((item) => (
          <Card
            text={item.title}
            cover={item.cover}
            idAppartment={item.id}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
