import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
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
  const [ctaInputMessage, setCtaInputMessage] = useState('');

  // validation for cta
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setCtaInputMessage('Looks good!');
    } else {
      setCtaInputMessage('Please enter valid email');
    }
  };

  // validation for contact form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <AppContext.Provider
      value={{
        companies,
        features,
        pricings,
        aboutTop,
        aboutBottom,
        stats,
        scrollToTop,
        handleSubmit,
        register,
        errors,
        onSubmit,
        ctaInputMessage,
        validateEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
