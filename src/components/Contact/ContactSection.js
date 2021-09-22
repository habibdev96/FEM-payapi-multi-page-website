import styled from 'styled-components';
import ContactForm from './ContactForm';
import { SubHeading } from '../styledElements/Headings';
import { TwoCol, ThreeCol } from '../styledElements/Containers';
import { useGlobalContext } from '../../context';

const StyledSection = styled.section`
  .companies {
    padding-top: 5rem;
  }

  .company {
    width: 15rem;
  }
`;

const ContactSection = () => {
  const { companies } = useGlobalContext();

  return (
    <StyledSection>
      <TwoCol md>
        <ContactForm />
        <div className='info'>
          <SubHeading>
            Join the thousands of innovators already building with u
          </SubHeading>
          <ThreeCol className='companies'>
            {companies.map((company) => (
              <img
                key={company.id}
                src={company.logo.dark}
                alt={company.company}
                className='company'
              />
            ))}
          </ThreeCol>
        </div>
      </TwoCol>
    </StyledSection>
  );
};

export default ContactSection;
