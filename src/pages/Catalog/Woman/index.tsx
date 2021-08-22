import React, { useState, useEffect } from 'react'
import { WomanBags, WomanClothing, WomanShoes } from '../../../assets/images'
import { Header, Footer, Catalog, Loading } from '../../../components'

const WomanCatalog = () => {
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
                )
            }
            <Footer />
        </>
    )
}

export default WomanCatalog
