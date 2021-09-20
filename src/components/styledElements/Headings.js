import styled, { css } from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 7.2rem;
  color: var(--sanJuanBlue);
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 4.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--sanJuanBlue)')};
`;

export const SubHeading = styled.h3`
  ${headingStyles}
  font-size: 2.8rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--sanJuanBlue)')};
`;
