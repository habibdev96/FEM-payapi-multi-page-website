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

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: transparent;
      border: 0.1rem solid var(--white);
      color: var(--white);
      padding: 1rem 2rem;

      &:hover,
      &:focus {
        background-color: var(--white);
        color: var(--mirageBlue);
      }
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: transparent;
      border: 0.1rem solid var(--sanJuanBlue);
      color: var(--sanJuanBlue);
      padding: 1rem 2rem;

      &:hover,
      &:focus {
        background-color: var(--sanJuanBlue);
        color: var(--white);
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
