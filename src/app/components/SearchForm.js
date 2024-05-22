import { useState } from "react";
import getPlaces from "../api/getPlaces";
import RadioInput from "./ui/RadioInput";
import TextInput from "./ui/TextInput";
import ButtonInput from "./ui/ButtonInput";

export default function SearchForm({ addPlaces }) {
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
        //Ur ett säkerhetsperspektiv inte värt att rendera detta
        //Kanske ett mer generiskt meddelande såsom "An error occured.." som nedan.
        setError(response.error.message);
      } else {
        addPlaces(response.results);
      }
    } catch (err) {
      setError("An error occurred while fetching places.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <TextInput placeholder="Search City or Address.." setter={setCity} />
      <RadioInput
        label="Restaurant"
        value="Restaurant"
        checked={type}
        setType={setType}
      />
      <RadioInput label="Café" value="Café" checked={type} setType={setType} />
      <RadioInput label="Bar" value="Bar" checked={type} setType={setType} />
      {error && <div style={{ color: "red" }}>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ButtonInput value="Search" onClick={searchPlace} />
      )}
    </>
  );
}
