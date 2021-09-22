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

export const pricingData = [
  {
    id: 1,
    title: 'Free Plan',
    description:
      'Build and test using our core set of products with up to 100 API requests',
    cost: '$0.00',
    features: [
      {
        id: 1,
        feature: 'Transactions',
        isAvailable: true,
      },
      {
        id: 2,
        feature: 'Auth',
        isAvailable: true,
      },
      {
        id: 3,
        feature: 'Identity',
        isAvailable: true,
      },
      {
        id: 4,
        feature: 'Invenstments',
        isAvailable: false,
      },
      {
        id: 5,
        feature: 'Assets',
        isAvailable: false,
      },
      {
        id: 6,
        feature: 'Liabilities',
        isAvailable: false,
      },
      {
        id: 7,
        feature: 'Income',
        isAvailable: false,
      },
    ],
  },

  {
    id: 2,
    title: 'Basic Plan',
    description:
      'Launch your project with unlimited requests and no contractual minimums',
    cost: '$249.00',
    features: [
      {
        id: 1,
        feature: 'Transactions',
        isAvailable: true,
      },
      {
        id: 2,
        feature: 'Auth',
        isAvailable: true,
      },
      {
        id: 3,
        feature: 'Identity',
        isAvailable: true,
      },
      {
        id: 4,
        feature: 'Invenstments',
        isAvailable: true,
      },
      {
        id: 5,
        feature: 'Assets',
        isAvailable: true,
      },
      {
        id: 6,
        feature: 'Liabilities',
        isAvailable: false,
      },
      {
        id: 7,
        feature: 'Income',
        isAvailable: false,
      },
    ],
  },

  {
    id: 3,
    title: 'Premium Plan',
    description:
      'Get tailored solutions, volume pricing, and dedicated support for your team',
    cost: '$499.00',
    features: [
      {
        id: 1,
        feature: 'Transactions',
        isAvailable: true,
      },
      {
        id: 2,
        feature: 'Auth',
        isAvailable: true,
      },
      {
        id: 3,
        feature: 'Identity',
        isAvailable: true,
      },
      {
        id: 4,
        feature: 'Invenstments',
        isAvailable: true,
      },
      {
        id: 5,
        feature: 'Assets',
        isAvailable: true,
      },
      {
        id: 6,
        feature: 'Liabilities',
        isAvailable: true,
      },
      {
        id: 7,
        feature: 'Income',
        isAvailable: true,
      },
    ],
  },
];

export const aboutData = [
  [
    {
      id: 1,
      title: 'Our Vision',
      description:
        'Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.',
    },
    {
      id: 2,
      title: 'Our Business',
      description:
        'At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.',
    },
  ],
  [
    {
      id: 1,
      title: 'The Culture',
      description:
        "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
    },
    {
      id: 2,
      title: 'The People',
      description:
        "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
    },
  ],
];

export const statsData = [
  {
    id: 1,
    title: 'Team Members',
    count: '300+',
  },
  {
    id: 2,
    title: 'Offices in the US',
    count: '3',
  },
  {
    id: 3,
    title: 'Transactions Analyzed',
    count: '10M+',
  },
];
