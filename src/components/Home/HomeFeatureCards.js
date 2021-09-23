import HomeFeatureCard from './HomeFeatureCard';
import { useGlobalContext } from '../../context';
import { ThreeCol } from '../styledElements/Containers';

const HomeFeatureCards = () => {
  const { features } = useGlobalContext();

  return (
    <section>
      <ThreeCol center md data-aos='fade-in' data-aos-delay='200'>
        {features.map((feature) => (
          <HomeFeatureCard key={feature.id} {...feature} />
        ))}
      </ThreeCol>
    </section>
  );
};

export default HomeFeatureCards;
