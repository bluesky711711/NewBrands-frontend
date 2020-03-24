import React from 'react';
import { withTranslation } from 'react-i18next';

import { Confirmed } from "components";

import 'assets/styles/pages/registration-confirmed.scss';

class RegistrationConfirmed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {
    const { t } = this.props;
    return (
      <div className="registration-confirmed">
        <div className="page-container">
          <Confirmed label={t("Confirmed.Message")} from={t("Confirmed.From")}/>
        </div>
      </div>
    );
  }
}

export default withTranslation()(RegistrationConfirmed);