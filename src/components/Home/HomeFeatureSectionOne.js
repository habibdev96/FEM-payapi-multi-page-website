import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import aboutImage from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const HomeFeatureSectionOne = () => {
  return (
    <section>
      <Container>
        <img src={aboutImage} alt='api code example' className='img' />
        <div className='info'>
          <SectionHeading>Easy to implement</SectionHeading>
          <Paragraph>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </Paragraph>
        </div>
      </Container>
    </section>
  );
};

export default HomeFeatureSectionOne;
