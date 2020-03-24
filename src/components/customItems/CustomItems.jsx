import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/assets/index.css';

import 'assets/styles/pages/registration.scss';

const GreyInput = withStyles({
  input: {
    fontFamily: 'Gelion',  
    padding: '0 0.5em 0.4545em 0.6818em',
    fontSize: '1em',
    lineHeight: '1.1818em',
    width: '100%',
  },
  underline: {
    '&:after': {
      borderBottomColor: 'grey',
    },
    '&:before': {
      borderBottomColor: '#CCCCCC',
    }
  }
})(Input);

const WriteInput = withStyles({
  root: {
    fontFamily: 'Gelion',
    '& > *': {
      padding: '0 0.4545em 0.4545em 0.6818em',
      fontSize: '1em',
      fontFamily: 'Gelion',
      lineHeight: '1.1818em',
    },
  },
  underline: {
    '&:after': {
      borderBottom: 'none',
    },
    '&:before': {
      borderBottomColor: '#CCCCCC',
    }
  }
})(Input);

const GreyTextField = withStyles({
  root: {    
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'grey',
      },
    },
    '& > *': {
      fontFamily: 'Gelion',
      padding: '0 0.4545em 0.1363em 0.6818em',
      fontSize: '1em',
      lineHeight: '1.1818em',
    },
  },
})(TextField);

const MultiTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'grey',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'grey',
    },
    '& .MuiOutlinedInput-root': {
      height: '100%',
      '& MuiOutlinedInput-inputMultiline': {        
        marginTop: 0,
        marginBottom: 'auto',
      },
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
    '& > *': {
      padding: '0',
      fontFamily: 'Georgia',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      color: 'rgba(0, 0, 0, 0.7)',
      width: "100%",
      height: "100%",
    },
  },
})(TextField);

// Button
const ValidateButton = withStyles({
  root: {
    fontFamily: 'Gelion',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: '1.04545em',
    fontWeight: 200,
    padding: '0.2727em 0.4615em',
    border: '1px solid',
    lineHeight: '1.045em',
    backgroundColor: '#1C1C1C',
    borderColor: '#1C1C1C',
    borderRadius: '1.727em',
    width:'18.909em',
    height:'2.8181em',
    '&:hover': {
      backgroundColor: '#313131',
      borderColor: '#313131',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#313131',
      borderColor: '#313131',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(49, 49, 49,.5)',
    },
  },
})(Button);

const CustomFromLabel = withStyles({
  root: {
    fontFamily: 'Gelion',
    '& > *': {
      padding: '0 0.4545em 0.4545em 0.6818em',
      fontFamily: 'Gelion',
      fontWeight: '200',
      fontSize: '1em',
      lineHeight: '1.04545em',
    },
  },
})(FormControlLabel);

export class CustomItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {
    let item = [];

    switch (this.props.method) {
      case "Label":
        item = <div className="content"> <span className="title"> {this.props.label} </span> </div>;
        break;
        
      case "Text":
        item = <span className="content text">{this.props.text}</span>;
        break;

      case "FormattedContent":
        item =  <div className="content formatted">
                  <span><strong>{this.props.header1}</strong>{this.props.header2}</span>
                  <span>{this.props.body}</span>
                </div>;
        break;

      case "Input":
        item = <GreyInput className="content" label="" placeholder="" value={this.props.value} {...this.props} fullWidth />;
        break;

      case "WriteInput":
        item = <WriteInput className="content" label="" placeholder="" value={this.props.value} onChange={this.onChange} onKeyPress={this.props.onKeyPress} {...this.props} fullWidth />;
        break;

      case "Select":
        item = (
          <GreyTextField className="content" label="" select value={this.props.value} onChange={this.props.onChange} {...this.props} required >
            {
              this.props.options.map(option => (
                <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
              ))
            }
          </GreyTextField>
        );
        break;

      case "Email":
        item = <div className="inner">
                  <GreyInput className="content" label="" placeholder="" value={this.props.value} {...this.props} fullWidth />
                  <span className={this.props.verified === "true" ? "verification active": "verification"}>
                    <span className="mark">&#10003;</span>
                    &nbsp;
                    {this.props.verifylabel}
                  </span>
              </div>
        break;

      case "PhoneNumber":
        item = <div className="inner">
                  <PhoneInput
                    className="content"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    inputStyle = {{
                      border: 'none',
                      fontSize: '1em',
                      lineHeight: '1.1818em',
                    }}
                    containerStyle = {{
                      borderBottom: '1px solid grey',
                    }}
                    buttonStyle = {{
                      background: 'transparent',
                      border: 'none',
                    }}
                    required />
                  <span className={this.props.verified === "true" ? "verification active": "verification"}>
                    <span className="mark">&#10003;</span>
                    &nbsp;
                    {this.props.verifylabel}
                  </span>
              </div>
        break;

      case "Option":
        item = <CustomFromLabel
                value="end"
                control={
                  <Checkbox 
                    className="content"
                    color="primary" 
                    icon={<CircleUnchecked style={{width: '13px'}} />}
                    checkedIcon={<CircleCheckedFilled style={{width: '13px', fill: "#333333"}}  />}
                    checked={this.props.value}
                    onChange={this.props.onChange}
                    disableRipple
                    {...this.props}/>
                }
                label={this.props.label}
                labelPlacement="end"
              />        
        break;

      case "Button":
        item = <ValidateButton variant="contained" color="primary" onClick={this.props.onClick} disableElevation> {this.props.label} </ValidateButton>;
        break;

      case "GooglePlaces":
        item = <GooglePlacesAutocomplete 
                renderInput={(props) => (
                  <div className="content">
                    <input
                      // Custom properties
                      style={{
                        boxShadow: 'none',
                        fontFamily: 'Gelion',
                        fontSize: '1.333em',
                        lineHeight: '1.0196em',
                        color: '#333333',
                        width: '100%',
                        outline: 'none',
                        padding: '0 0.909em 0.4545em 0.909em',
                        border: 'none',
                        borderBottom: '1px solid #CCCCCC',
                      }}
                      {...props}
                    />
                  </div>
                )}
                onSelect={this.props.onSelect} />
        break;
      
      case "MuiltiTextField":
        item = <MultiTextField
                label=""
                multiline
                rows="2"
                variant="outlined"
                {...this.props}
              />
        break;

      default:
        break;
    }

    return (
      <div className={this.props.rowtype !== undefined && this.props.rowtype === "true" ? "item-container": "col-md-6 item-container"}>
        <div className="item">
          <div className="type" style={(this.props.text === "" || this.props.title === "hidden") ? {display: 'none'} : {display: 'flex'}}>{this.props.text}</div>
          <div className="input">
            {/* <form validate autoComplete="off"> */}
              {item}
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
} 