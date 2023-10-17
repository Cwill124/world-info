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
        <div>
          <h1>{countryInfo.name.common}</h1>
          <p>Capital: {countryInfo.capital}</p>
          <p>Region: {countryInfo.region}</p>
          
        </div>
      )}
    </div>
  );
}