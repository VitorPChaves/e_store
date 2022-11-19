import React, { useRef } from "react"
import { Link } from "react-router-dom"
import './styles.css'

import arrow from '../../assets/arrow.png'

const ProductsCarousel = ({data, title}) => {
    const carousel = useRef(null)

    const handleLeftClick = (event) => {
        event.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const handleRightClick = (event) => {
        event.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div className="container">
            <div className="carousel-container">
                <div className="title">
                    <h6>{title}</h6>
                </div>
                <div className="carousel" ref={carousel}>
                    {data.map((item) => {
                        const { id, name, brand, soleplate, images, price } = item

                        return (
                            <div>
                                <div>
                                    <Link to={`/chuteiras/${id}`} onClick={window.scrollTo(0, 0)}>
                                        <div className="item" key={id}>
                                            <div className="image">
                                                <img src={images[0]} alt={name} />
                                            </div>
                                            <div className="item-info">
                                                <h1><b>{brand}</b> {name}</h1>
                                                <h2>{soleplate}</h2>
                                                <h3>R$ {price}</h3>
                                            </div>
                                        </div>  
                                    </Link>
                                </div>
                            </div>
                        )      
                    })}
                </div>
                <div className="buttons">
                    <button onClick={handleLeftClick}>
                        <img src={arrow} alt="Scroll Right" />
                    </button>
                    <button onClick={handleRightClick}>
                        <img src={arrow} alt="Scroll Left" />
                    </button>
                </div>  
            </div>
        </div>
    )
}

export default ProductsCarousel