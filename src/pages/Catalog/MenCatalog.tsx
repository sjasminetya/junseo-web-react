import React from 'react'
import Catalog from '../../components/Catalog'
import { CatalogShoes, CatalogBags, CatalogClothing } from '../../assets/images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const MenCatalog = () => {
    return (
        <>
            <Header />
            <Catalog type="Men" images={[
                {
                    image: CatalogClothing,
                    title: "Clothing",
                    hasSource: false
                },
                {
                    image: CatalogShoes,
                    title: "Shoes",
                    hasSource: false
                },
                {
                    image: CatalogBags,
                    title: "Bags",
                    hasSource: false
                }
            ]} />
            <Footer />
        </>
    )
}

export default MenCatalog
