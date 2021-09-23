import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import { sectionSpacingSm } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link';
import { Button } from '../styledElements/Buttons';

const StyledMobileMenu = styled.aside`
  background-color: var(--mirageBlue);
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 75vw;
  z-index: 3000;

  @media (min-width: 800px) {
    display: none;
  }

  .top {
    ${sectionSpacingSm}
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .toggle {
    background: transparent;
    outline: 0;
    border: 0;
  }

  .icon {
    color: var(--white);
    font-size: var(--lg);
  }

  .info {
    text-align: center;
    border-top: 0.1rem solid hsla(207, 16%, 50%, 0.2);

    li {
      margin: 2.5rem 0;
    }
  }

  .btn {
    width: 75%;
  }
`;

const MobileMenu = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();

  if (isSidebarOpen) {
    return (
      <StyledMobileMenu>
        <div className='top'>
          <button className='toggle' onClick={() => setIsSidebarOpen(false)}>
            <FaTimes className='icon' />
          </button>
        </div>
        <ul className='info'>
          <li>
            <StyledLink
              to='/Pricing'
              light={+true}
              mobile={+true}
              onClick={() => setIsSidebarOpen(false)}
            >
              Pricing
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to='/About'
              light={+true}
              mobile={+true}
              onClick={() => setIsSidebarOpen(false)}
            >
              About
            </StyledLink>
          </li>
          <li>
            <StyledLink
              to='/Contact'
              light={+true}
              mobile={+true}
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact
            </StyledLink>
          </li>
          <Button
            to='/Contact'
            className='btn'
            primary={+true}
            onClick={() => setIsSidebarOpen(false)}
          >
            Schedule a Demo
          </Button>
        </ul>
      </StyledMobileMenu>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
