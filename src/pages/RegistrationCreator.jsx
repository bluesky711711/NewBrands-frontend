import React from 'react';

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

    return (
      <div className="registration-creator">        
        <div className="page-container">
          <span className="title-banner"> Let’s produce together your future sustainable collection? </span>
          <div className="registration-banner">
            <div className="options">
              <CustomItems method="Input" text="Full name *" id="full-name" value={this.state.fullname} required />
              <CustomItems method="Input" text="Brand name *" id="brand-name" value={this.state.brandname} required />
              <CustomItems method="Select" text="Country *" id="country" options={countries} value={this.state.country} onChange={this.selectCountry} required />
              <CustomItems method="Email" text="E-Mail *" id="email" type="email" value={this.state.email} verified={this.state.email_verified.toString()} required />
              <CustomItems method="Label" text="" title="hidden" id="address-lable" label="How did you find out about us?" />
              <CustomItems method="Select" text="" id="inline-type" options={find_types} value={this.state.findType} onChange={this.selectFindtype} />
              <CustomItems method="PhoneNumber" text="Phone № *" id="phone-number" value={this.state.phoneNumber} onChange={this.selectPhoneNumber} verified={this.state.phone_verified.toString()} required />
              <CustomItems method="Input" text="DUNS № (if company created)" id="duns" value={this.state.duns_number} type="number" />
              <CustomItems method="Input" text="AVG. production volume *" id="production-volume" value={this.state.avg_production} type="number" required />
              <CustomItems method="Input" text="How often are you producing  *" id="how-produce" value={this.state.how_producing} required />
              <CustomItems method="Input" text="Members in your team  *" id="members" value={this.state.team_members} required />
              <CustomItems method="Input" text="Are your brand sustainable ready *" id="sustainable" value={this.state.brand_ready} required />
            </div>
          </div>
          <div className="agree-banner">
            {/* <CustomItems method="Option" text="" id="agree" value={this.agreed ? "agree" : ""} onChange={this.selectAgree} */}
            <CustomItems method="Option" text="" id="agree" value={this.agreed} onChange={this.selectAgree}
                label="I agree to receive occasional newsletters containing news and advice on creating personal and business progress to becoming sustainable and ethics." 
                rowtype="true"
            />
          </div>
          <div className="validate-banner">
            <span>En validant, vous acceptez les <strong>Conditions Générales d’Utilisation</strong> de NewBrands.fr ainsi vous confirmer avoir consulté nos <strong>Conditions Particulières</strong> et <strong>Conditions Générales de Services</strong>, notre <strong>Politique de Confidentialité</strong> ainsi que notre <strong>Notice Cookies.</strong></span>
            <CustomItems method="Button" label="VALIDATE" id="validate" onClick={this.onValidate} required />
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationCreator;