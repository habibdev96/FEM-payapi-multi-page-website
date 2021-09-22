import styled from 'styled-components';
import { StatHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { maxWidthSm, sectionSpacingSm } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthSm}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  gap: 2rem;
`;

const AboutStats = () => {
  const { stats } = useGlobalContext();

  return (
    <section>
      <Container>
        {stats.map((stat) => (
          <article key={stat.id} className='stat'>
            <Paragraph>{stat.title}</Paragraph>
            <StatHeading>{stat.count}</StatHeading>
          </article>
        ))}
      </Container>
    </section>
  );
};

export default AboutStats;
