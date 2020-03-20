import React from 'react';
import clsx from 'clsx';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/assets/index.css';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import 'assets/styles/pages/registration-partner.scss';

const GreyInput = withStyles({
  root: {
    fontFamily: 'Gelion',
    '& > *': {
      padding: '0 10px 10px 15px',
      fontSize: '22px',
      lineHeight: '26px',
    },
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
      padding: '0 10px 10px 15px',
      fontSize: '22px',
      fontFamily: 'Gelion',
      lineHeight: '26px',
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
    fontFamily: 'Gelion',
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
      padding: '0 10px 10px 15px',
      fontSize: '22px',
      lineHeight: '26px',
    },
  },
})(TextField);

const useStyles = makeStyles({
  root: {
    fontFamily: 'Gelion',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    marginRight: '20px',
  },
  icon: {
    fontFamily: 'Gelion',
    borderRadius: '50%',
    width: 13,
    height: 13,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    fontFamily: 'Gelion',
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 13,
      height: 13,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

// Inspired by blueprintjs
function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// Button
const ValidateButton = withStyles({
  root: {
    fontFamily: 'Gelion',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 23,
    fontWeight: 200,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: '23px',
    backgroundColor: '#1C1C1C',
    borderColor: '#1C1C1C',
    borderRadius: '38px',
    width:'416px',
    height:'62px',
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
      padding: '0 10px 10px 15px',
      fontFamily: 'Gelion',
      fontWeight: '200',
      fontSize: '16px',
      lineHeight: '23px',
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
          <GreyTextField className="content" label="" select value={this.props.value} onChange={this.props.onChange} {...this.props} fullWidth required >
            {
              this.props.options.map(option => (
                <MenuItem key={option.value} value={option.value}> {option.label} </MenuItem>
              ))
            }
          </GreyTextField>
        );
        break;

      case "PhoneNumber":
        item = <div className="inner">
                  <PhoneInput
                    className="content"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    inputStyle = {{
                      border: 'none',
                      fontSize: '22px',
                      lineHeight: '26px',
                    }}
                    containerStyle = {{
                      borderBottom: '1px solid grey',
                    }}
                    buttonStyle = {{
                      background: 'transparent',
                      border: 'none',
                    }}
                    required />
                  <span className="verification">
                    <span className="mark">&#10003;</span>
                    &nbsp;
                    Phone number verification
                  </span>
              </div>
        break;

      case "Option":
        item = <FormControl component="fieldset">
                <RadioGroup aria-label="agree" name="agree" value={this.props.value} onChange={this.props.onChange}>
                  <CustomFromLabel value="agree" control={<StyledRadio />} label={this.props.label} />
                </RadioGroup>
              </FormControl>
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
                        fontSize: '22px',
                        lineHeight: '26px',
                        color: '#333333',
                        width: '100%',
                        outline: 'none',
                        padding: '0 20px 10px 20px',
                        borderBottom: '1px solid #CCCCCC',
                      }}
                      {...props}
                    />
                  </div>
                )}
                onSelect={console.log} />
        break;

      default:
        break;
    }

    return (
      <div className="item-container">
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