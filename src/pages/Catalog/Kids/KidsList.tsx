import React from 'react'
import { Header, Footer, Breadcrumb } from '../../../components'
import products from '../../../json/products.json'
import { AiFillAlert } from 'react-icons/ai'
import { useLocation } from 'react-router-dom'

const KidsList = () => {
    const loc = useLocation()
    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default KidsList
