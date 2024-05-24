import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PinMarker from "./ui/PinMarker";
import "../styles/map.css"


export default function MapsContainer() {
  const apiKey = process.env.NEXT_PUBLIC_MAPS_KEY;
  //Behöver vi rendera detta till användarna?
  if (!apiKey) {
    return <div>Error: Google Maps API key is missing</div>;
  }

  return (
    <div className="map-view">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}>
        <Map
          mapId="3573efe3f3b75066"
          style={{ width: "100%", height: "40vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <PinMarker locations={{ lat: -33.8567844, lng: 151.213108 }} />
        </Map>
      </APIProvider>
    </div>
  );
}
