import styled from 'styled-components';
import { HeroHeading } from '../styledElements/Headings';
import Cta from '../Shared/Cta';
import heroImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { maxWidthLg, textStyles } from '../../abstracts/Mixins';
import StyledLink from '../styledElements/Link';

const Header = styled.header`
  .bg-pattern {
    position: absolute;
    z-index: 1;
    top: -10%;
    right: -10%;
    width: 50%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

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
    <Header>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
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
      </Container>
    </Header>
  );
};

export default HomeHero;
