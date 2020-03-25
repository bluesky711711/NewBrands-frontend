import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

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
    { url: "/pricing-creators", text: "Register", active: false },
    { url: "/contact-us", text: "Contactus", active: false }
  ],
];

const langMenu = ['en', 'fr'];
const currencyMenu = ['€', '$'];

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpandedMenu: false,
      isHomeExpanded: false,
      isManExpanded: false,
      menu_open: false,
      curLangMenu: langMenu,
      curCurrencyMenu: currencyMenu
    }

    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleCurrency = this.handleCurrency.bind(this);
  }

  componentDidMount() {
    menuItems[0][0].active = true;
  }

  UNSAFE_componentWillMount() {
    menuItems[0][0].active = true;
  }

  handleLanguage(lang) {
    i18next.changeLanguage(lang);
    let curLangMenu = [lang];
    langMenu.map((lan) => {
      if (lan !== lang) {
        curLangMenu.push(lan);
      }
      return "";
    });
    this.setState({
      curLangMenu
    });
  }

  handleCurrency(currency) {
    let curCurrencyMenu = [currency];
    currencyMenu.map(cur => {
      if (cur !== currency) {
        curCurrencyMenu.push(cur);
      }
      return "";
    });
    this.setState({
      curCurrencyMenu
    });
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
    const { t } = this.props;

    const { menu_open, curLangMenu, curCurrencyMenu } = this.state;
    const isBlackHeader = this.props.type === 'black';
    const hrStyles = (isBlackHeader ? "header black" : "header white");
    
    let menuBar = menuItems.map((menuItem, index) => {
      return (
          <ul className="col-md-5 col-sm-6 menu-bar" key={index}>
            {menuItem.map((sub_menu, sub_index) => {
              return (
                <li key={sub_index} className="menu-item" onClick={event => this.handleMenuClick(event, index, sub_index)}>
                  <Link to={sub_menu.url} className={`menu-link ${sub_menu.active === true ? "active" : ""}`} >
                    {sub_menu.active ? (t("Header."+sub_menu.text) + " /") : t("Header."+sub_menu.text)}
                  </Link>
                </li>
              );
            }
            )}
          </ul>
      );
    });

    let langbar_title = <Link to="#" className="nb-link" onClick={()=> this.handleLanguage(curLangMenu[0])}> {curLangMenu[0]} </Link>;
    let langbar_submenu = this.state.curLangMenu.map((lang, index) => {
      if (index > 0) {
        return <Link to="#" className="nb-link" onClick={() => this.handleLanguage(lang)}> {lang} </Link>
      };
      return <></>;
    });
    let langbar = (
      <div className="col-xl-2 col-lg-4 col-md-3 language-bar collapse-menu">
        {langbar_title}
        <div className="submenu">
          {langbar_submenu}
        </div>
      </div>
    );

    let currbar_title = <Link to="#" className="nb-link" onClick={()=> this.handleCurrency(curCurrencyMenu[0])}> {curCurrencyMenu[0]} </Link>;
    let currbar_submenu = this.state.curCurrencyMenu.map((curr, index) => {
      if (index > 0) {
        return <Link to="#" className="nb-link" onClick={() => this.handleCurrency(curr)}> {curr} </Link>
      };
      return <></>;
    });

    let currencybar = (
      <div className="col-2 currency-bar collapse-menu">
        {currbar_title}
        <div className="submenu">
          {currbar_submenu}
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

export default withTranslation()(AppHeader);