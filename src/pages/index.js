import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Header from '../components/header'
import Layout from '../components/layout'
import Section from '../components/Section';

const ScrollBtn = styled.button`
  cursor: pointer;
  position: fixed;
  bottom: 0px;
  color: white;
  border: none;
  text-align: center;
  font-family: 'Montserrat';
  font-size: 0.8rem;
  width: 100%;
  padding: 4px 0 10px 0;
  background-color: transparent;
  outline: none;
`

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
        <div className="hidden-box">
          <h4 className="hidden-text">Hello! I'm Tatuu!</h4>
        </div>
      </div>
    </div>
    <Section />
    <FooterBar />
  </Layout>
)

class FooterBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrolledHalf : false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrolled);
  }
  scrollTo = (event) => {
    event.preventDefault();
    const windowH = window.innerHeight;
    console.log(windowH);
    if(this.state.scrolledHalf) {
      window.scrollTo(0,0);
    } else {
      window.scrollTo(0, windowH);
    }
  }
  scrolled = () => {
    const halfWinH = window.innerHeight / 2;
    const hasScrolled = window.pageYOffset;
    console.log(hasScrolled+","+halfWinH);
    if(hasScrolled>halfWinH) {
      this.setState({scrolledHalf: true});
    } else {
      this.setState({scrolledHalf: false});
    }
    
  }
  render() {
    return (
      <div>
        <ScrollBtn onClick={(event)=>this.scrollTo(event)}>Scroll {this.state.scrolledHalf? 'Up':'Down'}</ScrollBtn>
      </div>
    );
  }
}

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
