import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      if (data) {
        setCountries(data);
      } else {
        console.log('Failed to retrieve countries from the API.');
      }
    } catch (error) {
      console.error('An error occurred while fetching countries:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <BrowserRouter>
      <div className="container">
        <Header toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/" element={<CountryList countries={countries} darkMode={darkMode} />} />
          <Route path="/country/:cca3" element={<CountryDetail darkMode={darkMode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;