import React from 'react'
import './index.scss'

const Footer = () => {
    return (
        <footer className="w-full h-80 relative">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-4">
                        <h1 className="text-white font-bold">JUNSEO</h1>
                        <p className="text-white font-thin">Only at Junseo Store you can shop for your fashion needs wherever you are, at any time, in complete safety and comfort. Happy Shopping!</p>
                    </div>
                    <div className="col-3">
                        <h6 className="font-medium text-lg text-white">Our Service</h6>
                        <p className="font-thin text-semi-white">Free Shipping</p>
                        <p className="font-thin text-semi-white">Cash On Delivery</p>
                        <p className="font-thin text-semi-white">Gift in every order</p>
                    </div>
                    <div className="col-4">
                        <h6 className="font-medium text-lg text-white">Contact Us</h6>
                        <p className="font-thin text-semi-white">Address: Bekasi, West Java</p>
                        <p className="font-thin text-semi-white">Phone: +62 8139 2657 117</p>
                        <p className="font-thin text-semi-white">Email: shaulajasminetya22@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-12 bg-black absolute bottom-0"></div>
        </footer>
    )
}

export default Footer
