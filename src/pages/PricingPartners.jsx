import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import { PriceCard } from "components";

import 'assets/styles/pages/pricing.scss';

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
    const { t } = this.props;
    let subcontent_count = 4;

    let content_items = [];
    for (let i =0; i < subcontent_count; i++) {
      content_items.push(
        <div className="col-md-6" key={i}>
          <div className="content-item">
            <span className="title"> {t("PricePage.ContentList.Partners.Subcontents."+ i +".Title")} </span>
            <span className="content"> {t("PricePage.ContentList.Partners.Subcontents."+ i +".Content")} </span>
          </div>
        </div>
      );
    }

    let content_title = (
      <div className="content-title">
        <span className="title"> { t("PricePage.ContentList.Partners.Title.Title") } </span>
        <span className="content"> { t("PricePage.ContentList.Partners.Title.Content") } </span>
      </div>
    );

    return (
      <div className="pricing-partners">
        <div className="page-container">
          <div className="pricing-banner">
            <span className="title"> { t("PricePage.Pricing") } </span>
            <span className="description">
            {t("PricePage.PriceDescription")}
            </span>
            <PriceCard type="active"
                title={t("PricePage.Factories.Label").toUpperCase()}
                price={this.state.factory_price}
                view="price-unit"
                unit="%"
                note1={t("PricePage.Factories.Note1")}
                note2={t("PricePage.Factories.Note2")}
                description={t("PricePage.Factories.Description")}
                btnname={t("PricePage.StartButton")}
                onClick={this.onStartNew}
            />
            <div className="faq">
              <Link to="#" className="owner">
                <span className="owner"> {t("PricePage.Callback.Partners.Note1")} </span>
                <span className="ask"> {t("PricePage.Callback.Partners.Note2")} </span>
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
            <div className="col-xl-6 col-5 question"> {t("PricePage.FAQ")} </div>
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

export default withTranslation()(PricingPartners);