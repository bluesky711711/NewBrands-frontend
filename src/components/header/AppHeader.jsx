import React from 'react';
import { Link } from 'react-router-dom';

// import { alertService } from 'services/alert';
// import { authService } from 'services/auth';

import logoWhite from 'assets/images/logo-white.svg';
import logoBlack from 'assets/images/logo.svg';
import 'assets/styles/header.scss';

const menuItems = [
  [
    { url: "#", text: "Home", active: false },
    { url: "#", text: "Pricing", active: false }
  ],
  [
    { url: "#", text: "Register my Brand", active: false },
    { url: "#", text: "Contact us", active: false }
  ],
];

export class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpandedMenu: false,
      isHomeExpanded: false,
      isManExpanded: false,
      updateMenu: false,
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    menuItems[0][0].active = true;
  }

  componentWillMount() {
    menuItems[this.props.index][this.props.subindex].active = true;
  }

  handleMenuClick(event, index, subindex) {
    for (const menuItem of menuItems) {
      for (const subItem of menuItem) {
        subItem.active = false;
      }
    }

    menuItems[index][subindex].active = true;

    if ( index === 0 && subindex === 0) window.location.href = '/pricing-partners';
    if ( index === 0 && subindex === 1) window.location.href = '/pricing-partners';
    if ( index === 1 && subindex === 0) window.location.href = '/pricing-creators';

    this.setState( {
      updateMenu: true
    });
  }

  render() {
    const isBlackHeader = this.props.type === 'black';
    const hrStyles = (isBlackHeader ? " black" : " white");
    const bgStyles = (isBlackHeader? " g-bg-black" : " g-bg-white");

    let menuBar = menuItems.map((menuItem, index) => {
      return (
          <ul className="menu-bar" key={index}>
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
      <div className="language-bar collapse-menu">
        <Link to="#" className="nb-link"> En </Link>
        <div className="submenu">
          <Link to="#" className="nb-link"> Fr </Link>
        </div>
      </div>
    );

    let currencybar = (
      <div className="currency-bar collapse-menu">
        <Link to="#" className="nb-link"> &euro; </Link>
        <div className="submenu">
          <Link to="#" className="nb-link"> $ </Link>
        </div>
      </div>
    );

    return (
      <header id="js-header" className={hrStyles} data-header-fix-moment="154">
        <div className={bgStyles} data-header-fix-moment-exclude="g-py-40" data-header-fix-moment-classes="g-bg-white g-py-0">
          <div className="js-mega-menu navbar navbar-expand-lg g-px-0 g-py-0">
            <div className="header-container">
              <a href="/" className="navbar-brand">
                <img src={isBlackHeader ? logoWhite : logoBlack} alt="New Brands Logo"/>
              </a>

              <div className="menu"> { menuBar } </div>
              {langbar}
              <span className="navbar-interval"> / </span>
              {currencybar}
            </div>
          </div>
        </div>
      </header>
    )
  }
}