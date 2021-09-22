import SubHero from '../components/Shared/SubHero';
import {
  AboutCompanyOne,
  AboutCompanyTwo,
} from '../components/About/AboutCompanySections';

const About = () => {
  return (
    <>
      <SubHero title='We empower innovators by delivering access to the financial system' />
      <main>
        <AboutCompanyOne />
        <AboutCompanyTwo />
      </main>
    </>
  );
};

export default About;
