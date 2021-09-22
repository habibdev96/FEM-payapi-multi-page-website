import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import PricingPlan from './PricingPlan';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const PricingPlans = () => {
  const { pricings } = useGlobalContext();

  return (
    <section>
      <Container>
        {pricings.map((price) => (
          <PricingPlan key={price.id} {...price} />
        ))}
      </Container>
    </section>
  );
};

export default PricingPlans;
