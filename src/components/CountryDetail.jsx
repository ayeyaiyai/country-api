import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/CountryDetail.css';
import leftArrow from '../images/arrow-back-outline.svg';

function CountryDetail( {darkMode} ) {
  const { cca3 } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
        const data = await response.json();
        if (data) {
          setCountryData(data);
        } else {
          console.log(`Failed to retrieve data for country with cca3 code: ${cca3}`);
        }
      } catch (error) {
        console.error('An error occurred while fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [cca3]);

  return (
    <div>
        {countryData ? (
            <div className={`country-detail-container ${darkMode ? 'dark-mode-input' : ''}`}>
                <div className='country-detail-body'>
                    <Link to="/" className={`back-link ${darkMode ? 'dark-mode-link' : ''}`}>
                        <div className='left-arrow'>
                            <img src={leftArrow} alt="left arrow" className={`left-arrow-image ${darkMode ? 'white-icon' : ''}`} />
                        </div> Back
                    </Link>
                    <div className='country-information-body'>
                        <div className='country-information-left'>
                            <img src={countryData[0].flags.svg} alt='country flag' className='country-detail-flag'></img>
                        </div>
                        <div className='country-information-right'>
                            <div className='country-detail-name'>{countryData[0].name.common}</div>
                            <div className='country-details'>
                                <div className='country-details-left'>
                                    <div className='country-details-section'><span className='country-details-title'>Native Name: </span><span className='country-details-info'>{countryData[0].altSpellings[1]}</span></div>
                                    <div className='country-details-section'><span className='country-details-title'>Population: </span><span className='country-details-info'>{countryData[0].population ? countryData[0].population.toLocaleString() : 'N/A'}</span></div>
                                    <div className='country-details-section'><span className='country-details-title'>Region: </span><span className='country-details-info'>{countryData[0].region}</span></div>
                                    <div className='country-details-section'><span className='country-details-title'>Sub Region: </span><span className='country-details-info'>{countryData[0].subregion}</span></div>
                                    <div className='country-details-section'><span className='country-details-title'>Capital: </span><span className='country-details-info'>{countryData[0].capital}</span></div>
                                </div>
                                <div className='country-details-right'>
                                    <div className='country-details-section'><span className='country-details-title'>Top Level Domain: </span><span className='country-details-info'>{countryData[0].tld}</span></div>
                                    <div className='country-details-section'>
                                        <span className='country-details-title'>Currencies: </span>
                                        <span className='country-details-info'>
                                            {Object.entries(countryData[0].currencies).map(([code, currencyInfo]) => (
                                            <span key={code}>
                                                {currencyInfo.name}
                                                {' '}
                                            </span>
                                            ))}
                                        </span>
                                    </div>
                                    <div className='country-details-section'>
                                        <span className='country-details-title'>Languages: </span>
                                        <span className='country-details-info'>
                                            {Object.values(countryData[0].languages).join(', ')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='border-countries'>
                                <div className='country-details-title'>Border Countries: </div>
                                <div className='bordering-countries'>
                                    {countryData && countryData[0].borders ? (
                                    countryData[0].borders.map((borderCountryCode) => (
                                        <Link
                                            key={borderCountryCode}
                                            to={`/country/${borderCountryCode}`} // Create the link based on borderCountryCode
                                            className={`bordering-country ${darkMode ? 'dark-mode-link' : ''}`}
                                         >
                                            {borderCountryCode}
                                        </Link>
                                    ))
                                    ) : (
                                    <div className='no-bordering-country'>None found</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className={`loading-container ${darkMode ? 'dark-mode-input' : ''}`}>
                <div className='loading-message'>Fetching Country Info...</div>
            </div>
        )}
    </div>
  );
}

export default CountryDetail;