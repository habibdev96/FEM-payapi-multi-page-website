import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
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
