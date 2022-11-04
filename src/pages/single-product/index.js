import React from "react"

import Header from "../../components/header"
import SingleProduct from "../../components/single-product"
import ProductsCarousel from "../../components/products-carousel"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"

import data from "../../data/productsjson.json"

const SingleProductPage = ({ match }) => {
  const products = data.products
  const product = products.find((item) => item.id === match.params.id)

  return (
    <>
      <Header />
      <SingleProduct match={match}/>
      <ProductsCarousel title={'PRA VOCÊ...'} data={products.filter((item) => {
        return (item.brand === product.brand && item.soleplate === product.soleplate && item != product)
      })}/>
      <BannerBottom/>
      <Footer/>
    </>
  )
}

export default SingleProductPage
