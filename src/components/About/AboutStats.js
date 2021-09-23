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
          <article
            key={stat.id}
            className='stat'
            data-aos='fade-in'
            data-aos-delay='100'
          >
            <Paragraph>{stat.title}</Paragraph>
            <StatHeading>{stat.count}</StatHeading>
          </article>
        ))}
      </FlexSm>
    </section>
  );
};

export default AboutStats;
