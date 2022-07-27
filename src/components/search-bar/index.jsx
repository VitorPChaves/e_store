import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./styles.css"
//import SearchIcon from "@material-ui/icons/Search"
//import CloseIcon from "@material-ui/icons/Close"

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")

  //const { _id, name, brand, image, rating, reviews, price } = data

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)

    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
      //return value.brand.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  

  const clearInput = () => {
    setFilteredData([])
    setWordEntered("")
  }

  return (
    <div className="">
      <form className="input-group">
        <input
          type="search"
          className="form-control rounded search"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        {/* <div className="">
          {filteredData.length === 0 ? (
            <button type="submit" className="search-button">
                <i class="fa fa-search"></i>
                <b> Buscar</b>
            </button>
          ) : (
            // <CloseIcon id="clearBtn" onClick={clearInput} />
            <button type="submit" className="close-button" onClick={clearInput}>
                <i class="fa fa-close"></i>
            </button>
          )}
        </div> */}
        <button type="submit" className="search-button">
            <i class="fa fa-search"></i>
            <p><b>Buscar</b></p>
        </button>
      </form>
      {filteredData.length != 0 && (
        <div className="data-result">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <Link to={`/products/${value._id}`}>

                <a className="data-item" target="_blank">
                  <img className="search-image" src={value.image} alt={value.name} />
                  <h1>{value.name}</h1>
                  <p>R${value.price}</p>
                  
                  {/* <div className="search-image">
                      
                  </div> */}
                </a>
              </Link>

            )
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar