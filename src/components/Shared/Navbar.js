import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logo.svg';
import StyledLink from '../styledElements/Link';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { Link } from 'react-router-dom';
import { Button } from '../styledElements/Buttons';
import Responsive from '../../abstracts/Responsive';

const StyledNav = styled.nav`
  position: relative;
  z-index: 10;

  .info {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .logo {
    width: 20rem;

    ${Responsive.sm`
      width: 15rem;
    `}
  }

  .links {
    display: flex;
    align-items: center;
    gap: var(--gap);

    ${Responsive.md`
      display: none;
    `}
  }

  .btn {
    ${Responsive.md`
      display: none;
    `}
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Container>
        <div className='info'>
          <Link to='/'>
            <img src={logo} alt='payapi logo' className='logo' />
          </Link>
          <ul className='links'>
            <li>
              <StyledLink to='/Pricing'>Pricing</StyledLink>
            </li>
            <li>
              <StyledLink to='/About'>About</StyledLink>
            </li>
            <li>
              <StyledLink to='/Contact'>Contact</StyledLink>
            </li>
          </ul>
        </div>
        <Button to='Pricing' primary={+true} className='btn'>
          Schedule a Demo
        </Button>
      </Container>
    </StyledNav>
  );
};

export default Navbar;
