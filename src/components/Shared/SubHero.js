import { SectionHeading } from '../styledElements/Headings';
import { TwoCol } from '../styledElements/Containers';

const SubHero = ({ title }) => {
  return (
    <header>
      <TwoCol sm>
        <SectionHeading lg data-aos='fade-in'>
          {title}
        </SectionHeading>
      </TwoCol>
    </header>
  );
};

export default SubHero;
