import React, {useState} from "react";
import CountriesSearchableAside from "../components/countriesSearchableAside";
import "./styles/homePage.css";
import CountryInfo from "../components/countryInfo";
export default function HomePage() {
  const [selectedCountry, setSelectedCountry] = useState(undefined);

  function handleSelection(value) {
    setSelectedCountry(value);
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div className="row">
        <CountriesSearchableAside onSelection={handleSelection}/>
        <CountryInfo selectedCountry={selectedCountry}/>
      </div>
    </div>
  );
}