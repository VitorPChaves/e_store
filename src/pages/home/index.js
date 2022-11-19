import React from "react"

import Header from "../../components/header"
import BootSoleplate from "../../components/product-soleplate"
import Banner from "../../components/banner"
import ProductsCarousel from "../../components/products-carousel"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"

//import products from "../../data/products"
import data from "../../data/productsjson.json"

const HomePage = () => {
  //window.scrollTo(0, 0)
  const products = data.products

  return (
    <div>
      <Header/>
      <BootSoleplate/>
      <ProductsCarousel data={products} title={'LANÇAMENTOS'}/>
      <ProductsCarousel data={products.filter((item) => {return item.price === 399.99})} title={'MAIS VENDIDAS'}/>
      <Banner/>
      <ProductsCarousel data={products.filter((item) => {return item.brand === "NIKE"})} title={'NIKE'}/>
      <ProductsCarousel data={products.filter((item) => {return item.brand === "ADIDAS"})} title={'ADIDAS'}/>
      <ProductsCarousel data={products.filter((item) => {return item.brand === "PUMA"})} title={'PUMA'}/>
      <BannerBottom/>
      <Footer/>
    </div>
  )
}

export default HomePage
