import React from 'react';

import { CustomItems } from "components";
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

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
      fullname: 'John Doe',
      brandname: 'NEWBRANDS',
      country: countries[0].value,
      email: 'j.bigot@newbrands.fr',
      email_verified: true,
      phoneNumber: '+(33)700000000',
      phone_verified: false,
      findType: find_types[0].value,
      duns_number: 134954,
      company_date: '1996',
      company_type: 'Limited Company',
      software: softwares[0].value,
      min_production: '> 20',
      basic_technical: 'Only one!',
      company_size: '0 - 20',
      facory_number: '2 usines recensé',
      your_industry: 'Manufacturing',
      your_knowhow: 'Mens Garments [knitted]',
      material_count: 0,
      materials_content: [""],
      process_count: 0,
      processes_content: [""],
      address_count: 0,
      addresses_info: [{address: {name: "", lat: undefined, lng: undefined}, info: ""}],
      agreed: false,
      
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
    this.handleAddressInformation = this.handleAddressInformation.bind(this);
    this.handleGoogleAddress = this.handleGoogleAddress.bind(this);
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

  handleAddressInformation(e, index) {
    let addresses_info = this.state.addresses_info;
    addresses_info[index]["address"].info = e.target.value;
    this.setState({ addresses_info });
  }

  handleGoogleAddress(e) {
    let addresses_info = this.state.addresses_info;
      let address_count = this.state.address_count;
    let is_found = false;
    for (let i = 0; i < address_count; i++) {
      if (addresses_info[i].address.name === e.description) {
        is_found = true;
        break;
      }
    }
    if (is_found === false) {
      geocodeByAddress(e.description)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          console.log('Successfully got latitude and longitude', { lat, lng })
          let addr = {
            address: {
              name: e.description,
              lat: lat,
              lng: lng
            },
            info: "",
          };
          
          addresses_info[address_count] = addr;
          address_count = address_count + 1;
          this.setState({
            address_count,
            addresses_info
          });
        });
    }    
  }

  render() {
    // Make Address Information Component
    let address = [];
    for (let id = 0; id < this.state.address_count; id++) {
      address.push(
        <div className="inline" key={id}>
          <div className="inline-container text">
            <CustomItems method="MuiltiTextField" 
              className="title"
              title="hidden"
              placeholder="Write informations here about this address"
              onChange={event => this.handleAddressInformation(event, id)}
            />
          </div>
          <div className="inline-container text">
            <span className="header">{ this.state.addresses_info[id].address.name}</span>
            <span className="body">{this.state.addresses_info[id].address.lat}, {this.state.addresses_info[id].address.lng}</span>
          </div>
        </div>
      );
    }

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
          id={"list-item "+this.state.material_count} 
          text="" 
          title="hidden" 
          rowtype="true"
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
          rowtype="true"
          placeholder="Write here..." 
          value={this.state.processes_content[this.state.process_count]}
          onChange={e => this.onChangeProcess(e, this.state.process_count)}
          onKeyPress={event => this.onAddProcess(event, this.state.process_count)} />
      </div>
    );

    return (
      <div className="registration-partner">        
        <div className="page-container">
          <span className="title-banner"> Let’s change the process for a brand new industry! </span>
          <div className="registration-banner">
            <div className="options">
              <CustomItems method="Input" text="Full name *" id="full-name" value={this.state.fullname} required />
              <CustomItems method="Input" text="Brand name *" id="brand-name" value={this.state.brandname} required />
              <CustomItems method="Select" text="Country *" id="country" options={countries} value={this.state.country} onChange={this.selectCountry} required />
              <CustomItems method="Email" text="E-Mail *" id="email" type="email" value={this.state.email} verified={this.state.email_verified} required />
              <CustomItems method="Label" text="" title="hidden" id="type-find-label" label="How did you find out about us?" />
              <CustomItems method="Select" text="" title="hidden" id="type-find" options={find_types} value={this.state.findType} onChange={this.selectFindtype} />
              <CustomItems method="PhoneNumber" text="Phone № *" id="phone-number" value={this.state.phoneNumber} onChange={this.selectPhoneNumber} verified={this.state.phone_verified} required />
              <CustomItems method="Input" text="DUNS № (if company created)" id="duns" value={this.state.duns_number} type="number" />
              <CustomItems method="Input" text="Company founded in  *" id="company-date" value={this.state.company_date} type="number" required />
              <CustomItems method="Input" text="Type of company *" id="company-type" value={this.state.company_type} required />
              <CustomItems method="Label" text="" title="hidden" id="type-software-label" label="Software of production using  *" />
              <CustomItems method="Select" text="" title="hidden" id="type-software" options={softwares} value={this.state.software} onChange={this.selectSoftware} required />
              <CustomItems method="Input" text="Minimum production quantity *" id="production" value={this.state.min_production} required />
              <CustomItems method="Input" text="Basic Technical Templates *" id="template" value={this.state.basic_technical} required />
              <CustomItems method="Input" text="Company size *" id="company-size" value={this.state.company_size} required />
              <CustomItems method="Input" text="№ of factories *" id="factory-number" value={this.state.facory_number} required />
              <CustomItems method="Label" text="" title="hidden" id="address-lable" label="Please, enter their addresses" />
              <CustomItems 
                method="GooglePlaces" 
                text="" 
                title="hidden" 
                id="inline-type-place" 
                value="10 Place Vendôme, 75001 Paris" 
                onSelect={this.handleGoogleAddress}
              />
              { address }
              <CustomItems method="Label" text="" title="hidden" id="address-lable" label="Your industry  *" />
              <CustomItems method="Input" text="" title="hidden" id="inline-industry" value={this.state.your_industry} required />
              <CustomItems method="Label" text="" title="hidden" id="address-lable" label="Your Know-how  *" />
              <CustomItems method="Input" text="" title="hidden" id="inline-know-how" value={this.state.your_knowhow} required />
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
              label="I agree to receive occasional newsletters containing news and advice on creating personal and business progress to becoming sustainable and ethics." 
              rowtype="true"/>
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

export default RegistrationPartner;