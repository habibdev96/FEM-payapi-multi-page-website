import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './components/Shared/Navbar';
import MobileMenu from './components/Shared/MobileMenu';
import { MainBgPattern } from './components/styledElements/Pattern';
import CtaSection from './components/Shared/CtaSection';
import Footer from './components/Shared/Footer';

const App = () => {
  AOS.init({ offset: 10, duration: 1000, once: true });

  return (
    <>
      <Globals />
      <Router>
        <MainBgPattern />
        <Navbar />
        <MobileMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Pricing' component={Pricing} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route path='*' component={NotFound} />
        </Switch>
        <CtaSection />
        <Footer />
      </Router>
    </>
  );
};

export default App;
