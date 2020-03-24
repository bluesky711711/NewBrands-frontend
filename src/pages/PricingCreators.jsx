import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { PriceCard } from "components";

import 'assets/styles/pages/pricing.scss';

const subcontents_count = 6;

class PricingCreators extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      creators: 0,
      brands: 0,
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
      creators: 0,
      brands: 0
    });
  }

  setYearly() {
    this.setState({
      pricing_view: "yearly",
      creators_price: 500,
      brands_price: 800,
      creators: 1,
      brands: 1
    });
  }

  onStartNew() {
    window.location.href = '/registration-creator';
  }

  render() {
    const { t } = this.props;

    let content_items = [];
    for (let i = 0; i < subcontents_count; i++) {
      content_items.push(
        <div className="col-md-6" key={i}>
          <div className="content-item">
            <span className="title"> {t("PricePage.ContentList.Creators.Subcontents."+i+".Title")} </span>
            <span className="content"> {t("PricePage.ContentList.Creators.Subcontents."+i+".Content")} </span>
          </div>
        </div>
      );
    }

    let content_title = (
      <div className="content-title">
        <span className="title"> { t("PricePage.ContentList.Creators.Title.Title") } </span>
        <span className="content"> { t("PricePage.ContentList.Creators.Title.Content") } </span>
      </div>
    );

    return (
      <div className="pricing-creators">
        <div className="page-container">
          <div className="pricing-banner">
            <span className="title"> { t("PricePage.Pricing") } </span>
            <span className="description">
              {t("PricePage.PriceDescription")}
            </span>
            <div className="monthly-btns">
              <span className={this.state.pricing_view === "monthly" ? "btn-base active" : "btn-base"} onClick={this.setMonthly}>{t("PricePage.Monthly")}</span>
              <span className={this.state.pricing_view === "yearly" ? "btn-base active" : "btn-base"} onClick={this.setYearly}>{t("PricePage.Yearly")}</span>
            </div>
            <div className="pricing-cards">
              <PriceCard type="inactive"
                title={t("PricePage.Creators.Label").toUpperCase()}
                price={this.state.creators_price}
                view="unit-price"
                unit="€"
                note1={t("PricePage.Creators."+this.state.creators+".Note1")}
                note2={t("PricePage.Creators."+this.state.creators+".Note2")}
                description={t("PricePage.Creators."+this.state.creators+".Description")}
                btnname={t("PricePage.StartButton")}
                onClick = {this.onStartNew}
              />
              <PriceCard type="inactive"
                title={t("PricePage.Brands.Label").toUpperCase()}
                price={this.state.brands_price}
                view="unit-price"
                unit="€"
                note1={t("PricePage.Brands."+this.state.brands+".Note1")}
                note2={t("PricePage.Brands."+this.state.brands+".Note2")}
                description={t("PricePage.Brands."+this.state.brands+".Description")}
                btnname={t("PricePage.StartButton")}
                onClick = {this.onStartNew}
              />
            </div>
            <div className="faq">
              <Link to="#" className="owner">
                <span className="owner"> {t("PricePage.Callback.Creators.Note1")}  </span>
                <span className="ask"> {t("PricePage.Callback.Creators.Note2")} </span>
              </Link>
            </div>
          </div>
          <div className="content-banner">
            { content_title }
            <div className="row contents">
              { content_items }
            </div>
          </div>
          <div className="contact-banner">
            <div className="col-xl-6 col-5 question question"> {t("PricePage.FAQ")} </div>
            <div className="col-xl-6 col-7 informaion">
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

export default withTranslation()(PricingCreators);