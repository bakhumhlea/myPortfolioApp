import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="header">
      <div className="header-group">
        <p className="logo">∞</p>
        <h1 className="app-name">aka <b>Tatuu</b></h1>
        <Link to="/works">Works</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
  </div>
)

export default Header
