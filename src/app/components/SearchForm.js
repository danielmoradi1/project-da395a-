import { useState } from "react";
import RadioInput from "./ui/RadioInput";
import TextInput from "./ui/TextInput";

export default function SearchForm() {
  const [Error, setError] = useState();
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <TextInput placeholder="Search City or Address.." />
      <RadioInput label="Restaurant" />
      <RadioInput label="Café" />
      <RadioInput label="Bar" />
    </>
  );
}
