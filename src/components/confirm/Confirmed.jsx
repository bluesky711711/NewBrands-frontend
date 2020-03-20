import React from 'react';
import { Link } from 'react-router-dom';

import 'assets/styles/pages/confirmed.scss';

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

export class Confirmed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {

    return (
      <div className="confirmed">
        <span className="content"> {this.props.label} </span>
        <div className="bottom-line">
          <span className="midline"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
          <span className="bottom-text">L’équipe New/Brands.</span>
        </div>
      </div>
    );
  }
}