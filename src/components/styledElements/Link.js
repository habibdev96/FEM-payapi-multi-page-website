import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { textStyles } from '../../abstracts/Mixins';

const StyledLink = styled(Link)`
  ${textStyles}
  position: relative;
  z-index: 10;
  font-size: ${({ mobile }) => (mobile ? '2.3rem' : '1.5rem')};
  font-weight: bold;
  transition: var(--mainTransition);
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--lightSanJuanBlue)')};

  &:hover,
  &:focus {
    color: ${({ light }) =>
      light ? 'var(--faintBlue)' : 'var(--sanJuanBlue)'};
  }
`;

export default StyledLink;
