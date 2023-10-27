import { useState, useEffect } from 'react';
import './App.css';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      if (data) {
        setCountries(data);
      } else {
        console.log('Failed to retrieve countries from the API.');
      }
     } catch(error) {
      console.error('An error occured while fetching countries:', error);
     }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    console.log(countries);
  }, [countries]);

  return (
    <div className='container'>
      <CountryList countries={countries} />
    </div>
  )
}

export default App
