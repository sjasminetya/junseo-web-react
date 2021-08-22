import React from 'react'
import { useRef } from 'react'
import { Blog, Category, MostPopular, NewArrival, Hero, Header, Footer } from '../../components'

const LandingPage = () => {
    const refNewArrival = useRef()
    return (
        <>
            <Header />
            <Hero refNewArrival={refNewArrival} />
            <NewArrival refNewArrival={refNewArrival} />
            <Category />
            <Blog />
            <MostPopular />
            <Footer />
        </>
    )
}

export default LandingPage
