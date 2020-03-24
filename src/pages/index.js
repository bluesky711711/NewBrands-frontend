import { lazy } from 'react';

export const PricingCreators = lazy(() => import('./PricingCreators'));
// export const RegistrationPartner = lazy(() => import('./RegistrationPartner'));
// export const RegistrationCreator = lazy(() => import('./RegistrationCreator'));
export const RegistrationConfirmed = lazy(() => import('./RegistrationConfirmed'));
export const ContactUs = lazy(() => import('./ContactUs'));
export const PricingPartners = lazy(() => import('./PricingPartners'));

export {default as RegistrationPartner} from './RegistrationPartner';
export {default as RegistrationCreator} from './RegistrationCreator';