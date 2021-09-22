import Cta from './Cta';
import { SectionHeading } from '../styledElements/Headings';
import { TwoCol } from '../styledElements/Containers';

const CtaSection = () => {
  return (
    <section>
      <TwoCol md center>
        <SectionHeading>Ready to start?</SectionHeading>
        <Cta />
      </TwoCol>
    </section>
  );
};

export default CtaSection;
