import { lazy } from 'react';

export const PricingPartners = lazy(() => import('./PricingPartners'));
export const PricingCreators = lazy(() => import('./PricingCreators'));
export const RegistrationPartner = lazy(() => import('./RegistrationPartner'));
export const RegistrationCreator = lazy(() => import('./RegistrationCreator'));
export const RegistrationConfirmed = lazy(() => import('./RegistrationConfirmed'));
export const ContactUs = lazy(() => import('./ContactUs'));
// export {default as Dashboard} from './dashboard'; // Already imported as lazy in dashboard/index.js