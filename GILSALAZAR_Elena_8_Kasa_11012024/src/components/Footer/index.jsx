import React from 'react'
import logo from '../../assets/logo_footer.png'
import copMobile from '../../assets/c_footer_mobile.png'
import copDesktop from '../../assets/c_footer_desktop.png'
import '../../Styles/app.css'

function Footer() {
  return (
    <div>
      <div className="footer-global">
        <div className="footer-container">
          <img src={logo} alt="Footer logo Kasa" />
        </div>
        <div className="cop-desktop">
          <img src={copDesktop} alt="Footer logo Kasa" />
        </div>
        <div className="cop-mobile">
          <img className="cop-mobile" src={copMobile} alt="Footer logo Kasa" />
        </div>
      </div>
    </div>
  )
}

export default Footer
