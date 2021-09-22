import styled from 'styled-components';
import ContactForm from './ContactForm';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { SubHeading } from '../styledElements/Headings';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap);

  .companies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
    padding-top: 5rem;
  }

  .company {
    width: 15rem;

    &:nth-child(5) {
      width: 13rem;
    }
  }
`;

const ContactSection = () => {
  const { companies } = useGlobalContext();

  return (
    <section>
      <Container>
        <ContactForm />
        <div className='info'>
          <SubHeading>
            Join the thousands of innovators already building with u
          </SubHeading>
          <div className='companies'>
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
      </Container>
    </section>
  );
};

export default ContactSection;
