import React from 'react'
import { Popular1, Popular2, Popular3, Popular4, Popular5, Popular6 } from '../../../assets/images'
import Bounce from 'react-reveal/Bounce'
import { AiOutlineRight } from 'react-icons/ai'

const MostPopular = () => {
    const images = [Popular1, Popular2, Popular3, Popular4, Popular5, Popular6]
    return (
        <section className="container mt-20">
            <span className="font-semibold text-2xl text-black flex justify-center content-center">Most Popular</span>
            <div className="row mt-3">
                {
                    images.map((val, i) => (
                        <Bounce bottom delay={200 * i}>
                            <div className="col-4" key={i}>
                                <img src={val} className="mb-3" alt="" />
                            </div>
                        </Bounce>
                    ))
                }
            </div>
            <div className="flex mt-6 justify-end">
                <span className="text-lg" style={{ color: "#777777" }}>View More</span>
                <AiOutlineRight size={32} color="#505050" />
            </div>
        </section>
    )
}

export default MostPopular
