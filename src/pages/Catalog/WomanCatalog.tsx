import React from 'react'
import Catalog from '../../components/Catalog'
import { WomanBags, WomanClothing, WomanShoes } from '../../assets/images'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const WomanCatalog = () => {
    return (
        <>
            <Header />
            <Catalog type="Woman" images={[
                {
                    image: WomanClothing,
                    title: "Clothing",
                    hasSource: true,
                    source: "https://unsplash.com/@iamkrishh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Krishh"
                },
                {
                    image: WomanShoes,
                    title: "Shoes",
                    hasSource: true,
                    source: "https://unsplash.com/@veritysanders?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Verity Sanders"
                },
                {
                    image: WomanBags,
                    title: "Bags",
                    hasSource: true,
                    source: "https://unsplash.com/@arnosenoner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Arno Senoner"
                }
            ]} />
            <Footer />
        </>
    )
}

export default WomanCatalog
