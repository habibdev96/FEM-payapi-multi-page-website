import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const SubHero = ({ title }) => {
  return (
    <header>
      <Container>
        <SectionHeading lg>{title}</SectionHeading>
      </Container>
    </header>
  );
};

export default SubHero;
