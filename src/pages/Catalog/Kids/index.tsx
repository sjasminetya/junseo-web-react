import React from 'react'
import { KidsClothing, KidsShoes, KidsBags } from '../../../assets/images'
import { Header, Footer, Catalog } from '../../../components'

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
