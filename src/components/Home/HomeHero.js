import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings';
import Cta from '../Shared/Cta';
import heroImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import { textStyles } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link';
import { TwoCol } from '../styledElements/Containers';
import Responsive from '../../abstracts/Responsive';

const StyledHero = styled.header`
  .info {
    padding: 8rem 0;

    ${Responsive.md`
      padding: 2rem 0;
    `}
  }

  .questions {
    ${textStyles}
    font-size: 1.5rem;
    color: var(--lightSanJuanBlue);
  }

  .img {
    width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 10;

    ${Responsive.md`
    width: 90%;
    padding-left: 4rem;
    `}

    ${Responsive.sm`
      width: 100%; 
    `}
  }
`;

const HomeHero = () => {
  return (
    <StyledHero>
      <TwoCol sm>
        <div>
          <HeroHeading data-aos='fade-in'>
            Start building with our APIs for absolutely free.
          </HeroHeading>
          <Cta />
          <p className='questions' data-aos='fade-in' data-aos-delay='200'>
            Have any questions?{' '}
            <StyledLink to='/Contact'>Contact us</StyledLink>
          </p>
        </div>
        <img
          src={heroImg}
          alt='payapi notification on mobile device'
          className='img'
          data-aos='fade-in'
          data-aos-delay='200'
        />
      </TwoCol>
    </StyledHero>
  );
};

export default HomeHero;
