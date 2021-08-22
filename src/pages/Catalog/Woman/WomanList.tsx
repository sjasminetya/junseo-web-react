import React, { useState, useEffect } from 'react'
import { Header, Footer, Breadcrumb, Loading } from '../../../components'
import { useHistory, useLocation } from 'react-router-dom'
import products from '../../../json/products.json'
import { AiFillAlert } from 'react-icons/ai'

const WomanList = () => {
    const loc = useLocation()
    const history = useHistory()
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
                        <Breadcrumb inCategory={true} category="woman" catalog={loc.pathname.split("/")[2]} />
                        <div className="row">
                            {
                                products.Woman.map(val => (
                                    val.catalog === loc.pathname.split("/")[2] && (
                                        <div className="col-4 mt-3" onClick={() => history.push(`/${val.category}/${val.catalog}/${val._id}`)} key={val._id}>
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
                                loc.pathname.split("/")[2] === "bags" && (
                                    <div className="flex flex-col justify-center items-center" style={{ marginTop: 200, marginBottom: 185 }}>
                                        <AiFillAlert color="#000000" size={100} />
                                        <h3>This fiture is in development</h3>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                )
            }
            <Footer />
        </>
    )
}

export default WomanList
