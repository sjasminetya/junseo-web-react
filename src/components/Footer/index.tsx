import React from 'react'
import './index.scss'

const Footer = () => {
    return (
        <footer className="w-full h-auto relative">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-3">
                        <h1 className="text-white font-bold">JUNSEO</h1>
                        <p className="text-white font-thin">Only at Junseo Store you can shop for your fashion needs wherever you are, at any time, in complete safety and comfort. Happy Shopping!</p>
                    </div>
                    <div className="col-3" style={{ marginBottom: 88 }}>
                        <h6 className="font-medium text-lg text-white">Our Service</h6>
                        <p className="font-thin text-semi-white">Payment</p>
                        <p className="font-thin text-semi-white">Shipment</p>
                        <p className="font-thin text-semi-white">Exchange and Return</p>
                        <p className="font-thin text-semi-white">About Discounts</p>
                        <p className="font-thin text-semi-white">About Shipping</p>
                    </div>
                    <div className="col-3">
                        <h6 className="font-medium text-lg text-white">Help</h6>
                        <p className="font-thin text-semi-white">Costumer Service</p>
                        <p className="font-thin text-semi-white">Store Location</p>
                        <p className="font-thin text-semi-white">Account Security</p>
                        <p className="font-thin text-semi-white">Report Account</p>
                        <p className="font-thin text-semi-white">Report Order</p>
                    </div>
                    <div className="col-3">
                        <h6 className="font-medium text-lg text-white">Social Media</h6>
                        <p className="font-thin text-semi-white">Address: Magelang, Central Java</p>
                        <p className="font-thin text-semi-white">Phone: +62 81392657117</p>
                        <p className="font-thin text-semi-white">Email: junseostore@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-12 bg-black absolute bottom-0"></div>
        </footer>
    )
}

export default Footer
