export default function (size, imageId) {
  return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${size}&photo_reference=${imageId}&key=${process.env.NEXT_PUBLIC_PLACES_KEY}`;
}
