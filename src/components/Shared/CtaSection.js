import styled from 'styled-components';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings';
import Cta from './Cta';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const CtaSection = () => {
  return (
    <section>
      <Container>
        <SectionHeading>Ready to start?</SectionHeading>
        <Cta />
      </Container>
    </section>
  );
};

export default CtaSection;
