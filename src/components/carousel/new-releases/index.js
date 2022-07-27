import React, { useRef } from "react"
import { Link } from "react-router-dom"
import Rating from "../../rating"
import products from "../../../data/products"


import './styles.css'

import arrow from '../../../assets/arrow.png'


const NewReleases = () => {
    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }
    
    const handleRightClick = (e) => {
        e.preventDefault()
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }
    return (
        <div className="container">
          <div className="title">
            <h3>LANÇAMENTOS</h3>
          </div>
            <div className="carousel" ref={carousel}>
              {products.map((item) => {
                const { _id, name, brand, image, rating, reviews, price } = item

                return (
                  <div className="item" key={_id}>
                    <Link to={`/products/${_id}`}>
                      <div className="image">
                        <img src={image} alt={name} />
                      </div>
                    </Link>
                    <div className="shoptext">
                      <Link to={`/products/${_id}`}>
                          <h1><b>{brand}</b> {name}</h1>
                      </Link>
                      <Rating
                          value={rating}
                          text={`${reviews} Avaliações`}
                      />
                      <h3 className="price">R$ {price}</h3>
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
    )
}

export default NewReleases