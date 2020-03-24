import React from 'react';
import { withTranslation } from 'react-i18next';
import { CustomItems } from "components";

import 'assets/styles/pages/registration.scss';

const countries = [
  {
    value: 'france',
    label: 'France',
  },
  {
    value: 'germany',
    label: 'Germany',
  },
  {
    value: 'united kingdom',
    label: 'United Kingdom',
  },
];

const find_types = [
  {
    value: 'choose',
    label: 'Choose',
  },
];

class RegistrationCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullname: 'John Doe',
      brandname: 'NEWBRANDS',
      country: countries[0].value,
      email: 'j.bigot@newbrands.fr',
      email_verified: true,
      phoneNumber: '+(33)700000000',
      phone_verified: false,
      findType: find_types[0].value,
      duns_number: 134954,
      avg_production: '< 200',
      how_producing: 'Every seasons',
      team_members: 'I am alone',
      brand_ready: 'No, let\'s change that together!',
      agreed: false,
    }

    this.handleFullname = this.handleFullname.bind(this);
    this.selectCountry = this.selectCountry.bind(this);
    this.selectFindtype = this.selectFindtype.bind(this);
    this.selectPhoneNumber = this.selectPhoneNumber.bind(this);
    this.selectSoftware = this.selectSoftware.bind(this);
    this.selectAgree = this.selectAgree.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }
  componentDidMount() {
  }
  
  handleFullname(e) {
  }

  selectCountry(event) {
  }

  selectFindtype(event) {
  }

  selectPhoneNumber(event) {
  }

  selectSoftware(event) {
  }

  selectAgree() {
    this.setState({
      agreed: !this.state.agreed,
    })
  }

  onValidate() {
    window.location.href = '/registration-confirmed';
  }

  render() {

    const { t } = this.props;

    return (
      <div className="registration-creator">        
        <div className="page-container">
          <span className="title-banner"> {t("Register.Title.Creators")} </span>
          <div className="registration-banner">
            <div className="options">
              <CustomItems method="Input" text={t("Register.Fullname")+"  *"} id="full-name" value={this.state.fullname} required />
              <CustomItems method="Input" text={t("Register.Brandname")+"  *"} id="brand-name" value={this.state.brandname} required />
              <CustomItems method="Select" text={t("Register.Country")+"  *"} id="country" options={countries} value={this.state.country} onChange={this.selectCountry} required />
              <CustomItems method="Email" text={t("Register.Email.Label")+"  *"} verifylabel={t("Register.Email.Verify")} id="email" type="email" value={this.state.email} verified={this.state.email_verified.toString()} required />
              <CustomItems method="Label" text="" title="hidden" id="address-lable" label={t("Register.FindOut")} />
              <CustomItems method="Select" text="" id="inline-type" options={find_types} value={this.state.findType} onChange={this.selectFindtype} />
              <CustomItems method="PhoneNumber" text={t("Register.Phone.Label")+" *"} verifylabel={t("Register.Phone.Verify")} id="phone-number" value={this.state.phoneNumber} onChange={this.selectPhoneNumber} verified={this.state.phone_verified.toString()} required />
              <CustomItems method="Input" text={t("Register.DUNS")} id="duns" value={this.state.duns_number} type="number" />
              <CustomItems method="Input" text={t("Register.AvgProduction")+"  *"} id="production-volume" value={this.state.avg_production} type="number" required />
              <CustomItems method="Input" text={t("Register.HowProduction")+"  *"} id="how-produce" value={this.state.how_producing} required />
              <CustomItems method="Input" text={t("Register.Members.Label")+"  *"} id="members" value={this.state.team_members} required />
              <CustomItems method="Input" text={t("Register.BrandReady.Label")+"  *"} id="sustainable" value={this.state.brand_ready} required />
            </div>
          </div>
          <div className="agree-banner">
            <CustomItems method="Option" text="" title="hidden" id="agree" value={this.state.agreed} onChange={this.selectAgree}
                label={t("Register.AgreeLabel")}
                rowtype="true"
            />
          </div>
          <div className="validate-banner">
            <span dangerouslySetInnerHTML={{ __html: t("Register.Notation") }} />
            <CustomItems method="Button" label={t("Register.Validation").toUpperCase()} id="validate" onClick={this.onValidate} required />
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(RegistrationCreator);