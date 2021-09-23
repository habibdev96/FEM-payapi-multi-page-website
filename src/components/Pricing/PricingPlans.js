import PricingPlan from './PricingPlan';
import { useGlobalContext } from '../../context';
import { ThreeCol } from '../styledElements/Containers';

const PricingPlans = () => {
  const { pricings } = useGlobalContext();

  return (
    <section>
      <ThreeCol sm data-aos='fade-in' data-aos-delay='100'>
        {pricings.map((price) => (
          <PricingPlan key={price.id} {...price} />
        ))}
      </ThreeCol>
    </section>
  );
};

export default PricingPlans;
