import React from "react"
import { Link } from "react-router-dom"
import './styles.css'

const Footer = () => {
  return (
    <div className="Container">
      <p>Faça seu pedido pelo WhatsApp</p>
      <Link to="">
          <i className="fab fa-whatsapp"></i>
      </Link>
      <p>e pague com PIX</p>
    </div>
  )
}

export default Footer
