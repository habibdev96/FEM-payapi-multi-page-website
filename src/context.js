import React, { useState, useContext } from 'react';
import {
  companiesData,
  featuresCardsData,
  pricingData,
  aboutData,
  statsData,
} from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [companies, setCompanies] = useState(companiesData);
  const [features, setFeatures] = useState(featuresCardsData);
  const [pricings, setPricings] = useState(pricingData);
  const [aboutTop, setAboutTop] = useState(aboutData[0]);
  const [aboutBottom, setAboutBottom] = useState(aboutData[1]);
  const [stats, setStats] = useState(statsData);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{ companies, features, pricings, aboutTop, aboutBottom, stats }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
