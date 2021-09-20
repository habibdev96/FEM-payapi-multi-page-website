import { useState } from 'react';
import styled from 'styled-components';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import { companiesData } from '../../data';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { Button } from '../styledElements/Buttons';

const Section = styled.section`
  position: relative;
  background-color: var(--mirageBlue);
  overflow: hidden;

  .bg-pattern {
    width: 50%;
    position: absolute;
    top: -105%;
    left: -20%;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 20rem;

  .companies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
  }

  .company {
    width: 15rem;

    &:nth-child(5) {
      width: 12rem;
      margin: 0 auto;
    }
  }
`;

const Partners = () => {
  const [companies, setCompanies] = useState(companiesData);

  return (
    <Section>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <Container>
        <div className='info'>
          <SectionHeading light>Who we work with</SectionHeading>
          <Paragraph light>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </Paragraph>
          <Button to='/About' secondary={+true}>
            About us
          </Button>
        </div>
        <div className='companies'>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.logo.light}
              alt={company.company}
              className='company'
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Partners;
