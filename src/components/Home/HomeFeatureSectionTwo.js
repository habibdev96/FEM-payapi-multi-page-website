import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import Paragraph from '../styledElements/Paragraphs';
import phonesImage from '../../assets/home/desktop/illustration-simple-ui.svg';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';

const Section = styled.section`
  background-color: var(--mirageBlue);
  overflow: hidden;
  position: relative;

  .bg-pattern {
    position: absolute;
    top: -20%;
    right: -20%;
    width: 50%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);

  .img {
    position: relative;
    z-index: 10;
  }
`;

const HomeFeatureSectionTwo = () => {
  return (
    <Section>
      <Container>
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
      </Container>
      <img src={bgPattern} alt='' className='bg-pattern' />
    </Section>
  );
};

export default HomeFeatureSectionTwo;
