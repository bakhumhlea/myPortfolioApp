import React, { Component } from 'react'
import { Link } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'

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
        <Link to="/about/" className="link-to-works">
          <div>More about me </div> 
          <div className="btn-group">
            <span className="box"></span>
            <span className="text">Let's Go!</span>
          </div>
        </Link>
        <Btn />
      </div>
    </div>
  </Layout>
)
class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }
  render() {
    return (
      <div 
        className={this.state.active? 'hidden-box show':'hidden-box'}
        onMouseEnter={() => this.setState({active : true})}
        onMouseLeave={() => this.setState({active : false})}
      >
        <h4 className="hidden-text">Hello! I'm Tatuu!</h4>
      </div>
    );
  }
}

export default IndexPage
