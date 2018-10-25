import React, { Component } from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 50) {
      this.setState({hasScrolled: true });
    } else {
      this.setState({hasScrolled: false });
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled? 'header scrolled':'header'}>
        <div className="header-group">
          <p className="logo">∞</p>
          <h1 className="app-name">aka <b>Tatuu</b></h1>
          <Link to="/works">Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    </div>
    );
  }
}

export default Header
