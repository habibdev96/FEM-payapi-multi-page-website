import SubHero from '../components/Shared/SubHero';
import {
  AboutCompanyOne,
  AboutCompanyTwo,
} from '../components/About/AboutCompanySections';
import AboutShowcase from '../components/About/AboutShowcase';

const About = () => {
  return (
    <>
      <SubHero title='We empower innovators by delivering access to the financial system' />
      <main>
        <AboutCompanyOne />
        <AboutShowcase />
        <AboutCompanyTwo />
      </main>
    </>
  );
};

export default About;
