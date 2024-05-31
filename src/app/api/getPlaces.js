"use server";

// Asynchronous function to fetch places of a given type in a specified city using Google Places API
export default async function getPlaces(city, type) {
  const apiKey = process.env.NEXT_PUBLIC_PLACES_KEY;
  const query = `?query=${type}%20in%20${city}&key=`;
  const baseURL = "https://maps.googleapis.com/maps/api/place/textsearch/json";
  const queryURL = `${baseURL}${query}${apiKey}`;

  // Fetch and return the response as JSON
  const response = await fetch(queryURL);
  return response.json();
}
