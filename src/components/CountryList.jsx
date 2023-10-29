import React, { useState } from 'react';
import '../styles/CountryList.css';
import CountryCard from './CountryCard';

function CountryList({ countries }) {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const sortedCountries = countries.slice().sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  const filterCountriesByRegion = (region) => {
    setSelectedRegion(region);
  };

  const clearFilter = () => {
    setSelectedRegion(null);
  };

  const filteredCountries = selectedRegion
    ? sortedCountries.filter((country) => country.region === selectedRegion)
    : sortedCountries;

  return (
    <div className="country-list-container">
      <div className='filter-selection'>
        <div className='filter-label'>Filter by Region:</div>
        <button className='filter-button' onClick={() => filterCountriesByRegion('Africa')}>Africa</button>
        <button className='filter-button' onClick={() => filterCountriesByRegion('Americas')}>Americas</button>
        <button className='filter-button' onClick={() => filterCountriesByRegion('Asia')}>Asia</button>
        <button className='filter-button' onClick={() => filterCountriesByRegion('Europe')}>Europe</button>
        <button className='filter-button' onClick={() => filterCountriesByRegion('Oceania')}>Oceania</button>
        <button className='filter-button' onClick={clearFilter}>Clear Filter</button>
      </div>
      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryList;