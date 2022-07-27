import React from "react"
import "../../App.css"
import "../../responsive.css"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../../pages/home"
import Products from "../../pages/products"
import Product from "../../pages/product"
import NotFound from "../../pages/not-found"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:id" component={Product} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
