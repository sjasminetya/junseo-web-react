import React, { useState } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { Woman, Woman1, Woman2, Woman3, Woman4, Woman5 } from '../../assets/images'
import './index.scss'

const Carousel = () => {
    const [image, setImage] = useState([Woman, Woman1, Woman2, Woman3, Woman4, Woman5])
    const [currImage, setCurrImage] = useState(0)

    const previousSlide = () => {
        const lastIndex = image.length - 1;
        const shouldResetIndex = currImage === 0;
        const index = shouldResetIndex ? lastIndex : currImage - 1;

        setCurrImage(index)
    }

    const nextSlide = () => {
        const lastIndex = image.length - 1;
        const shouldResetIndex = currImage === lastIndex;
        const index = shouldResetIndex ? 0 : currImage + 1;

        setCurrImage(index)
    }

    const Arrow = ({ direction, clickFunction, icon }) => (
        <div
            className={`slide-arrow ${direction}`}
            onClick={clickFunction}>
            {icon}
        </div>
    );

    const ImageSlide = ({ url }) => {
        const styles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };

        return (
            <div className="image-slide" style={styles}></div>
        );
    }
    return (
        <div className="carousel">
            <Arrow
                direction="right"
                clickFunction={previousSlide}
                icon={<RiArrowLeftSLine size={30} />}
            />
            <ImageSlide url={image[currImage]} />
            <Arrow
                direction="right"
                clickFunction={nextSlide}
                icon={<RiArrowRightSLine size={30} />}
            />
        </div>
    )
}

export default Carousel
