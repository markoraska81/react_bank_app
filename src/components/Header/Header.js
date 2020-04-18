import React from 'react';
import './Header.scss';
import logo from '../.././img/bank-logo.png';
import {Search} from '../Search/Search';

const Header = ({black, search, onPrint}) => {


  return (
    <header>
        <div className="header-container">
            <img className="logo" src={logo} />
            <h2>Bank App</h2>
            <img className="logo" src={logo} />
        </div>
    </header>
  )
}

export { Header };
