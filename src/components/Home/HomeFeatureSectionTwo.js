import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import phonesImage from '../../assets/home/desktop/illustration-simple-ui.svg';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { TwoCol } from '../styledElements/Containers';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  background-color: var(--mirageBlue);
  overflow: hidden;
  position: relative;

  .bg-pattern {
    position: absolute;
    top: -20%;
    right: -20%;
    width: 50%;

    ${Responsive.md`
      width: 100%;
    `}
  }

  .img {
    position: relative;
    z-index: 10;
  }
`;

const HomeFeatureSectionTwo = () => {
  return (
    <StyledSection>
      <TwoCol center md>
        <div className='info'>
          <SectionHeading light>Simple UI & UX</SectionHeading>
          <Paragraph light>
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </Paragraph>
        </div>
        <img
          src={phonesImage}
          alt='illustration of payapi app'
          className='img'
        />
      </TwoCol>
      <img src={bgPattern} alt='' className='bg-pattern' />
    </StyledSection>
  );
};

export default HomeFeatureSectionTwo;
