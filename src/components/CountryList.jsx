import React, { useState } from 'react';
import '../styles/CountryList.css';
import CountryCard from './CountryCard';
import downArrow from '../images/chevron-down-outline.svg';

function CountryList({ countries }) {
  const sortedCountries = countries.slice().sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  const [selectedRegion, setSelectedRegion] = useState(null);
  const [searchInput, setSearchInput] = useState('');

  const filterCountriesByRegion = (region) => {
    setSelectedRegion(region);
  };

  const clearFilter = () => {
    setSelectedRegion(null);
  }

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredCountries = selectedRegion
    ? sortedCountries.filter((country) => country.region === selectedRegion)
    : sortedCountries;

  const searchedCountries = filteredCountries.filter((country) => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searchInput.toLowerCase());
  });

  return (
    <div className="country-list-container">
      <div className='filter-selection'>
        <div className='filter-selection-left'>
          <input 
          className='country-search' 
          placeholder='Search for a country...'
          value={searchInput}
          onChange={handleSearchInputChange}
          />
        </div>
        <div className='filter-selection-right'>
          <div className='filter-dropdown'>
            <div className='drop-div'>
              <div className='drop-left'>Filter by Region</div>
              <img src={downArrow} alt='down arrow' className='down-arrow'/>
            </div>
            <div className='dropdown-content'>
              <div className='filter-option' onClick={(() => filterCountriesByRegion('Africa'))}>Africa</div>
              <div className='filter-option' onClick={(() => filterCountriesByRegion('Americas'))}>Americas</div>
              <div className='filter-option' onClick={(() => filterCountriesByRegion('Asia'))}>Asia</div>
              <div className='filter-option' onClick={(() => filterCountriesByRegion('Europe'))}>Europe</div>
              <div className='filter-option' onClick={(() => filterCountriesByRegion('Oceania'))}>Oceania</div>
              <div className='filter-option' onClick={clearFilter}>Clear Filter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="country-list">
        {searchedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryList;