import { useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import getPlaces from "../api/getPlaces";
import RadioInput from "./ui/RadioInput";
import TextInput from "./ui/TextInput";
import ButtonInput from "./ui/ButtonInput";
import "../styles/searchform.css";

export default function SearchForm({ addPlaces, onFeelLucky }) {
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function searchPlace() {
    console.log(`You have searched for ${type}s in ${city}`);
    if (!city || !type) {
      setError("Please select both a city and a type.");
      return;
    }
    setError("");
    setIsLoading(true);
    try {
      const response = await getPlaces(city, type);
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
      const response = await getPlaces(city, type);
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
      <TextInput
        className="input"
        placeholder="Search City or Address.."
        setter={setCity}
      />
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
