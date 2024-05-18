"use client";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";

export default function Application() {
  const [places, setPlaces] = useState([]);

  function addPlaces(place) {
    setPlaces(place);
  }

  return (
    <>
      <SearchForm addPlaces={addPlaces} />
      <CardList places={places} />
    </>
  );
}
