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
                    source: "https://unsplash.com/@enginakyurt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    anotherSource: "https://unsplash.com/s/photos/woman-clothes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "engin akyurt"
                },
                {
                    image: WomanShoes,
                    title: "Shoes",
                    source: "https://unsplash.com/@veritysanders?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    anotherSource: "https://unsplash.com/s/photos/woman-shoes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Verity Sanders"
                },
                {
                    image: WomanBags,
                    title: "Bags",
                    source: "https://unsplash.com/@arnosenoner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    anotherSource: "https://unsplash.com/s/photos/bags?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Arno Senoner"
                }
            ]} />
            <Footer />
        </>
    )
}

export default WomanCatalog
