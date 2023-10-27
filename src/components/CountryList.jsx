import React from 'react';
import CountryCard from './CountryCard';

function CountryList({ countries }) {
  // Sort the countries by common name (alphabetically)
  const sortedCountries = countries.slice().sort((a, b) => {
    // Use the `localeCompare` method for string comparison
    return a.name.common.localeCompare(b.name.common);
  });

  return (
    <div className="country-list-container">
      <div className="country-list">
        {sortedCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default CountryList;