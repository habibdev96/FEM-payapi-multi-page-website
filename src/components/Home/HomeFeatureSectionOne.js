import aboutImage from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { TwoCol } from '../styledElements/Containers';

const HomeFeatureSectionOne = () => {
  return (
    <section>
      <TwoCol center md>
        <img
          src={aboutImage}
          alt='api code example'
          className='img'
          data-aos='fade-in'
          data-aos-delay='100'
        />
        <div className='info'>
          <SectionHeading data-aos='fade-in' data-aos-delay='200'>
            Easy to implement
          </SectionHeading>
          <Paragraph data-aos='fade-in' data-aos-delay='300'>
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </Paragraph>
        </div>
      </TwoCol>
    </section>
  );
};

export default HomeFeatureSectionOne;
