import styled from 'styled-components';
import ContactForm from './ContactForm';
import { SubHeading } from '../styledElements/Headings';
import { TwoCol } from '../styledElements/Containers';
import { useGlobalContext } from '../../context';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  .companies {
    padding-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: var(--gap);

    ${Responsive.lg`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${Responsive.md`
      grid-template-columns: repeat(3, 1fr);
    `}

    ${Responsive.sm`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${Responsive.xs`
      display: none;
    `}
  }

  .company {
    width: 15rem;
  }
`;

const ContactSection = () => {
  const { companies } = useGlobalContext();

  return (
    <StyledSection>
      <TwoCol md center>
        <ContactForm />
        <div className='info'>
          <SubHeading data-aos='fade-in' data-aos-delay='100'>
            Join the thousands of innovators already building with u
          </SubHeading>
          <div className='companies' data-aos='fade-in' data-aos-delay='200'>
            {companies.map((company) => (
              <img
                key={company.id}
                src={company.logo.dark}
                alt={company.company}
                className='company'
              />
            ))}
          </div>
        </div>
      </TwoCol>
    </StyledSection>
  );
};

export default ContactSection;
