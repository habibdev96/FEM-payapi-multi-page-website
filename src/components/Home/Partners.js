import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { Button } from '../styledElements/Buttons';
import { TwoCol, ThreeCol } from '../styledElements/Containers';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
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

const Partners = () => {
  const { companies } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <TwoCol gap center md>
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
        <ThreeCol gap center>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.logo.light}
              alt={company.company}
              className='company'
            />
          ))}
        </ThreeCol>
      </TwoCol>
    </StyledSection>
  );
};

export default Partners;
