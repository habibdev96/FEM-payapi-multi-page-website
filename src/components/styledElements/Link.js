import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${textStyles}
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--lightSanJuanBlue);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--sanJuanBlue);
  }
`;

export default StyledLink;
