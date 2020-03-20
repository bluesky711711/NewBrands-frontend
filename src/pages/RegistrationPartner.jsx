import React from 'react';
import { Link } from 'react-router-dom';

import { AppHeader, AppFooter, CustomItems } from "components";

import 'assets/styles/pages/registration-partner.scss';

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

class RegistrationPartner extends React.Component {
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

    let materials = [];
    for (let i = 0; i < 3; i++) {
      materials.push(
        <div className="list-items" key={i}>
          <span className="list-mark"> {i + 1} </span>
          <CustomItems method="WriteInput" text="" id={"list-item "+i} placeholder="Write here..." />
        </div>
      );
    }

    let process = [];
    for (let i = 0; i < 2; i++) {
      process.push(
        <div className="list-items" key={i}>
          <span className="list-mark"> {i + 1} </span>
          <CustomItems method="WriteInput" text="" id={"list-item "+i+10} placeholder="Write here..." />
        </div>
      );
    }

    return (
      <div className="registration-partner">
        <AppHeader type="white" index="0" subindex="0" />
        <div className="page-container">
          <span className="title-banner"> Let’s change the process for a brand new industry! </span>
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
              <CustomItems method="Input" text="Company founded in  *" id="company-date" value="1996" type="number" required />
              <CustomItems method="Input" text="Type of company *" id="company-type" value="Limited Company" required />
              <div className="inline">
                <div className="inline-container"> <span className="title"> Software of production using  *</span> </div>
                <CustomItems method="Select" text="" id="inline-type" options={softwares} value={this.state.software} onChange={this.selectSoftware} required />
              </div>
              <CustomItems method="Input" text="Minimum production quantity *" id="production" value="20" required />
              <CustomItems method="Input" text="Basic Technical Templates *" id="template" value="Only one!" required />
              <CustomItems method="Input" text="Company size *" id="company-size" value="0 - 20" required />
              <CustomItems method="Input" text="№ of factories *" id="factory-number" value="2 usines recensé" required />
              <div className="inline">
                <div className="inline-container"> <span className="title"> Please, enter their addresses </span> </div>
                <CustomItems method="Input" text="" id="inline-type" value="10 Place Vendôme, 75001 Paris" />
              </div>
              <div className="inline">
                <div className="inline-container text"> <span className="title"> This is where you’d like buyers to send payment for items you sell. It will only be displayed to winning bidders or buyers if you accept payment by mail. Learn more about providing a payment address. </span> </div>
                <div className="inline-container text">
                  <span className="header"><strong>10 Place Vendôme,</strong>75001 Paris, France.</span>
                  <span className="body">48.866865, 2.330566</span>
                </div>
              </div>
              <div className="inline">
                <div className="inline-container text"> <span className="title"> This is where you’d like buyers to send payment for items you sell. It will only be displayed to winning bidders or buyers if you accept payment by mail. Learn more about providing a payment address. </span> </div>
                <div className="inline-container text">
                  <span className="header"><strong>10 Place Vendôme,</strong>75001 Paris, France.</span>
                  <span className="body">48.866865, 2.330566</span>
                </div>
              </div>
              <div className="inline">
                <div className="inline-container"> <span className="title"> Your industry  * </span> </div>
                <CustomItems method="Input" text="" id="inline-type" value="Manufacturing" required />
              </div>
              <div className="inline">
                <div className="inline-container"> <span className="title"> Your Know-how  * </span> </div>
                <CustomItems method="Input" text="" id="inline-type" value="Mens Garments [knitted]" required />
              </div>
              <div className="inline list">
                <div className="inline-container"> <span className="title"> Materials with which you are working ? </span> </div>
                <div className="inline-list">
                  {materials}
                </div>
              </div>
              <div className="inline list">
                <div className="inline-container"> <span className="title"> Process that you are using ? </span> </div>
                <div className="inline-list">
                  {process}
                </div>
              </div>
              <div className="inline list bottom">
                <div className="inline-container"> <span className="title"> Do you have any obeservation ? </span> </div>
                <span className="inline-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua__
                </span>
              </div>
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
        <AppFooter type="small" />
      </div>
    );
  }
}

export default RegistrationPartner;