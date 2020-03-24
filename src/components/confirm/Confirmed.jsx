import React from 'react';

import 'assets/styles/pages/confirmed.scss';

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
          <span className="bottom-text">{this.props.from}</span>
        </div>
      </div>
    );
  }
}