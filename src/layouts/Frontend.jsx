import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { authService } from "services/auth";

export class FrontendLayout extends React.Component {
  render() {
    // const currentPath = window.location.pathname;
    return (
      <div>
        {/* <AppHeader type="white"/> */}
        <ToastContainer />
        {this.props.children}
        {/* <AppFooter /> */}
      </div>
    );
  }
}