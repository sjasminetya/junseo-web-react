import React, { useState, useEffect } from 'react'
import { Header, Footer, Breadcrumb, Loading } from '../../../components'
import products from '../../../json/products.json'
import { AiFillAlert } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const KidsList = () => {
    const loc = useLocation()
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
                    <section className="container mt-20">
                        <Breadcrumb inCategory={true} category="kids" catalog={loc.pathname.split("/")[2]} />
                        {
                            products.kids.length <= 0 && (
                                <div className="flex flex-col justify-center items-center" style={{ marginTop: 200, marginBottom: 185 }}>
                                    <AiFillAlert color="#000000" size={100} />
                                    <h3>This fiture is in development</h3>
                                </div>
                            )
                        }
                    </section>
                )
            }
            <Footer />
        </>
    )
}

export default KidsList
