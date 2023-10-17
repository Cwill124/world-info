import { useEffect,useState } from "react";
import "./styles/countryInfo.css";

export default function CountryInfo(props) {

  const [countryInfo, setCountryInfo] = useState(undefined);
  console.log(countryInfo);
  useEffect(() => {
    if(props.selectedCountry === undefined) {
      return;
    }

    fetchCountryInfo();
  }, [props.selectedCountry]);

  async function fetchCountryInfo() {
    var data = await fetch(`https://restcountries.com/v3.1/name/${props.selectedCountry}`);
    var dataJson = await data.json();
    return setCountryInfo(dataJson[0]);
  }
  return (
    <div className="country-info" >
      {countryInfo === undefined ? (
        <p>Select a country</p>
      ) : (
        <>
        <h1>{countryInfo.name.common}</h1>
        <div className="flag">
            <img src={countryInfo.flags.png} alt="flag"/>
          </div>
          <div>
          
          </div>
          <div className="country-info-details">
            <p>Offical Name: {countryInfo.name.official}</p>
            <p>Region: {countryInfo.region}</p>
            <p>Subregion: {countryInfo.subregion}</p>
            <p>Capital: {countryInfo.capital}</p>
            <p>Population: {countryInfo.population}</p>
            <p>Area: {countryInfo.area} km²</p>
            <p>Timezones: {countryInfo.timezones}</p>
            <p>UN member: {countryInfo.unMember}</p>
          </div>  
          
          
        </>
      )}
    </div>
  );
}