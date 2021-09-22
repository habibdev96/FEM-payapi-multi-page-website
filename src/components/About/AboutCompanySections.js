import { useState } from 'react';
import styled from 'styled-components';
import AboutCompany from './AboutCompany';
import { aboutData } from '../../data';
import { maxWidthSm, sectionSpacingSm } from '../../abstracts/Mixins';

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthSm}
`;

export const AboutCompanyOne = () => {
  const [aboutTop, setAboutTop] = useState(aboutData[0]);

  return (
    <section>
      <Container>
        {aboutTop.map((item) => (
          <AboutCompany key={item.id} {...item} />
        ))}
      </Container>
    </section>
  );
};

export const AboutCompanyTwo = () => {
  const [aboutBottom, setAboutBottom] = useState(aboutData[1]);

  return (
    <section>
      <Container>
        {aboutBottom.map((item) => (
          <AboutCompany key={item.id} {...item} />
        ))}
      </Container>
    </section>
  );
};
