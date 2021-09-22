import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings';
import Cta from '../Shared/Cta';
import heroImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import { textStyles } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link';
import { TwoCol } from '../styledElements/Containers';

const StyledHero = styled.header`
  .bg-pattern {
    position: absolute;
    z-index: 1;
    top: -10%;
    right: -10%;
    width: 50%;
  }

  .info {
    padding: 8rem 0;
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
  }
`;

const HomeHero = () => {
  return (
    <StyledHero>
      <TwoCol>
        <div className='info'>
          <HeroHeading>
            Start building with our APIs for absolutely free.
          </HeroHeading>
          <Cta />
          <p className='questions'>
            Have any questions?{' '}
            <StyledLink to='/Contact'>Contact us</StyledLink>
          </p>
        </div>
        <img
          src={heroImg}
          alt='payapi notification on mobile device'
          className='img'
        />
      </TwoCol>
    </StyledHero>
  );
};

export default HomeHero;
