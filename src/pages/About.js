import SubHero from '../components/Shared/SubHero';
import {
  AboutCompanyOne,
  AboutCompanyTwo,
} from '../components/About/AboutCompanySections';
import AboutShowcase from '../components/About/AboutShowcase';
import AboutStats from '../components/About/AboutStats';

const About = () => {
  return (
    <>
      <SubHero title='We empower innovators by delivering access to the financial system' />
      <main>
        <AboutCompanyOne />
        <AboutShowcase />
        <AboutStats />
        <AboutCompanyTwo />
      </main>
    </>
  );
};

export default About;
