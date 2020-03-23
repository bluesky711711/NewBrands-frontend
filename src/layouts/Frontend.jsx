import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppHeader, AppFooter } from "components";
// import { authService } from "services/auth";

export class FrontendLayout extends React.Component {
  render() {
    const currentPath = window.location.pathname;
    let header_type = "white";
    let footer_type = "small";
    switch (currentPath) {
      case '/':
      case '/pricing-partners':
      case '/pricing-creators':
        header_type = "black";
        footer_type = "extend";
        break;
      
      case '/registration-partner':
      case '/registration-creator':
      case '/registration-confirmed':
        header_type = "white";
        footer_type = "small";
        break;

      default:
        break;    
    }
    return (
      <div>
        <AppHeader type={header_type}/>
        <ToastContainer />
        {this.props.children}
        <AppFooter type={footer_type}/>
      </div>
    );
  }
}