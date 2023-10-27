import React from 'react';

function CountryList({ countries }) {
  // Sort the countries by common name (alphabetically)
  const sortedCountries = countries.slice().sort((a, b) => {
    // Use the `localeCompare` method for string comparison
    return a.name.common.localeCompare(b.name.common);
  });

  return (
    <div className="country-list-container">
      <ul className="country-list">
        {sortedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;