import React from "react";
import CountriesSearchableAside from "../components/countriesSearchableAside";
import "./styles/homePage.css";
export default function HomePage() {


  return (
    <div>
      <h1>Home Page</h1>
      <div className="row">
        <CountriesSearchableAside/> 
      </div>
    </div>
  );
}