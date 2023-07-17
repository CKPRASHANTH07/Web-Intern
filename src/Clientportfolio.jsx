import React from 'react'
import Navbar from './homecomponents/Navbar'
import Ourclientss from './ClientPortfoliocomponents/Ourclientss'
import Oursuppliers from './ClientPortfoliocomponents/Oursuppliers'
import Footer from './homecomponents/footer'

export default function Clientportfolio() {
  return (
    <div>
      <Navbar/>
      <Ourclientss />
      <Oursuppliers />
      <Footer />
    </div>
  )
}
