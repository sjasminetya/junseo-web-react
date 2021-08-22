import React from 'react'
import { ImgArrival1, ImgArrival2, ImgArrival3, Woman4 } from '../../../assets/images'
import Fade from 'react-reveal/Fade'
import { AiOutlineRight } from 'react-icons/ai'

type NewProps = {
    refNewArrival: any
}

const NewArrival: React.FC<NewProps> = (props) => {
    return (
        <section className="mt-44 container" ref={props.refNewArrival}>
            <Fade left>
                <span className="font-semibold text-2xl text-black flex justify-center content-center">New Arrival in This Week</span>
                <div className="flex justify-between mt-3">
                    <div className="row">
                        <div className="col-3">
                            <div className="zoom">
                                <figure>
                                    <img src={ImgArrival1} className="img-arrival object-cover" alt="Flowly Square Dress" />
                                </figure>
                            </div>
                            <p className="text-lg font-medium text-black text-center">Flowly Square Dress</p>
                        </div>
                        <div className="col-3">
                            <div className="zoom">
                                <figure>
                                    <img src={ImgArrival2} className="img-arrival object-cover" alt="Sweater Red Crop" />
                                </figure>
                            </div>
                            <p className="text-lg font-medium text-black text-center">Sweater Red Crop</p>
                        </div>
                        <div className="col-3">
                            <div className="zoom">
                                <figure>
                                    <img src={ImgArrival3} className="img-arrival object-cover" alt="Double breasted blazer" />
                                </figure>
                            </div>
                            <p className="text-lg font-medium text-black text-center">Double breasted blazer</p>
                        </div>
                        <div className="col-3">
                            <div className="zoom">
                                <figure>
                                    <img src={Woman4} className="img-arrival object-cover" alt="Blazer" />
                                </figure>
                            </div>
                            <p className="text-lg font-medium text-black text-center">Blazer</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-6 justify-end">
                    <span className="text-lg" style={{ color: "#777777" }}>View More</span>
                    <AiOutlineRight size={32} color="#505050" />
                </div>
            </Fade>
        </section>
    )
}

export default NewArrival
