import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import 'assets/styles/footer.scss';

import logo_white from 'assets/images/logo-white.svg';
import logo_img from 'assets/images/footer-logo.png';
import small_logo from 'assets/images/small-logo.svg';

import twitter_icon from 'assets/images/twitter-icon.svg';
import facebook_icon from 'assets/images/facebook-icon.svg';
import instagram_icon from 'assets/images/instagram-icon.svg';
import linkedin_icon from 'assets/images/linkedin-icon.svg';

const menuItems = [
  {
    text: "Social", submenu: [
      { url: "#", text: "Contact Us" },
      { url: "#", text: "Trade Partners" },
      { url: "#", text: "Press Releases" },
      { url: "#", text: "Media Coverage" },
    ]
  },
  {
    text: "Info", submenu: [
      { url: "#", text: "Social Responsibility" },
      { url: "#", text: "Privacy Policy" },
      { url: "#", text: "Site Map" },
    ]
  },
  {
    text: "Service", submenu: [
      { url: "#", text: "Warranty" },
      { url: "#", text: "Returns" },
      { url: "#", text: "FAQ" },
    ]
  },
];

export const AppFooter = props => {
  const { t } = useTranslation();

  if (props.type === "small") {
    return (
      <div className="footer small">
        <div className="footer-container">
          <div className="small-brands">
            <div className="navbar-brand"> <img src={small_logo} alt="New Brands Logo"/> </div>
            <div className="mark-copy">
              © Copyright 2017-2020, NewBrands.fr, SAS
              et its partners
            </div>
          </div>
          <div className="mark"> <img src={logo_img} alt="New Brands Mark"/> </div>
        </div>
      </div>
    );
  } else {
    let socialIconbar = (
      <div className="social-iconbar">
        <img className="icon twitter" src={twitter_icon} alt="twitter" />
        <img className="icon facebook" src={facebook_icon} alt="facebook" />
        <img className="icon instagram" src={instagram_icon} alt="instagram" />
        <img className="icon linkedin" src={linkedin_icon} alt="linkedin" />
      </div>
    );

    let menubar = menuItems.map((menuitem, index) => {
      let submenubar = menuitem.submenu.map((sub_menu, sub_index) => {
        return (
          <li key={sub_index + 1} className="menu-item">
            <Link to={sub_menu.url} className="menu-link"> {t("Footer."+menuitem.text+"."+sub_menu.text.replace(/\s/g,''))} </Link>
          </li>
        );
      });

      return (
        <ul className="col-md-4 menu-bar" key={index}>
          <li className="submenu-title" key={0}> {t("Footer.Title."+menuitem.text)} </li>
          {submenubar}
        </ul>
      );

    });

    return (
      <div className="footer extend">
        <div className="footer-container">
          <div className="brands">
            <div className="navbar-brand"> <img src={logo_white} alt="New Brands Logo"/> </div>
            { socialIconbar }
            <div className="mark-copy">
              {t("Footer.Copyright")}
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-7 menu"> { menubar } </div>
          <div className="col-xl-3 col-lg-1 col-md-1 mark"> <img src={logo_img} alt="New Brands Mark"/> </div>
        </div>
      </div>
    );
  }
}
