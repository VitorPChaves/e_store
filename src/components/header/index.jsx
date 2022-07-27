import React from "react"
import { Link } from "react-router-dom"

import './styles.css'

import products from "../../data/products"
//import logo from '../../assets/logo2.png'
import logo from '../../assets/logoG.png'
import SearchBar from "../search-bar"

const Header = () => {
  return (
    <div>
      <div className="announcement ">
        <div className="contact">
            <p>
              contato@chuteiras.com
              <Link to="">
                <i className="fa fa-envelope"></i>
              </Link>
            </p>
            <p>
              (48) 9 9650-5517
              <Link to="">
                <i className="fab fa-whatsapp"></i>
              </Link>
            </p>
            
            
            <p>
              @chuteiras
              <Link to="">
                  <i className="fab fa-instagram"></i>
              </Link>
              </p>
        </div>
        {/* <div className="Social-Media"> 
            <Link to="">
                <i className="fab fa-instagram"></i>
            </Link>
            <Link to="">
                <i className="fab fa-facebook-f"></i>
            </Link>
        </div> */}
      </div>

      <div className="header">
        <div className="container">

          {/* MOBILE HEADER */}
          <div className="mobile-header">
            <div className="container ">
              <div className="row ">
                <div className="col-6 d-flex align-items-center">
                  <Link className="logo" to="/">
                    <img alt="logo" src={logo} />
                  </Link>
                </div>
                {/* <div className="col-6 d-flex align-items-center justify-content-end Login-Register">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="name-button dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-user"></i>
                    </button>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>

                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </div>
                  </div>
                  <Link to="/cart" className="cart-mobile-icon">
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </Link>
                </div> */}
                <div className="col-12 d-flex align-items-center">
                  <form className="input-group">
                    <input
                      type="search"
                      className="form-control rounded search"
                      placeholder="buscar"
                    />
                    <button type="submit" className="search-button">
                      Buscar chuteira
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP HEADER */}
          <div className="pc-header">
            <div className="row">
              <div className="header-column">
                <Link to="/">
                  <img alt="logo" src={logo} />
                </Link>
                
              </div>
              <div className="search-container">
                <SearchBar placeholder={'Buscar Chuteira'} data={products}/>
                {/* <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Buscar Chuteira"
                  />
                  <button type="submit" className="search-button">
                    <i class="fa fa-search"></i>
                    <b> Buscar</b>

                  </button>
                </form> */}
              </div>
              

              {/* <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, Admin Doe
                  </button>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>

                    <Link className="dropdown-item" to="#">
                      Logout
                    </Link>
                  </div>
                </div>

                <Link to="/cart">
                  <i className="fas fa-shopping-bag"></i>
                  <span className="badge">4</span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
