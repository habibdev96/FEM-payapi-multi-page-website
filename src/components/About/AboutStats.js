import { StatHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { FlexSm } from '../styledElements/Containers';
import { useGlobalContext } from '../../context';

const AboutStats = () => {
  const { stats } = useGlobalContext();

  return (
    <section>
      <FlexSm sm>
        {stats.map((stat) => (
          <article key={stat.id} className='stat'>
            <Paragraph>{stat.title}</Paragraph>
            <StatHeading>{stat.count}</StatHeading>
          </article>
        ))}
      </FlexSm>
    </section>
  );
};

export default AboutStats;
