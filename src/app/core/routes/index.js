import React from "react"
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import HomePage from "../../../pages/home"
import ProductsPage from "../../../pages/products"
import SingleProductPage from "../../../pages/single-product"
import NotFound from "../../../pages/not-found"
import AboutPage from "../../../pages/about"
import ShippingPage from "../../../pages/shipping"
import PrivacyPage from "../../../pages/privacy-policy"
import RefundPage from "../../../pages/refund-policy"
import ContactPage from "../../../pages/contact"

const CoreRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/chuteiras" component={ProductsPage} exact />
        <Route path="/chuteiras/:id" component={SingleProductPage} />
        <Route path="/sobre" component={AboutPage} />
        <Route path="/envio" component={ShippingPage} />
        <Route path="/privacidade" component={PrivacyPage} />
        <Route path="/reembolso" component={RefundPage} />
        <Route path="/contato" component={ContactPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default CoreRouter