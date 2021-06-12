import React from 'react'
import Blog from '../components/Blog'
import Category from '../components/Category'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MostPopular from '../components/MostPopular'
import NewArrival from '../components/NewArrival'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <NewArrival />
            <Category />
            <Blog />
            <MostPopular />
            <Footer />
        </>
    )
}

export default LandingPage
