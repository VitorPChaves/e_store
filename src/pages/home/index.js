import React from "react"

import Header from "../../components/header"
import BootSoleplate from "../../components/product-soleplate"
import Banner from "../../components/banner"
import ProductsCarousel from "../../components/products-carousel"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"

//import products from "../../data/products"
import data from "../../data/productsjson.json"
import best_sellers_data from "../../data/best-sellers-data.json"
import new_releases_data from "../../data/new-releases-data.json"
import nike_data from "../../data/nike-data.json"

const HomePage = () => {
  //window.scrollTo(0, 0)
  const products = data.products
  const best_sellers = best_sellers_data["best-sellers"]
  const new_releases = new_releases_data["new-releases"]
  const nike = nike_data["nike"]

  return (
    <div>
      <Header/>
      <BootSoleplate/>
      {/* <ProductsCarousel data={products} title={'ADICIONADAS'}/> */}
      <ProductsCarousel data={new_releases} title={'LANÇAMENTOS'}/>
      <ProductsCarousel data={best_sellers} title={'MAIS VENDIDAS'}/>
      <Banner/>
      <ProductsCarousel data={nike} title={'NIKE'}/>
      <ProductsCarousel data={products.filter((item) => {return item.brand === "ADIDAS"})} title={'ADIDAS'}/>
      <ProductsCarousel data={products.filter((item) => {return item.brand === "PUMA"})} title={'PUMA'}/>
      <BannerBottom/>
      <Footer/>
    </div>
  )
}

export default HomePage
