import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logo.svg';
import StyledLink from '../styledElements/Link';
import { Link } from 'react-router-dom';
import { Button } from '../styledElements/Buttons';
import { Flex } from '../styledElements/Containers';

const StyledNav = styled.nav`
  .info {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .logo {
    width: 20rem;
  }

  .links {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <Flex sm>
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
        <Button to='Pricing' primary={+true}>
          Schedule a Demo
        </Button>
      </Flex>
    </StyledNav>
  );
};

export default Navbar;
