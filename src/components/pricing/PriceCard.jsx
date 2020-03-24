import React from 'react';
import { Link } from 'react-router-dom';

import 'assets/styles/pages/price-card.scss';

export class PriceCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {
  }

  render() {
    let parts = this.props.price.toFixed(2).split(".");
    let formattedPrice = parts[0] + (parts[1] ? "," + parts[1] : "");

    return (
      <div className={"price-card " + this.props.type}>
        <span className="title"> {this.props.title} </span>
        <div className="values">
          { this.props.view === "price-unit" && <>
              <span className="price"> { formattedPrice } </span>
              <span className="unit"> {this.props.unit} </span>
            </>
          }
          { this.props.view === "unit-price" && <>
              <span className="unit"> {this.props.unit} </span>
              <span className="price"> { this.props.price } </span>
            </>
          }
        </div>
        <span className="payment">
          {this.props.note1}
          <br/>
          {this.props.note2}
        </span>
        <span className="notation">
          { this.props.description }
        </span>
        <Link to="#" className="start-now" onClick={this.props.onClick}> {this.props.btnname} </Link>
      </div>
    );
  }
}