import React, { useState } from "react"
import './styles.css'

import shippingimg from "../../assets/entrega-gratis.png"
import data from "../../data/productsjson.json"

const SingleProduct = ({ match }) => {
  const products = data.products
  const product = products.find((item) => item.id === match.params.id)
  const [image, setImage] = useState(product.images[0])
  const sizes = [36,37,38,39,40,41,42,43,44]
  const [size, setSize] = useState('')
  const productUrl = window.location.href

  const whatsappMsg = `https://wa.me/554896498536?text=Olá, visitei seu site e me interessei pela chuteira ${product.brand} ${product.name} de ${product.soleplate} tamanho ${size}\n ${productUrl}`

  const handleSize = () => {
    const element = document.getElementById("bootsize")
    const value = element.value

    setSize(value)
  }

  return (
    <>
      <div className="container single-product">
        <div className="product-content">
          <div className="images-column">
            {product.images.map((data) => {
              return (
                <div className="image-item">
                  <img className={image == data ? "clicked" : ""} src={data} alt={product.name} onClick={() => setImage(data)}/>
                </div>
              )
            })}
          </div>
          <div className="single-image">
            <img src={product.images.includes(image) ? image : setImage(product.images[0])} alt={product.name} />
          </div>
          <div className="product-dtl">
            <div className="product-name"><h2><b>{product.brand}</b> {product.name}</h2></div>
            <p>{product.soleplate}</p>
            <h1>R$ {product.price}</h1>
            <div className="product-count">
              <div className="sizes">
                <h6>Escolha seu tamanho</h6>
                <select id="bootsize" onChange={handleSize}>
                  {sizes.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <h6 className="shipping-title"><b>Entrega</b></h6>
              <div className="shipping">
                <img src={shippingimg} alt="frete"/>
                <h3>Frete <b>GRÁTIS</b> em compras a partir de R$ 199,99!</h3>
              </div>
              <a href={whatsappMsg} target="_blank">
                <button className="order-button">
                    Fazer pedido<i className="fab fa-whatsapp"></i>
                </button>
              </a>
              <h4>Verifique o número do WhatsApp para evitar phishing</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
