import React from "react"
import { Link } from "react-router-dom"

import "./styles.css"

const BootType = () => {

    const handleCampo = () => {
        return
    }

    const handleSociety = () => {
        return
    }

    const handleFutsal = () => {
        return
    }

  return (
    <div>
        <div className="boot-type">
            <Link to={"/products"}>

                <button type="submit">
                    <h3>Campo</h3>
                </button>
            </Link>
            <button type="submit" onClick={handleSociety}>
                <h3>Society</h3>
            </button>
            <button type="submit" onClick={handleFutsal}>
                <h3>Futsal</h3>
            </button>
        </div>    
    </div>
  )
}

export default BootType