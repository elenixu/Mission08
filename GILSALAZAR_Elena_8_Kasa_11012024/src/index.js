import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

import APropos from './pages/APropos'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'
import Home from './pages/Home'
import GlobalStyle from './components/Globalstyles'

const root = document.getElementById('root')
const rootElement = createRoot(root)

rootElement.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/fichelogement/:idAppartment"
          element={<FicheLogement />}
        />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
