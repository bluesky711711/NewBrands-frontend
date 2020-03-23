import React from 'react';
// import { Link } from 'react-router-dom';

import 'assets/styles/pages/contact-us.scss';

class ContactUs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {      
    }
  }

  componentDidMount() {
  }

  render() {   

    return (
      <div className="contact-us">
        <div className="page-container">
          <span>Contact us</span>            
        </div>
      </div>
    );
  }
}

export default ContactUs;