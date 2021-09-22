import Globals from './abstracts/Globals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Shared/Navbar';
import { MainBgPattern } from './components/styledElements/Pattern';
import CtaSection from './components/Shared/CtaSection';
import Footer from './components/Shared/Footer';

// TODO: create form | scroll to top | refactor container components | make responsive

const App = () => {
  return (
    <>
      <Globals />
      <Router>
        <MainBgPattern />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Pricing' component={Pricing} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
        </Switch>
        <CtaSection />
        <Footer />
      </Router>
    </>
  );
};

export default App;
