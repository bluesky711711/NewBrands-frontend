import React from 'react';

import { CustomItems } from "components";

import 'assets/styles/pages/registration-creator.scss';

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

const softwares = [
  {
    value: 'choose',
    label: 'Choose',
  },
];

class RegistrationCreator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: countries[0].value,
      findType: find_types[0].value,
      phoneNumber: '+(33)700000000',
      software: softwares[0].value,
      agreed: false,
    }
    this.selectCountry = this.selectCountry.bind(this);
    this.selectFindtype = this.selectFindtype.bind(this);
    this.selectPhoneNumber = this.selectPhoneNumber.bind(this);
    this.selectSoftware = this.selectSoftware.bind(this);
    this.selectAgree = this.selectAgree.bind(this);
    this.onValidate = this.onValidate.bind(this);
  }
  componentDidMount() {
  }

  selectCountry(event) {
  }

  selectFindtype(event) {
  }

  selectPhoneNumber(event) {
  }

  selectSoftware(event) {
  }

  selectAgree(event) {
    // this.agreed = !this.agreed;
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
              <CustomItems method="Input" text="Full name *" id="full-name" value="John Doe" required />
              <CustomItems method="Input" text="Brand name *" id="brand-name" value="NEWBRANDS" required />
              <CustomItems method="Select" text="Country *" id="country" options={countries} value={this.state.country} onChange={this.selectCountry} required />
              <CustomItems method="Input" text="E-Mail *" id="email" type="email" value="j.bigot@newbrands.fr" required />
              <div className="inline">
                <div className="inline-container"> <span className="title"> How did you find out about us? </span> </div>
                <CustomItems method="Select" text="" id="inline-type" options={find_types} value={this.state.findType} onChange={this.selectFindtype} />
              </div>
              <CustomItems method="PhoneNumber" text="Phone № *" id="phone-number" value={this.state.phoneNumber} onChange={this.selectPhoneNumber} required />
              <CustomItems method="Input" text="DUNS № (if company created)" id="duns" value="134954" type="number" />
              <CustomItems method="Input" text="AVG. production volume *" id="production-volume" value="<20" type="number" required />
              <CustomItems method="Input" text="How often are you producing  *" id="how-produce" value="Every seasons" required />
              <CustomItems method="Input" text="Members in your team  *" id="members" value="I am alone" required />
              <CustomItems method="Input" text="Are your brand sustainable ready *" id="sustainable" value="No, let’s change that together!" required />
            </div>
          </div>
          <div className="agree-banner">
            {/* <CustomItems method="Option" text="" id="agree" value={this.agreed ? "agree" : ""} onChange={this.selectAgree} */}
            <CustomItems method="Option" text="" id="agree" value={""} onChange={this.selectAgree}
                label="I agree to receive occasional newsletters containing news and advice on creating personal and business progress to becoming sustainable and ethics." />
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