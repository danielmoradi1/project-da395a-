"use client";
import { useState } from "react";
import SearchForm from "./components/SearchForm";

export default function Application() {
  const [places, setPlaces] = useState([]);

  function addPlaces(place) {
    setPlaces([...places, place]);
  }

  return (
    <>
      <SearchForm />
    </>
  );
}
