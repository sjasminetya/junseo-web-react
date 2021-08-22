import React, { useState, useEffect } from 'react'
import { CatalogShoes, CatalogBags, CatalogClothing } from '../../../assets/images'
import { Header, Footer, Catalog, Loading } from '../../../components'

const MenCatalog = () => {
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
                )
            }
            <Footer />
        </>
    )
}

export default MenCatalog
