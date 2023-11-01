import React from 'react';
import '../styles/CountryCard.css';

function CountryCard({ country, darkMode }) {

    const formattedPopulation = country.population.toLocaleString();
    return (
        <div className="country-card">
            <div className='card-top'><img src={country.flags.svg} alt='country flag' className='flag-image'/></div>
            <div className={`card-bottom ${darkMode ? 'dark-mode-card' : ''}`}>
                <div className='country-name'>{country.name.common}</div>
                <div className='card-info-container'>
                    <div className='country-population label'><span className='card-label'>Population:</span> {formattedPopulation}</div>
                    <div className='country-region label'><span className='card-label'>Region:</span> {country.region}</div>
                    <div className='country-capital label'><span className='card-label'>Capital:</span> {country.capital}</div>
                </div>
            </div>
        </div>
  );
}

export default CountryCard;
