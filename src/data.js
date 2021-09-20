import teslaDarkLogo from './assets/shared/desktop/tesla.svg';
import teslaLightLogo from './assets/shared/desktop/teslalight.svg';
import microsoftDarkLogo from './assets/shared/desktop/microsoft.svg';
import microsoftLightLogo from './assets/shared/desktop/microsoftlight.svg';
import hewlettDarkLogo from './assets/shared/desktop/hewlett-packard.svg';
import hewlettLightLogo from './assets/shared/desktop/hewlett-packardlight.svg';
import oracleDarkLogo from './assets/shared/desktop/oracle.svg';
import oracleLightLogo from './assets/shared/desktop/oraclelight.svg';
import googleDarkLogo from './assets/shared/desktop/google.svg';
import googleLightLogo from './assets/shared/desktop/googlelight.svg';
import nvidiaDarkLogo from './assets/shared/desktop/nvidia.svg';
import nvidiaLightLogo from './assets/shared/desktop/nvidialight.svg';

import featureCardIconOne from './assets/home/desktop/icon-personal-finances.svg';
import featureCardIconTwo from './assets/home/desktop/icon-banking-and-coverage.svg';
import featureCardIconThree from './assets/home/desktop/icon-consumer-payments.svg';

export const companiesData = [
  {
    id: 1,
    company: 'Tesla',
    logo: { light: teslaLightLogo, dark: teslaDarkLogo },
  },
  {
    id: 2,
    company: 'Microsoft',
    logo: { light: microsoftLightLogo, dark: microsoftDarkLogo },
  },
  {
    id: 3,
    company: 'Hewlett Packard',
    logo: { light: hewlettLightLogo, dark: hewlettDarkLogo },
  },
  {
    id: 4,
    company: 'Oracle',
    logo: { light: oracleLightLogo, dark: oracleDarkLogo },
  },
  {
    id: 5,
    company: 'Google',
    logo: { light: googleLightLogo, dark: googleDarkLogo },
  },
  {
    id: 6,
    company: 'Nvidia',
    logo: { light: nvidiaLightLogo, dark: nvidiaDarkLogo },
  },
];

export const featuresCardsData = [
  {
    id: 1,
    icon: featureCardIconOne,
    title: 'Personal Finances',
    description:
      'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
  },
  {
    id: 2,
    icon: featureCardIconTwo,
    title: 'Banking & Coverage',
    description:
      'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
  },
  {
    id: 3,
    icon: featureCardIconThree,
    title: 'Finances',
    description:
      'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
  },
];
