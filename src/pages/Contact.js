import SubHero from '../components/Shared/SubHero';
import ContactSection from '../components/Contact/ContactSection';
import { useGlobalContext } from '../context';

const Contact = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <SubHero title='Submit a help request and we’ll get in touch shortly.' />
      <main>
        <ContactSection />
      </main>
    </>
  );
};

export default Contact;
