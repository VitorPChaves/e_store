import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import ProductsCarousel from "../products-carousel"

import "./styles.css"

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState("")
  const history = useHistory()

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)

    const newFilter = data.filter((item) => {
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (wordEntered.length > 0) {
      history.push({
        pathname: '/chuteiras',
        state: {wordEntered}
      })
      window.location.reload(false)
    } else return
  }

  return (
    <div className="search-container">
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search__input"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <button type="submit" className="search__button">
            <i class="fa fa-search"></i>
            <p><b>Buscar</b></p>
        </button>
    </form>
      {filteredData.length != 0 && (
        <div className="result-container">
          <ProductsCarousel data={filteredData.map((item) => {return item})}/>
        </div>
      )}
    </div>
  )
}

export default SearchBar