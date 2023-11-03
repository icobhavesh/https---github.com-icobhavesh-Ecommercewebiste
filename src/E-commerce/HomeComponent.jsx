import React from 'react'
// import Navbar from './Navbar'
import Product from './Product'
import Contact from './Contact'
import Footer from './Footer'
import Hero from '../Demoproject/Hero'

const HomeComponent = () => {
    return (
        <div>
          <Hero/>
        <Product/>
        <Contact/>
        <Footer/>
        </div>
    )
}

export default HomeComponent