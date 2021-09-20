import HomeHero from '../components/Home/HomeHero';
import Partners from '../components/Home/Partners';
import HomeFeatureSectionOne from '../components/Home/HomeFeatureSectionOne';
import HomeFeatureSectionTwo from '../components/Home/HomeFeatureSectionTwo';
import HomeFeatureCards from '../components/Home/HomeFeatureCards';

const Home = () => {
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
