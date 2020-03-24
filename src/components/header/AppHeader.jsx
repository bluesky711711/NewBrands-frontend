import React from 'react';
import { Link } from 'react-router-dom';

// import { alertService } from 'services/alert';
// import { authService } from 'services/auth';

import logoWhite from 'assets/images/logo-white.svg';
import logoBlack from 'assets/images/logo.svg';
import 'assets/styles/header.scss';

const menuItems = [
  [
    { url: "/pricing-partners", text: "Home", active: false },
    { url: "/pricing-creators", text: "Pricing", active: false }
  ],
  [
    { url: "/pricing-creators", text: "Register my Brand", active: false },
    { url: "/contact-us", text: "Contact us", active: false }
  ],
];

export class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpandedMenu: false,
      isHomeExpanded: false,
      isManExpanded: false,
      menu_open: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
  }

  componentDidMount() {
    menuItems[0][0].active = true;
  }

  UNSAFE_componentWillMount() {
    menuItems[0][0].active = true;
  }

  handleMenuOpen() {
    console.log(this.state.menu_open);
    this.setState({
      menu_open: !this.state.menu_open
    })
  }

  handleMenuClick(event, index, subindex) {
    for (const menuItem of menuItems) {
      for (const subItem of menuItem) {
        subItem.active = false;
      }
    }

    menuItems[index][subindex].active = true;

    this.setState( {
      menuItems
    });
  }

  render() {
    const { menu_open } = this.state;
    const isBlackHeader = this.props.type === 'black';
    const hrStyles = (isBlackHeader ? "header black" : "header white");
    
    let menuBar = menuItems.map((menuItem, index) => {
      return (
          <ul className="col-md-5 col-sm-6 menu-bar" key={index}>
            {menuItem.map((sub_menu, sub_index) => {
              return (
                <li key={sub_index} className="menu-item" onClick={event => this.handleMenuClick(event, index, sub_index)}>
                  <Link to={sub_menu.url} className={`menu-link ${sub_menu.active === true ? "active" : ""}`} >
                    {sub_menu.active ? (sub_menu.text + " /") : sub_menu.text}
                  </Link>
                </li>
              );
            }
            )}
          </ul>
      );
    });

    let langbar = (
      <div className="col-xl-2 col-lg-4 col-md-3 language-bar collapse-menu">
        <Link to="#" className="nb-link"> En </Link>
        <div className="submenu">
          <Link to="#" className="nb-link"> Fr </Link>
        </div>
      </div>
    );

    let currencybar = (
      <div className="col-2 currency-bar collapse-menu">
        <Link to="#" className="nb-link"> &euro; </Link>
        <div className="submenu">
          <Link to="#" className="nb-link"> $ </Link>
        </div>
      </div>
    );

    return (
      <div className={hrStyles}>
        <div className="header-container">
          <a href="/" className="col-sm-auto col-12 navbar-brand">
            <img src={isBlackHeader ? logoWhite : logoBlack} alt="New Brands Logo"/>
          </a>
          <div className={menu_open ? "burger-menu menu-open" : "burger-menu"} onClick={this.handleMenuOpen}>
            <div className="line-menu line-half first-line" />
            <div className="line-menu" />
            <div className="line-menu line-half last-line" />
          </div>
          <div className={"col-lg-5 col-md-5 col-sm-5 " + (menu_open ? "menu menu_open" : "menu")}> { menuBar } </div>
          <div className="col-lg-2 col-md-1 col-sm-2 option-bar">
            {langbar}
            <span className="navbar-interval"> / </span>
            {currencybar}
          </div>
        </div>
      </div>
      
    )
  }
}