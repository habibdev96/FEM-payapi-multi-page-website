import HomeHero from '../components/Home/HomeHero';
import Partners from '../components/Home/Partners';
import HomeFeatureSectionOne from '../components/Home/HomeFeatureSectionOne';
import HomeFeatureSectionTwo from '../components/Home/HomeFeatureSectionTwo';
import HomeFeatureCards from '../components/Home/HomeFeatureCards';
import { useGlobalContext } from '../context';

const Home = () => {
  const { scrollToTop } = useGlobalContext();
  scrollToTop();

  return (
    <>
      <HomeHero />
      <main>
        <Partners />
        <HomeFeatureSectionOne />
        <HomeFeatureSectionTwo />
        <HomeFeatureCards />
      </main>
    </>
  );
};

export default Home;
