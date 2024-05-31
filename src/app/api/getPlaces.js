"use server";

export default async function getPlaces(city, type) {
  const apiKey = process.env.NEXT_PUBLIC_PLACES_KEY;
  const query = `?query=${type}%20in%20${city}&key=`;
  const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
  const queryURL = `${baseURL}${query}${apiKey}`;

  const response = await fetch(queryURL);
  return response.json();
}
