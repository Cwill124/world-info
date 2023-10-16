import React, { useEffect, useState } from "react";

import "./styles/countriesSearchableAside.css";

export default function CountriesSearchableAside() {
  const [countries, setCountries] = useState([]);
  const [orginalCountries, setOrginalCountries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchValue]);
  async function fetchCountries() {
    var data = await fetch("https://restcountries.com/v3.1/all");
    var jsonData = await data.json();
    var sortedCountries = jsonData
        .map((country) => country.name.common)
        .sort((a, b) => a.localeCompare(b));

    setCountries(sortedCountries);
    setOrginalCountries(sortedCountries);
  }

  function handleSearch() {
    var filteredCountries = orginalCountries.filter((country) =>
      country.toLowerCase().includes(searchValue.toLowerCase())
    );

    
    setCountries(filteredCountries);
  }
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={(event) => setSearchValue(event.target.value)}/>
      <p className="country-list">
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </p>
    </div>
  );
}