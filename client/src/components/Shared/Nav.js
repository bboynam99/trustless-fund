import React, {Component} from 'react';

import logo from '../../assets/logo.png';

import '../../layout/components/nav.sass';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.drizzleState.accounts[0]
    }
  }

  render() {
    return (
      <nav className="nav">
        <h1 className="nav__header">
          <img src={logo} alt="Trustless Fund" className="nav__logo" />
          Trustless Fund
        </h1>
        <button className="nav__button">
          {this.state.address ? 
            `${this.state.address.slice(0, 4)}...${this.state.address.slice(this.state.address.length - 4, this.state.address.length)}` : 
            'Connect Wallet'}
        </button>
      </nav>
    );
  }
}

export default Nav;