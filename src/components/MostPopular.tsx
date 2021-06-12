import React from 'react'
import {Popular1, Popular2, Popular3, Popular4, Popular5, Popular6} from '../assets/images'

const MostPopular = () => {
    return (
        <section className="container mt-20">
            <span className="font-semibold text-2xl text-black flex justify-center content-center">Most Popular</span>
            <div className="row mt-3">
                <div className="col-4">
                    <img src={Popular1} alt="" />
                </div>
                <div className="col-4">
                    <img src={Popular2} alt="" />
                </div>
                <div className="col-4">
                    <img src={Popular3} alt="" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={Popular4} alt="" />
                </div>
                <div className="col-4">
                    <img src={Popular5} alt="" />
                </div>
                <div className="col-4">
                    <img src={Popular6} alt="" />
                </div>
            </div>
        </section>
    )
}

export default MostPopular
