import React from 'react';

import { Confirmed } from "components";

import 'assets/styles/pages/registration-confirmed.scss';

const confirmed_text = "Nous avons bien reçus votre demande, vous recevrez un email dans quelques instants afin de finalisé votre inscription.";

class RegistrationConfirmed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {

    return (
      <div className="registration-confirmed">
        <div className="page-container">
          <Confirmed label={confirmed_text} />
        </div>
      </div>
    );
  }
}

export default RegistrationConfirmed;