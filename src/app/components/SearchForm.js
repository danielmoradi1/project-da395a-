import { useState } from "react";
import getPlaces from "../api/getPlaces";
import RadioInput from "./ui/RadioInput";
import TextInput from "./ui/TextInput";
import ButtonInput from "./ui/ButtonInput";

export default function SearchForm({ addPlaces }) {
  const [type, setType] = useState();
  const [city, setCity] = useState();
  const [Error, setError] = useState();
  const [searchResults, setSearchResults] = useState([]);

  async function searchPlace() {
    console.log(`You have searched for ${type}'s in ${city}`);
    if (city && type) {
      const response = await getPlaces(city, type);
      addPlaces(response.results);
    }
  }

  return (
    <div className="field">
      <TextInput
        className="input"
        placeholder="Search City or Address.."
        setter={setCity}
      />
      <div className="control">
        <RadioInput
          label="Restaurant"
          value="Restaurant"
          checked={type}
          setType={setType}
        />
        <RadioInput
          label="Café"
          value="Café"
          checked={type}
          setType={setType}
        />
        <RadioInput label="Bar" value="Bar" checked={type} setType={setType} />
      </div>
      <div className="control">
        <ButtonInput
          className="has-text-success"
          value={"Search"}
          onClick={searchPlace}
        />
      </div>
    </div>
  );
}
