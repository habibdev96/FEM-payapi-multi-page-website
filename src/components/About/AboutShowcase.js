import styled from 'styled-components';
import showcaseImage from '../../assets/about/desktop/image-team-members.jpg';
import { SecondaryBgPattern } from '../styledElements/Pattern';

const Section = styled.section`
  position: relative;
`;

const AboutShowcase = () => {
  return (
    <Section>
      <SecondaryBgPattern />
      <img src={showcaseImage} alt='' />
    </Section>
  );
};

export default AboutShowcase;
