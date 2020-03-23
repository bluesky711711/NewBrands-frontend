import React, { Suspense } from 'react';
import { Route, withRouter } from "react-router-dom";

import {FrontendLayout}  from 'layouts';
import {
  PricingPartners,
  PricingCreators,
  RegistrationPartner,
  RegistrationConfirmed,
  RegistrationCreator,
  ContactUs,
}  from 'pages';

import 'assets/styles/app.scss';

/*
* Main Router Page
* Add all pages here by route.
*/
class App extends React.Component {
  componentDidUpdate(prevProps) {
  }
  render() {
    return (
      <div className="App">
        <FrontendLayout>
          <Suspense fallback={<div>Loading...</div>}>

            {/* Dashboard routes */}
            <Route exact path="/" component={PricingPartners} />
            <Route exact path="/pricing-partners" component={PricingPartners} />
            <Route exact path="/pricing-creators" component={PricingCreators} />
            <Route exact path="/registration-partner" component={RegistrationPartner} />
            <Route exact path="/registration-confirmed" component={RegistrationConfirmed} />
            <Route exact path="/registration-creator" component={RegistrationCreator} />
            <Route exact path="/Contact-Us" component={ContactUs} />

          </Suspense>
        </FrontendLayout>
      </div>
    );
  }
}

export default withRouter(props => <App {...props} />);