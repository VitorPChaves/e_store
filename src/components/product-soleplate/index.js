import React from "react"
import { Link } from "react-router-dom"

import "./styles.css"

const BootSoleplate = () => {

  return (
    <div>
        <div className="container">
            <div className="boot-type">
                <div className="type">
                    <Link to={{pathname: "/chuteiras", state: {wordEntered: "CAMPO"}}}>
                        <button type="submit">
                            <img src="/images/soleplate/campo.png" alt="Campo" ></img>
                            <h3>Campo</h3>
                        </button>
                    </Link>
                </div>
                <div className="type">
                    <Link className="link"  to={{pathname: "/chuteiras", state: {wordEntered: "SOCIETY"}}}>
                        <button type="submit">
                            <img src="/images/soleplate/society3.png" alt="Society" ></img>
                            <h3>Society</h3>
                        </button>
                    </Link>
                </div>
                <div className="type">
                    <Link className="link"  to={{pathname: "/chuteiras", state: {wordEntered: "FUTSAL"}}}>
                        <button type="submit">
                            <img src="/images/soleplate/futsal.png" alt="Futsal" ></img>
                            <h3>Futsal</h3>
                        </button>
                    </Link>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default BootSoleplate