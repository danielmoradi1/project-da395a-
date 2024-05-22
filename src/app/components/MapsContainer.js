import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PinMarker from "./ui/PinMarker";

export default function MapsContainer() {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_KEY;
  //Behöver vi rendera detta till användarna?
  if (!apiKey) {
    return <div>Error: Google Maps API key is missing</div>;
  }

  return (
    <>
      <APIProvider apiKey={apiKey}>
        <Map
          mapId="3573efe3f3b75066"
          style={{ width: "25vw", height: "50vh" }}
          defaultCenter={{ lat: -33.8567844, lng: 151.213108 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <PinMarker locations={{ lat: -33.8567844, lng: 151.213108 }} />
        </Map>
      </APIProvider>
    </>
  );
}
