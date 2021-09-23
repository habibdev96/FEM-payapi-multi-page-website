import styled from 'styled-components';
import AboutCompany from './AboutCompany';
import { maxWidthSm, sectionSpacingSm } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const Container = styled.div`
  ${sectionSpacingSm}
  ${maxWidthSm}

  ${Responsive.md`
    text-align: center; 
  `}
`;

export const AboutCompanyOne = () => {
  const { aboutTop } = useGlobalContext();

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
  const { aboutBottom } = useGlobalContext();

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
