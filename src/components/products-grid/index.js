import React, {useState, useEffect} from "react"
import { Link, useLocation } from "react-router-dom"
import './styles.css'


//import products from "../../data/products"
import data from "../../data/productsjson.json"


const ProductsGrid = () => {
  const products = data.products
  const [filteredData, setFilteredData] = useState([])
  const location = useLocation();
  
  useEffect(() => {
    const wordEntered = location.state.wordEntered
    handleFilter(wordEntered)
  }, [])

  const handleFilter = (wordEntered) => {
    const searchWord = wordEntered
    const newFilter = products.filter((item) => {
      const name = (
        item.brand.toLowerCase().includes(searchWord.toLowerCase()) + 
        item.name.toLowerCase().includes(searchWord.toLowerCase()) + 
        item.soleplate.toLowerCase().includes(searchWord.toLowerCase())
      )
      return name
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div>
      <div className="container">
        <div className="grid">
            <div className="row">
                {filteredData.map((item) => {
                  const { id, name, brand, soleplate, images, price } = item

                  return (
                    <div className="item-container col-lg-3 col-md-4 col-sm-6 col-xs-8">
                        <Link to={`/chuteiras/${id}`}>
                            <div className="item-grid" key={id}>
                              <div className="image">
                                  <img src={images[0]} alt={name} />
                              </div>
                              <div className="item-info">
                                  <h1><b>{brand}</b> {name}</h1>
                                  <h2>{soleplate}</h2>
                                  <h3>R$ {price}</h3>
                              </div>
                            </div>
                        </Link>
                    </div>
                  )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsGrid
