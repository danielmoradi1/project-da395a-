import React, { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import getPlaces from "../api/getPlaces";
import RadioInput from "./ui/RadioInput";
import ButtonInput from "./ui/ButtonInput";
import Selector from "./Selector";
import { Country, City } from "country-state-city";
import "../styles/SearchForm.css";

export default function SearchForm({ addPlaces, onFeelLucky }) {
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (country) {
      setCities(City.getCitiesOfCountry(country.isoCode));
      setCity(null);
    } else {
      setCities([]);
    }
  }, [country]);

  async function searchPlace() {
    console.log(`You have searched for ${type}s in ${city?.name}`);
    if (!city || !type) {
      setError("Please select both a city and a type.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await getPlaces(city.name, type);
      if (response.error) {
        setError("An error occurred while fetching places.");
      } else {
        addPlaces(response.results);
      }
    } catch (err) {
      setError("An error occurred while fetching places.");
    } finally {
      setIsLoading(false);
    }
  }

  async function feelLucky() {
    if (!city || !type) {
      setError("Please select both a city and a type.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await getPlaces(city.name, type);
      if (response.error) {
        setError("An error occurred while fetching places.");
      } else {
        const randomIndex = Math.floor(Math.random() * response.results.length);
        const randomPlace = response.results[randomIndex];
        addPlaces([randomPlace]);
        onFeelLucky();
      }
    } catch (err) {
      setError("An error occurred while fetching places.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="field">
      <Selector
        data={countries}
        selected={country}
        setSelected={setCountry}
      />
      {cities.length > 0 && (
        <Selector
          data={cities}
          selected={city}
          setSelected={setCity}
        />
      )}
      <div className="radioInput">
        <RadioInput
          label="Restaurant"
          value="restaurant"
          checked={type}
          setType={setType}
        />
        <RadioInput
          label="Café"
          value="cafe"
          checked={type}
          setType={setType}
        />
        <RadioInput label="Bar" value="bar" checked={type} setType={setType} />
      </div>
      {error && <div style={{ color: "#ff718d" }}>{error}</div>}
      {isLoading ? (
        <div className="is-flex is-justify-content-center is-align-items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#04D1B2"
            ariaLabel="ball-triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <div className="search-btn-container">
          <ButtonInput
            className="btn"
            value={"Search"}
            onClick={searchPlace}
          />
          <ButtonInput
            className="btn"
            value={"Roll The Dice"}
            onClick={feelLucky}
          />
        </div>
      )}
    </div>
  );
}
