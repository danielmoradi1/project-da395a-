"use server";

export default async function getPlaces() {
  //Query parameters will be broken down into filters passed in as function parameters
  //getPlaces(type, distance) etc.
  const apiKey = process.env.NEXT_PUBLIC_PLACES_KEY;
  const query = "?query=restaurants%20in%20Malmö&key=";
  const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
  const queryURL = `${baseURL}${query}${apiKey}`;

  const response = await fetch(queryURL);
  return response.json();
}
