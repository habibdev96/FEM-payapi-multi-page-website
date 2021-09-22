import PricingPlan from './PricingPlan';
import { useGlobalContext } from '../../context';
import { ThreeCol } from '../styledElements/Containers';

const PricingPlans = () => {
  const { pricings } = useGlobalContext();

  return (
    <section>
      <ThreeCol sm>
        {pricings.map((price) => (
          <PricingPlan key={price.id} {...price} />
        ))}
      </ThreeCol>
    </section>
  );
};

export default PricingPlans;
