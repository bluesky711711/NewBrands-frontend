import React from 'react';
import { Link } from 'react-router-dom';

import { PriceCard } from "components";

import 'assets/styles/pages/pricing-creators.scss';

const contentList = {
  title: {
    title: "THINGS FOR EACH AND EVERY PRICE",
    content: "There are numerous things Contractbook contains that will speed up and enhance  your workflow regarding contracts. Take a look!",
  },
  subcontents: [
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      title: "/ THAT’S AUTHENTIC TO YOU",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ]
}

const creators = [
  {
    note1: "Per month for 12 months only.",
    note2: "then, 7% per production + 0,25 €",
    description: "Nous vous accompagnons dans les étapes essentielles et nous nous occupons du reste.",
  },
  {
    note1: "1   production out of charge",
    note2: "then, 7% per production + 0,25 €",
    description: "Nous vous accompagnons dans les étapes essentielles et nous nous occupons du reste.",
  },
];

const brands = [
  {
    note1: "Per month for 12 months only.",
    note2: "Plus, 7% per production + 0,25 €",
    description: "If you process more than € 15,000 per quarter of production volume or produce complex models.",
  },
  {
    note1: "1   production out of charge",
    note2: "then, 1,4 % per production + 0,25 €",
    description: "If you process more than € 15,000 per quarter of production volume or produce complex models.",
  }
];

class PricingCreators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creators: creators[0],
      brands: brands[0],
      creators_price: 50,
      brands_price: 80,
      pricing_view: "monthly"
    }
    this.setMonthly = this.setMonthly.bind(this);
    this.setYearly = this.setYearly.bind(this);
    this.onStartNew = this.onStartNew.bind(this);
  }

  componentDidMount() {
  }

  setMonthly() {
    this.setState({
      pricing_view: "monthly",
      creators_price: 50,
      brands_price: 80,
      creators: creators[0],
      brands: brands[0]
    });
  }

  setYearly() {
    this.setState({
      pricing_view: "yearly",
      creators_price: 500,
      brands_price: 800,
      creators: creators[1],
      brands: brands[1]
    });
  }

  onStartNew() {
    window.location.href = '/registration-creator';
  }

  render() {
    let content_items = contentList.subcontents.map((item, index) => {
      return (
        <div className="col-md-6" key={index}>
          <div className="content-item">
            <span className="title"> {item.title} </span>
            <span className="content"> {item.content} </span>
          </div>
        </div>
      );
    });

    let content_title = (
      <div className="content-title">
        <span className="title"> { contentList.title.title } </span>
        <span className="content"> { contentList.title.content } </span>
      </div>
    );

    return (
      <div className="pricing-partners">
        <div className="page-container">
          <div className="pricing-banner">
            <span className="title"> Pricing </span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className="monthly-btns">
              <span className={this.state.pricing_view === "monthly" ? "btn-base active" : "btn-base"} onClick={this.setMonthly}>Monthly</span>
              <span className={this.state.pricing_view === "yearly" ? "btn-base active" : "btn-base"} onClick={this.setYearly}>Yearly</span>
            </div>
            <div className="pricing-cards">
              <PriceCard type="inactive"
                title="CREATEURS"
                price={this.state.creators_price}
                view="unit-price"
                unit="€"
                note1={this.state.creators.note1}
                note2={this.state.creators.note2}
                description={this.state.creators.description}
                onClick = {this.onStartNew}
              />
              <PriceCard type="inactive"
                title="BRANDS"
                price={this.state.brands_price}
                view="unit-price"
                unit="€"
                note1={this.state.brands.note1}
                note2={this.state.brands.note2}
                description={this.state.brands.description}
                onClick = {this.onStartNew}
              />
            </div>
            <div className="faq">
              <Link to="#" className="owner">
                <span className="owner"> You process more than € 30,000 per quarter of production volume ? /  </span>
                <span className="ask"> Contacter l’équipe commerciale </span>
              </Link>
              {/* <span className="interval"> / </span>
              <Link to="#" className="ask"></Link> */}
            </div>
          </div>
          <div className="content-banner">
            { content_title }
            <div className="row contents">
              { content_items }
            </div>
          </div>
          <div className="contact-banner">
            <div className="col-6 question"> Keep having question ? </div>
            <div className="col-6 informaion">
              <span className="times"> Mon -- Fri     /     9:30am -- 5:30pm </span>
              <br/>
              <span className="email"> hello@newbrands.fr     /     +(33) 01 00 00 00 00 </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PricingCreators;