import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom' // Assuming you are using React Router

import logoKasaHeader from '../../assets/logokasa_header.png'
import '../../Styles/app.css'

function Header() {
  const location = useLocation()
  const [activeLink, setActiveLink] = useState(null)

  // Update activeLink based on the current pathname
  useEffect(() => {
    const pathname = location.pathname
    setActiveLink(pathname === '/' ? 'accueil' : pathname.replace('/', ''))
  }, [location])

  return (
    <div className="header-container">
      <div className="Logo-container">
        <Link to="/">
          <img src={logoKasaHeader} alt="Header logo Kasa" />
        </Link>
      </div>
      <div className="links-container">
        <Link
          to="/"
          className={activeLink === 'accueil' ? 'active' : ''}
          onClick={() => setActiveLink('accueil')}
        >
          Accueil
        </Link>
        <Link
          to="/apropos"
          className={activeLink === 'apropos' ? 'active' : ''}
          onClick={() => setActiveLink('apropos')}
        >
          A Propos
        </Link>
      </div>
    </div>
  )
}

export default Header
