import React from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <Header />
    <div className="hero">
      <div className="heroGroup">
        <h2>Hi, I'm <br />THANAPHON</h2>
        <p>Welcome to my world!</p>
        <p className="breif-me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/about/">More about me  
          <button className="btn arrow">
            GO
          </button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
