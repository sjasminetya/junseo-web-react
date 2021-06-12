import React from 'react'
import { ImgArrival1, ImgArrival2, ImgArrival3 } from '../assets/images'

const NewArrival = () => {
    return (
        <section className="mt-44 container">
            <span className="font-semibold text-2xl text-black flex justify-center content-center">New Arrival in This Week</span>
            <div className="flex justify-between mt-3">
                <div>
                    <img src={ImgArrival1} className="img-arrival object-cover" alt="Flowly Square Dress" />
                    <p className="text-lg font-medium text-black text-center">Flowly Square Dress</p>
                </div>
                <div>
                    <img src={ImgArrival2} className="img-arrival object-cover" alt="Sweater Red Crop" />
                    <p className="text-lg font-medium text-black text-center">Sweater Red Crop</p>
                </div>
                <div>
                    <img src={ImgArrival3} className="img-arrival object-cover" alt="Double breasted blazer" />
                    <p className="text-lg font-medium text-black text-center">Double breasted blazer</p>
                </div>
            </div>
        </section>
    )
}

export default NewArrival
