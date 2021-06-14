import React from 'react'
import Catalog from '../../components/Catalog'
import { CatalogShoes, CatalogBags, CatalogClothing } from '../../assets/images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MenCatalog = () => {
    return (
        <>
            <Header />
            <Catalog type="men" images={[
                {
                    image: CatalogClothing,
                    title: "clothing",
                    hasSource: false
                },
                {
                    image: CatalogShoes,
                    title: "shoes",
                    hasSource: false
                },
                {
                    image: CatalogBags,
                    title: "bags",
                    hasSource: false
                }
            ]} />
            <Footer />
        </>
    )
}

export default MenCatalog
