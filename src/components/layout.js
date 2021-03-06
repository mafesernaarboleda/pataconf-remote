import React from "react"
import PropTypes from "prop-types"

import Preloader from './Prealoader'
import Header from "./Header"
import Footer from "./Footer"

const ENV = process.env.NODE_ENV

const Layout = ({ children }) => {
  return (
    <>
      {ENV === 'production' && <Preloader /> }
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
