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
                    hasSource: true,
                    source: "https://unsplash.com/@ubyyanes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Uby Yanes"
                },
                {
                    image: KidsShoes,
                    title: "shoes",
                    hasSource: true,
                    source: "https://unsplash.com/@seffen99?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Sven Brandsma"
                },
                {
                    image: KidsBags,
                    title: "bags",
                    hasSource: true,
                    source: "https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
                    name: "Kelly Sikkema"
                }
            ]} />
            <Footer />
        </>
    )
}

export default KidsCatalog
