import React from "react"
import { Link } from "react-router-dom"
import './styles.css'

import safebrowsing from '../../assets/safe_browsing.png'
import safebuy from '../../assets/protected_website.webp'

//a porta do mundo em D

const Footer = () => {
  return (
    <div>
      <div className="footer-announcement">
        <p>Faça seu pedido pelo WhatsApp</p>
        <i className="fab fa-whatsapp"></i>
        <p>e pague com PIX</p>
      </div>
      <div className="footer">
          <div className="about">
            <h1>Sobre Nós</h1>
            <Link to="/sobre" onClick={window.scrollTo(0, 0)}>
              <p>Nossos Serviços</p>
            </Link>
            <Link to="/contato" onClick={window.scrollTo(0, 0)}>
              <p>Fale Conosco</p>
            </Link>
            <Link to="/envio" onClick={window.scrollTo(0, 0)}>
              <p>Envio e Entrega</p>
            </Link>
            <Link to="/privacidade" onClick={window.scrollTo(0, 0)}>
              <p>Política de Privacidade</p>
            </Link>
          </div>
          <div className="help">
            <h1>Ajuda</h1>
            <Link to="/reembolso" onClick={window.scrollTo(0, 0)}>
              <p>Política de Reembolso e Devolução</p>
            </Link>
            <p><i className="fa fa-envelope"></i>contato@chuteiras.com</p>
            <Link to="">
              <p><i className="fab fa-whatsapp"></i>(99) 9 9999-9999</p>
            </Link>
          </div>
          <div className="social-media">
            <h1>Nos Acompanhe no Instagram</h1>
            <Link to="">
              <p><i className="fab fa-instagram"></i>@chuteiras</p>
            </Link>
            <div className="security">
              <a className="safe-buy">
                <img src={safebuy} alt=""/>
              </a>
              <a className="safe-browsing">
                <img src={safebrowsing} alt=""/>
              </a>
            </div>
          </div>
      </div>    
      <div className="footer-announcement">
        <p>&copy; Todos os direitos reservados &#10003;</p>
      </div>
    </div>
  )
}

export default Footer
