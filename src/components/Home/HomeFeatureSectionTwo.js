import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import Paragraph from '../styledElements/Paragraphs';
import phonesImage from '../../assets/home/desktop/illustration-simple-ui.svg';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';

const Section = styled.section`
  position: relative;

  .bg-pattern {
    width: 50%;
    position: absolute;
    top: -10%;
    right: -20%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const HomeFeatureSectionTwo = () => {
  return (
    <Section>
      <Container>
        <div className='info'>
          <SectionHeading>Simple UI & UX</SectionHeading>
          <Paragraph>
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
