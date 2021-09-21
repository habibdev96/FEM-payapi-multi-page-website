import styled from 'styled-components';
import logo from '../../assets/shared/desktop/logolight.svg';
import StyledLink from '../styledElements/Link';
import { Link } from 'react-router-dom';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { FaFacebookSquare, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Tag from './Tag';

const StyledFooter = styled.footer`
  position: relative;
  background-color: var(--mirageBlue);
  overflow: hidden;

  .bg-pattern {
    position: absolute;
    width: 50%;
    bottom: -90%;
    left: -20%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  .socials {
    display: flex;
    align-items: center;
    gap: 3rem;

    svg {
      color: var(--white);
      font-size: var(--sm);
      transition: var(--mainTransition);

      &:hover,
      &:focus {
        color: var(--activePink);
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
        <div className='info'>
          <Link to='/'>
            <img src={logo} alt='payapi logo' className='logo' />
          </Link>
          <ul className='links'>
            <li>
              <StyledLink to='/Pricing' light={+true}>
                Pricing
              </StyledLink>
            </li>
            <li>
              <StyledLink to='/About' light={+true}>
                About
              </StyledLink>
            </li>
            <li>
              <StyledLink to='/Contact' light={+true}>
                Contact
              </StyledLink>
            </li>
          </ul>
        </div>
        <div className='socials'>
          <a href='#!'>
            <FaFacebookSquare />
          </a>
          <a href='#!'>
            <FaTwitter />
          </a>
          <a href='#!'>
            <FaLinkedin />
          </a>
        </div>
      </Container>
      <Tag />
    </StyledFooter>
  );
};

export default Footer;
