import styled from 'styled-components';
import { SectionHeading } from '../styledElements/Headings';
import Paragraph from '../styledElements/Paragraphs';
import bgPattern from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { Button } from '../styledElements/Buttons';
import { TwoCol } from '../styledElements/Containers';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  position: relative;
  background-color: var(--mirageBlue);
  overflow: hidden;

  .bg-pattern {
    width: 50%;
    position: absolute;
    top: -105%;
    left: -20%;

    ${Responsive.xxl`
      top: -30%;
    `}

    ${Responsive.md`
      top: -20%;
      width: 100%;
    `}
  }

  .companies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: var(--gap);
  }
`;

const Partners = () => {
  const { companies } = useGlobalContext();

  return (
    <StyledSection>
      <img src={bgPattern} alt='' className='bg-pattern' />
      <TwoCol gap center md>
        <div className='info'>
          <SectionHeading light data-aos='fade-in'>
            Who we work with
          </SectionHeading>
          <Paragraph light data-aos='fade-in' data-aos-delay='100'>
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </Paragraph>
          <div data-aos='fade-in' data-aos-delay='200'>
            <Button to='/About' secondary={+true}>
              About us
            </Button>
          </div>
        </div>
        <div className='companies' data-aos='fade-in' data-aos-delay='300'>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.logo.light}
              alt={company.company}
              className='company'
            />
          ))}
        </div>
      </TwoCol>
    </StyledSection>
  );
};

export default Partners;
