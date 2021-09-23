import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 7.2rem;
  color: var(--sanJuanBlue);

  ${Responsive.lg`
    font-size: 4.8rem;
  `}
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: ${({ lg }) => (lg ? '5.6rem' : '4.8rem')};
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--sanJuanBlue)')};

  ${Responsive.lg`
    font-size: ${({ lg }) => (lg ? '4.8rem' : '2.8rem')};
  `}
`;

export const SubHeading = styled.h3`
  ${headingStyles}
  font-size: 2.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--sanJuanBlue)')};
`;

export const PricingHeading = styled(SubHeading)`
  font-size: 3.2rem;
  color: var(--darkPink);
`;

export const AboutHeading = styled(PricingHeading)`
  color: var(--sanJuanBlue);
`;

export const StatHeading = styled(PricingHeading)`
  font-size: 5.6rem;
`;
