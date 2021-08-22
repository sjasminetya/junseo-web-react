import React from 'react'
import { WomanBags, WomanClothing, WomanShoes } from '../../../assets/images'
import { Header, Footer, Catalog } from '../../../components'

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
