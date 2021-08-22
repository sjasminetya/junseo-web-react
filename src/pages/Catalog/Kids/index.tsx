import React, { useState, useEffect } from 'react'
import { KidsClothing, KidsShoes, KidsBags } from '../../../assets/images'
import { Header, Footer, Catalog, Loading } from '../../../components'

const KidsCatalog = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <Header />
            {
                loading ? (
                    <Loading />
                ) : (
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
                )
            }
            <Footer />
        </>
    )
}

export default KidsCatalog
