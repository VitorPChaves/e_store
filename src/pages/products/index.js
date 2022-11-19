import ProductsGrid from "../../components/products-grid"
import Header from "../../components/header"
import BannerBottom from "../../components/banner-bottom"
import Footer from "../../components/footer"
import BootSoleplate from "../../components/product-soleplate"

const ProductsPage = () => {
    return (
        <div>
            <Header/>
            {/* <BootSoleplate/> */}
            <ProductsGrid/>
            <BannerBottom/>
            <Footer/>
        </div>
    )
}

export default ProductsPage