import React from "react"
import { Link } from "react-router-dom"

import './styles.css'

// import products from "../../data/products"
import data from "../../data/productsjson.json"
import bandeira from '../../assets/bandeira-brasil.png'
import logo from '../../assets/logoG.png'
import SearchBar from "../search-bar"

const Header = () => {
  const products = data.products

  return (
    <div>
      <div className="announcement">
        <div className="bandeira">
          <img  alt="brasil" src={bandeira} />
          <small>Brasil rumo ao</small>
          <small className="gold">Hexa</small>
        </div>
        <div className="contact">
          <Link to="">
            <p className="whatsapp">
              <small>Entre em contato</small>
              <i className="fab fa-whatsapp"></i>
              <small>(99) 9 9999-9999</small>
            </p>
          </Link>
          <Link to="">
            <p className="instagram">
              <small></small>
              <i className="fab fa-instagram"></i>
              <small>@chuteiras</small>
            </p>
          </Link>
        </div>
      </div>
      
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="header-column">
              <Link to="/">
                <img alt="logo" src={logo} />
              </Link>
            </div>
            <div className="search-container">
              <SearchBar placeholder={'Encontre sua chuteira...'} data={products}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
