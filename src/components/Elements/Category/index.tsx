import React from 'react'
import { useHistory } from 'react-router-dom'
import { CategoryMen, CategoryWomen, CategoryKids } from '../../../assets/images'
import Fade from 'react-reveal/Fade'

const Category = () => {
    const history = useHistory()
    return (
        <section className="container mt-20">
            <Fade left>
                <span className="font-semibold text-2xl text-black flex justify-center content-center">Clothes Category</span>
                <div className="flex justify-between mt-3">
                    <div className="relative cursor-pointer" onClick={() => history.push("/men")}>
                        <img src={CategoryMen} className="img-arrival object-cover" alt="Flowly Square Dress" />
                        <p className="text-5xl font-bold text-white absolute top-80 left-28">MEN</p>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => history.push("/woman")}>
                        <img src={CategoryWomen} className="img-arrival object-cover" alt="Sweater Red Crop" />
                        <p className="text-5xl font-bold text-white absolute top-80 left-16">WOMAN</p>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => history.push("/kids")}>
                        <img src={CategoryKids} className="img-arrival object-cover" alt="Double breasted blazer" />
                        <p className="text-5xl font-bold text-white absolute top-80 left-28">KIDS</p>
                    </div>
                </div>
            </Fade>
        </section>
    )
}

export default Category
