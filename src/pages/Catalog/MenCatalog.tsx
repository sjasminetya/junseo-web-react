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
                    source: ""
                },
                {
                    image: CatalogShoes,
                    title: "Shoes",
                    source: ""
                },
                {
                    image: CatalogBags,
                    title: "Bags",
                    source: ""
                }
            ]} />
            <Footer />
        </>
    )
}

export default MenCatalog
