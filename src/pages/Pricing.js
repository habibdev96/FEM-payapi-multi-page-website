import SubHero from '../components/Shared/SubHero';
import PricingPlans from '../components/Pricing/PricingPlans';
import { useGlobalContext } from '../context';

const Pricing = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <SubHero title='Pricing' />
      <main>
        <PricingPlans />
      </main>
    </>
  );
};

export default Pricing;
