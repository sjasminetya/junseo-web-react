import React from 'react'
import { Header, Footer, Breadcrumb } from '../../../components'
import { useLocation } from 'react-router-dom'
import products from '../../../json/products.json'
import { AiFillAlert } from 'react-icons/ai'

const MenList = () => {
    const loc = useLocation()
    return (
        <>
            <Header />
            <section className="container mt-20">
                <Breadcrumb inCategory={true} category="men" catalog={loc.pathname.split("/")[2]} />
                <div className="row">
                    {
                        products.men.map(val => (
                            val.catalog === loc.pathname.split("/")[2] && (
                                <div className="col-4 mt-3">
                                    <img src={val.image} alt={val.name} className="object-cover rounded cursor-pointer" style={{ width: 400, height: 400 }} />
                                    <div className="bg-white text-black mt-2 mb-5" style={{ width: 400 }}>
                                        <h6 style={{ color: "rgba(0, 0, 0, 0.5)" }}>{val.name}</h6>
                                        <h6>{val.price}</h6>
                                    </div>
                                </div>
                            )
                        ))
                    }
                    {
                        loc.pathname.split("/")[2] === "bags" || loc.pathname.split("/")[2] === "shoes" ? (
                            <div className="flex flex-col justify-center items-center" style={{ marginTop: 200, marginBottom: 185 }}>
                                <AiFillAlert color="#000000" size={100} />
                                <h3>This fiture is in development</h3>
                            </div>
                        ) : (
                            null
                        )
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MenList
