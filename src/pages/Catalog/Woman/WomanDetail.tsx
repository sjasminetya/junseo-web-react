import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Footer, Breadcrumb, Button, Loading } from '../../../components'
import products from '../../../json/products.json'
import formatNumber from '../../../utils/formatNumber'
import { addToChart } from '../../../redux/action'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import AwesomeSlider from 'react-awesome-slider'
import { Woman, Woman1, Woman2, Woman3, Woman4, Woman5 } from '../../../assets/images'
import 'react-awesome-slider/dist/styles.css'

const WomanDetail = () => {
    const { _id, catalog } = useParams<{ _id: string, catalog: string }>()
    const [detail, setDetail] = useState<{ _id: string, name: string, price: string, size: string[], color: string[], image: string }>()
    const discount: number = 100 - 30
    const price: string = `${detail?.price.split(".")[1]}${detail?.price.split(".")[2]}`
    const dispatch = useDispatch()
    const images = [Woman, Woman1, Woman2, Woman3, Woman4, Woman5]
    const [loading, setLoading] = useState(false)

    const openNotification = () => {
        notification.info({
            message: 'Berhasil ditambahkan',
            description: `${detail?.name} berhasil ditambahkan kedalam cart :)`,
            placement: 'topRight',
            duration: 3
        });
    };

    const toggle = () => {
        dispatch(addToChart(detail))
    }

    useEffect(() => {
        if (!detail) {
            // eslint-disable-next-line array-callback-return
            products.Woman.map(val => {
                if (val._id === _id) {
                    setDetail(val)
                }
            })
        }
    }, [_id, detail])

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
                    <>
                        <section className="container mt-20">
                            <div className="row">
                                <div className="col-6">
                                    <img src={detail?.image} className="object-cover" alt={detail?.name} />
                                </div>
                                <div className="col-6">
                                    <Breadcrumb inCategory={true} inDetail={true} category="Woman" catalog={catalog} title={detail?.name} />
                                    <h1 className="font-light">{detail?.name}</h1>
                                    <div className="flex mt-5">
                                        <h2 style={{ color: "#A80038" }}>Rp. {formatNumber(discount / 100 * Number(price))}</h2>
                                        <h5 className="text-gray-500 pt-2 pl-5 line-through">{detail?.price}</h5>
                                        <span className="pl-3 pt-2">30% OFF & FREE SHIPPING </span>
                                    </div>
                                    <div className="mt-5 flex">
                                        <div className="w-1/4">
                                            <p className="text-lg">Size</p>
                                        </div>
                                        <div className="w-2/4">
                                            <Button type="Button" className="border-2 border-black w-12 h-10" radius="4">
                                                {detail?.size[0]}
                                            </Button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="mt-5 flex">
                                        <div className="w-1/4">
                                            <p className="text-lg">Color</p>
                                        </div>
                                        <div className="w-2/4 flex">
                                            <Button type="Button" className="border-2 border-black w-20 h-10" radius="4">
                                                {detail?.color[0]}
                                            </Button>
                                        </div>
                                    </div>
                                    <hr />
                                    <Button type="submit" className="w-full h-10 text-white bg-gray-600 mt-4" radius="4" onClick={() => {
                                        toggle()
                                        openNotification()
                                    }}>
                                        Add to cart
                                    </Button>
                                    <Button type="Button" className="w-full h-10 text-white mt-4" isBlack radius="4">
                                        Buy
                                    </Button>
                                </div>
                            </div>
                        </section>
                        <div className="w-full pt-12">
                            <hr />
                            <section className="container">
                                <h3 className="text-center">You May Also Like</h3>
                                <AwesomeSlider>
                                    {
                                        images.map((val, i) => (
                                            <div key={i}>
                                                <img src={val} alt="" className="object-cover" style={{ width: 400, height: 600 }} />
                                            </div>
                                        ))
                                    }
                                </AwesomeSlider>
                            </section>
                        </div>
                    </>
                )
            }
            <Footer />
        </>
    )
}

export default WomanDetail
