import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

export const Button = styled(Link)`
  ${textStyles}
  position: relative;
  z-index: 10;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 1.5rem 2rem;
  cursor: pointer;
  border-radius: var(--btnRadius);
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      box-shadow: var(--mainShadow);
      background-color: var(--darkPink);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--activePink);
        box-shadow: var(--activeShadow);
      }
    `}
`;

export const CtaButton = styled.input`
  ${textStyles}
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 1.5rem 2rem;
  border: 0;
  cursor: pointer;
  border-radius: var(--btnRadius);
  transition: var(--mainTransition);
  background-color: var(--darkPink);
  color: var(--white);

  &:hover,
  &:focus {
    background-color: var(--activePink);
  }
`;
