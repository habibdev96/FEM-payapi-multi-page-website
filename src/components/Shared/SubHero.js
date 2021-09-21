import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';

const Header = styled.header`
  position: relative;

  .bg-pattern {
    position: absolute;
    width: 35%;
    top: -250%;
    right: -10%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
`;

const SubHero = ({ title }) => {
  return (
    <Header>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
        <SectionHeading subhero>{title}</SectionHeading>
      </Container>
    </Header>
  );
};

export default SubHero;
