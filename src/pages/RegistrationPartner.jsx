import React from 'react';

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
      material_count: 0,
      materials_content: [""],
      process_count: 0,
      processes_content: [""],
    }
    this.selectCountry = this.selectCountry.bind(this);
    this.selectFindtype = this.selectFindtype.bind(this);
    this.selectPhoneNumber = this.selectPhoneNumber.bind(this);
    this.selectSoftware = this.selectSoftware.bind(this);
    this.selectAgree = this.selectAgree.bind(this);
    this.onValidate = this.onValidate.bind(this);
    this.onAddMaterials = this.onAddMaterials.bind(this);
    this.onChangeMeterial = this.onChangeMeterial.bind(this);
    this.onAddProcess = this.onAddProcess.bind(this);
    this.onChangeProcess = this.onChangeProcess.bind(this);
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

  onChangeMeterial(e, id) {
    let materials_content = this.state.materials_content;
    materials_content[id] = e.target.value;
    this.setState({ materials_content });
  }

  onChangeProcess(e, id) {
    let processes_content = this.state.processes_content;
    processes_content[id] = e.target.value;
    this.setState({ processes_content });
  }

  onAddMaterials(e, index) {
    if (e.key === 'Enter') {
      let materials_content = this.state.materials_content;
      if (index >= this.state.material_count) {
        if (this.state.materials_content[index] !== undefined && this.state.materials_content[index] !== "") {
          materials_content[this.state.material_count + 1] = "";  
          this.setState({
            materials_content: materials_content,
            material_count: this.state.material_count + 1
          });
        }
      } else {
        if (materials_content[index] === "") {
          for (let i = index; i < this.state.material_count; i++) {
            materials_content[i] = materials_content[i + 1];
          }
          materials_content[this.state.material_count] = "";
          this.setState({
            materials_content: materials_content,
            material_count: this.state.material_count - 1
          });
        }
      }
    }
  }

  onAddProcess(e, index) {
    if (e.key === 'Enter') {
      let processes_content = this.state.processes_content;
      if (index >= this.state.process_count) {
        if (this.state.processes_content[index] !== undefined && this.state.processes_content[index] !== "") {
          processes_content[this.state.process_count + 1] = "";  
          this.setState({
            processes_content: processes_content,
            process_count: this.state.process_count + 1
          });
        }
      } else {
        if (processes_content[index] === "") {
          for (let i = index; i < this.state.process_count; i++) {
            processes_content[i] = processes_content[i + 1];
          }
          processes_content[this.state.process_count] = "";
          this.setState({
            processes_content: processes_content,
            process_count: this.state.process_count - 1
          });
        }
      }
    }
  }

  render() {
    // Make Material Component    
    let materials = [];
    for (let id = 0; id < this.state.material_count; id++) {
      materials.push(
        <div className="list-items" key={id}>
          <span className="list-mark"> {id + 1} </span>
          <CustomItems 
            method="WriteInput"
            text=""
            title="hidden" 
            id={"list-item "+id} 
            placeholder="Write here..."
            value={this.state.materials_content[id]}
            onChange={e => this.onChangeMeterial(e, id)}
            onKeyPress={event => this.onAddMaterials(event, id)} />
        </div>
      );
    }
    materials.push(
      <div className="list-items" key={this.state.material_count}>
        <span className="list-mark"> {this.state.material_count + 1} </span>
        <CustomItems 
          method="WriteInput" 
          text="" 
          title="hidden" 
          id={"list-item "+this.state.material_count} 
          placeholder="Write here..."
          value={this.state.materials_content[this.state.material_count]}
          onChange={e => this.onChangeMeterial(e, this.state.material_count)}
          onKeyPress={event => this.onAddMaterials(event, this.state.material_count)} />
      </div>
    );

    // Make Process Component
    let process = [];
    for (let id = 0; id < this.state.process_count; id++) {
      process.push(
        <div className="list-items" key={id}>
          <span className="list-mark"> {id + 1} </span>
          <CustomItems 
            method="WriteInput" 
            text="" 
            title="hidden" 
            id={"list-item "+id+this.state.material_count+1} 
            placeholder="Write here..." 
            value={this.state.processes_content[id]}
            onChange={e => this.onChangeProcess(e, id)}
            onKeyPress={event => this.onAddProcess(event, id)} />          
        </div>
      );
    }
    process.push(
      <div className="list-items" key={this.state.process_count}>
        <span className="list-mark"> {this.state.process_count + 1} </span>
        <CustomItems 
          method="WriteInput"
          text=""
          title="hidden"
          id={"list-item "+this.state.process_count+this.state.material_count+1}
          placeholder="Write here..." 
          value={this.state.processes_content[this.state.process_count]}
          onChange={e => this.onChangeProcess(e, this.state.process_count)}
          onKeyPress={event => this.onAddProcess(event, this.state.process_count)} />
      </div>
    );

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
                <CustomItems method="Select" text="" title="hidden" id="inline-type-find" options={find_types} value={this.state.findType} onChange={this.selectFindtype} />
              </div>
              <CustomItems method="PhoneNumber" text="Phone № *" id="phone-number" value={this.state.phoneNumber} onChange={this.selectPhoneNumber} required />
              <CustomItems method="Input" text="DUNS № (if company created)" id="duns" value="134954" type="number" />
              <CustomItems method="Input" text="Company founded in  *" id="company-date" value="1996" type="number" required />
              <CustomItems method="Input" text="Type of company *" id="company-type" value="Limited Company" required />
              <div className="inline">
                <div className="inline-container"> <span className="title"> Software of production using  *</span> </div>
                <CustomItems method="Select" text="" title="hidden" id="inline-type-software" options={softwares} value={this.state.software} onChange={this.selectSoftware} required />
              </div>
              <CustomItems method="Input" text="Minimum production quantity *" id="production" value="20" required />
              <CustomItems method="Input" text="Basic Technical Templates *" id="template" value="Only one!" required />
              <CustomItems method="Input" text="Company size *" id="company-size" value="0 - 20" required />
              <CustomItems method="Input" text="№ of factories *" id="factory-number" value="2 usines recensé" required />
              <div className="inline">
                <div className="inline-container"> <span className="title"> Please, enter their addresses </span> </div>
                <CustomItems method="GooglePlaces" text="" title="hidden" id="inline-type-place" value="10 Place Vendôme, 75001 Paris" />
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
                <CustomItems method="Input" text="" title="hidden" id="inline-type-manu" value="Manufacturing" required />
              </div>
              <div className="inline">
                <div className="inline-container"> <span className="title"> Your Know-how  * </span> </div>
                <CustomItems method="Input" text="" title="hidden" id="inline-type-men" value="Mens Garments [knitted]" required />
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
            <CustomItems method="Option" text="" title="hidden" id="agree" value={""} onChange={this.selectAgree}
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