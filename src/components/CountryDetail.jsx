import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetail() {
  const { cca3 } = useParams();

  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    // Fetch data for the specific country using the cca3 code
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

  // Render the country details
  return (
    <div>
      {countryData ? (
        <div>
          <h1>{countryData[0].name.common}</h1>
          {/* Add more details here */}
        </div>
      ) : (
        <p>Loading country data...</p>
      )}
    </div>
  );
}

export default CountryDetail;