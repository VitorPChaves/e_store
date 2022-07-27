import React from "react"

import Header from "../../components/header"
import BootType from "../../components/type"
import Banner from "../../components/banner"
import NewReleases from "../../components/carousel/new-releases"
import BestSellers from "../../components/carousel/best-sellers"
import Adidas from "../../components/carousel/adidas"
import Nike from "../../components/carousel/nike"
import Puma from "../../components/carousel/puma"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"

const HomeScreen = () => {
  window.scrollTo(0, 0)
  return (
    <div>
      <Header/>
      <BootType/>
      <NewReleases/>
      <BestSellers/>
      <Banner/>
      <Nike/>
      <Adidas/>
      <Puma/>
      <BannerBottom/>
      <Footer/>
    </div>
  )
}

export default HomeScreen
