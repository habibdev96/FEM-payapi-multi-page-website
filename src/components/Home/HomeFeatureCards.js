import styled from 'styled-components';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import HomeFeatureCard from './HomeFeatureCard';
import { useGlobalContext } from '../../context';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const HomeFeatureCards = () => {
  const { features } = useGlobalContext();

  return (
    <section>
      <Container>
        {features.map((feature) => (
          <HomeFeatureCard key={feature.id} {...feature} />
        ))}
      </Container>
    </section>
  );
};

export default HomeFeatureCards;
