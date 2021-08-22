import React from 'react'
import { CatalogShoes, CatalogBags, CatalogClothing } from '../../../assets/images'
import { Header, Footer, Catalog } from '../../../components'

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
