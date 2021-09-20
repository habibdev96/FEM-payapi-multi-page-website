import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const Button = styled(Link)`
  ${textStyles}
  font-size: 1.5rem;
  font-weight: bold;
  display: inline-block;
  padding: 1.5rem 2rem;
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

export default Button;
