import React from 'react';
import { Link } from 'react-router-dom';

import { AppHeader, AppFooter, PriceCard } from "components";

import 'assets/styles/pages/pricing-partners.scss';

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
  ]
}

const factories = {
  note1: "No monthly payment,",
  note2: "and 0 € or % of additional fees, no matter what.",
  description: "If you process more than € 50,000 per quarter, then a monthly plan could be negotiated.",
}

class PricingPartners extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      factory_price: 5.00
    }
    this.onStartNew = this.onStartNew.bind(this);
  }

  componentDidMount() {
  }

  onStartNew() {
    window.location.href = '/registration-partner';
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
        <AppHeader type="black" index="0" subindex="0" />
        <div className="page-container">
          <div className="pricing-banner">
            <span className="title"> Pricing </span>
            <span className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <PriceCard type="active"
                title="FACTORIES"
                price={this.state.factory_price}
                view="price-unit"
                unit="%"
                note1={factories.note1}
                note2={factories.note2}
                description={factories.description}
                onClick={this.onStartNew}
            />
            <div className="faq">
              <Link to="#" className="owner">
                <span className="owner"> Onwer of multiples factories in Europe ? / </span>
                <span className="ask"> Ask for a call back </span>
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
        <AppFooter type="extend" />
      </div>
    );
  }
}

export default PricingPartners;