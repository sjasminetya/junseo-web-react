import React from 'react'
import Catalog from '../../components/Catalog'
import { WomanBags, WomanClothing, WomanShoes } from '../../assets/images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const WomanCatalog = () => {
    return (
        <>
            <Header />
            <Catalog type="woman" images={[
                {
                    image: WomanClothing,
                    title: "clothing",
                    hasSource: false
                },
                {
                    image: WomanShoes,
                    title: "shoes",
                    hasSource: false
                },
                {
                    image: WomanBags,
                    title: "bags",
                    hasSource: false
                }
            ]} />
            <Footer />
        </>
    )
}

export default WomanCatalog
