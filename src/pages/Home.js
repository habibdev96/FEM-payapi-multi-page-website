import HomeHero from '../components/Home/HomeHero';
import Partners from '../components/Home/Partners';
import HomeFeatureSectionOne from '../components/Home/HomeFeatureSectionOne';

const Home = () => {
  return (
    <>
      <HomeHero />
      <main>
        <Partners />
        <HomeFeatureSectionOne />
      </main>
    </>
  );
};

export default Home;
