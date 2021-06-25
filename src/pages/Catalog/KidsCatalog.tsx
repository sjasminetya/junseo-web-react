import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Catalog from '../../components/Catalog'
import { KidsClothing, KidsShoes, KidsBags } from '../../assets/images'

const KidsCatalog = () => {
    return (
        <>
            <Header />
            <Catalog type="kids" images={[
                {
                    image: KidsClothing,
                    title: "clothing",
                    hasSource: false
                },
                {
                    image: KidsShoes,
                    title: "shoes",
                    hasSource: false
                },
                {
                    image: KidsBags,
                    title: "bags",
                    hasSource: false
                }
            ]} />
            <Footer />
        </>
    )
}

export default KidsCatalog
