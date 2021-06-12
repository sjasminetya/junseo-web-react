import React from 'react'
import Button from '../Button'
import { IconGift, IconShoppingBag, IconTruck } from '../../assets/images'
import './index.scss'

const Hero = () => {
    return (
        <section className="w-full section-hero">
            <div className="container" style={{ paddingTop: 180 }}>
                <h1 className="font-bold" style={{ width: 734 }}>Discover a Wide Collection of Interesting Clothes in JUNSEO Store</h1>
                <p style={{ width: 533 }}>Only at Junseo Store you can shop for your fashion needs wherever you are, at any time, in complete safety and comfort. Happy Shopping!</p>
                <Button radius="10" type="Button" className="border border-white w-36 h-12">
                    <span className="flex justify-center content-center">Shopping Now</span>
                </Button>
                <div className="flex justify-between" style={{ marginTop: 120 }}>
                    <Button isShadow radius="10" type="Button" isWhite className="w-80 h-40">
                        <div className="flex">
                            <div className="ml-4">
                                <IconTruck />
                            </div>
                            <div className="pt-4 pl-3">
                                <h6 className="text-base text-black text-left">Free Shipping</h6>
                                <h6 className="text-xs text-semi-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h6>
                            </div>
                        </div>
                    </Button>
                    <Button isShadow radius="10" type="Button" isWhite className="w-80 h-40">
                        <div className="flex">
                            <div className="ml-4 mt-1">
                                <IconGift />
                            </div>
                            <div className="pl-3 pt-1">
                                <h6 className="text-base text-black text-left">Cash On Delivery</h6>
                                <h6 className="text-xs text-semi-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h6>
                            </div>
                        </div>
                    </Button>
                    <Button isShadow radius="10" type="Button" isWhite className="w-80 h-40 mb-5">
                        <div className="flex">
                            <div className="ml-4 mt-1">
                                <IconShoppingBag />
                            </div>
                            <div className="pl-3 pt-1">
                                <h6 className="text-base text-black text-left">Gift in every order</h6>
                                <h6 className="text-xs text-semi-black text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h6>
                            </div>
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Hero
