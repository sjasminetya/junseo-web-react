import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Header, Footer, Breadcrumb, Button, Loading, Carousel } from '../../../components'
import products from '../../../json/products.json'
import formatNumber from '../../../utils/formatNumber'
import { addToChart } from '../../../redux/action'
import { useDispatch } from 'react-redux'
import { notification } from 'antd'
import AwesomeSlider from 'react-awesome-slider'
import { Woman, Woman1, Woman2, Woman3, Woman4, Woman5 } from '../../../assets/images'
import { AiOutlineStar } from 'react-icons/ai'
import 'react-awesome-slider/dist/styles.css'
import './index.scss'

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
                                    <img src={detail?.image} className="object-cover img-detail" alt={detail?.name} />
                                </div>
                                <div className="col-6">
                                    <Breadcrumb inCategory={true} inDetail={true} category="Woman" catalog={catalog} title={detail?.name} />
                                    <h1 className="font-light" style={{ paddingTop: 10 }}>{detail?.name}</h1>
                                    <div className="flex mt-5">
                                        <h2 style={{ color: "#A80038" }}>Rp. {formatNumber(discount / 100 * Number(price))}</h2>
                                        <h5 className="pt-2 pl-5 line-through" style={{ color: "#A3A3A3" }}>{detail?.price}</h5>
                                        <span className="pl-3 pt-2 font-extralight">30% OFF & FREE SHIPPING </span>
                                    </div>
                                    <div className="coupon">
                                        <p>Hurry Up, Time Is Running Out</p>
                                        <p>USE CODE: <b>AUDE0804</b></p>
                                        <p className="font-semibold">Up to 50% off for all shirt & blouse</p>
                                    </div>
                                    <div className="flex justify-between" style={{ marginBottom: 13 }}>
                                        <p className="font-extralight" style={{ color: "#A80038" }}>*It is important to check the size of the clothes before purchasing it.</p>
                                        <p className="underline">Size Guide</p>
                                    </div>
                                    <div className="mt-5 flex">
                                        <div className="w-1/4">
                                            <p className="text-lg">Size</p>
                                        </div>
                                        <div className="w-2/4 flex">
                                            <Button type="Button" className="border-2 border-black w-12 h-10" radius="4">
                                                {detail?.size[0]}
                                            </Button>
                                            <Button type="Button" className="border-2 border-black w-12 h-10 ml-2" radius="4">
                                                {detail?.size[1]}
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
                                    <div className="flex justify-between">
                                        <Button type="submit" className="w-full h-10 text-black mt-4" style={{ backgroundColor: "#EFECEC" }} radius="4" onClick={() => {
                                            toggle()
                                            openNotification()
                                        }}>
                                            Add to cart
                                        </Button>
                                        <Button type="submit" className="h-10 text-black mt-4 flex justify-center items-center" style={{ backgroundColor: "#EFECEC", width: 76, marginLeft: 25 }} radius="4" onClick={() => {
                                            toggle()
                                            openNotification()
                                        }}>
                                            <AiOutlineStar size={20} />
                                        </Button>
                                    </div>
                                    <Button type="Button" className="w-full h-10 text-white mt-4" isBlack radius="4">
                                        Buy
                                    </Button>
                                    <div className="flex justify-center" style={{ marginTop: 35 }}>
                                        <p className="font-medium">PRODUCT DESCRIPTION</p>
                                        <p className="font-medium" style={{ paddingLeft: 30 }}>REVIEW</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="w-full pt-12">
                            <hr />
                            <section className="container">
                                <h3 className="text-center font-semibold">You May Also Like</h3>
                                {/* <AwesomeSlider>
                                    {
                                        images.map((val, i) => (
                                            <div key={i}>
                                                <img src={val} alt="" className="object-cover" style={{ width: 400, height: 600, marginBottom: 20 }} />
                                            </div>
                                        ))
                                    }
                                </AwesomeSlider> */}
                                <Carousel />
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
