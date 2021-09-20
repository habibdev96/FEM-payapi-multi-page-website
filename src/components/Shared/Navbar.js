import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logo.svg';
import StyledLink from '../styledElements/Link';
import { Link } from 'react-router-dom';
import { Button } from '../styledElements/Buttons';
import { maxWidthLg } from '../../abstracts/Mixins';

const Container = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 2rem;

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
    <nav>
      <Container>
        <div className='info'>
          <Link to='/'>
            <img src={logo} alt='payapi logo' className='logo' />
          </Link>
          <ul className='links'>
            <StyledLink to='/Pricing'>Pricing</StyledLink>
            <StyledLink to='/About'>About</StyledLink>
            <StyledLink to='/Contact'>Contact</StyledLink>
          </ul>
        </div>
        <Button to='Pricing' primary>
          Schedule a Demo
        </Button>
      </Container>
    </nav>
  );
};

export default Navbar;
