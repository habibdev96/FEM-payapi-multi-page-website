import { useState } from 'react';
import styled from 'styled-components';
import { maxWidthLg, sectionSpacingSm } from '../../abstracts/Mixins';
import { featuresCardsData } from '../../data';
import HomeFeatureCard from './HomeFeatureCard';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: var(--gap);
`;

const HomeFeatureCards = () => {
  const [features, setFeatures] = useState(featuresCardsData);

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
