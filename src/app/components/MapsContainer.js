import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PinMarker from "./ui/PinMarker";
import "../styles/map.css";

export default function MapsContainer() {
  return (
    <div className="map-view">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}>
        <Map
          mapId="3573efe3f3b75066"
          style={{ width: "100%", height: "40vh" }}
          defaultCenter={{ lat: 60.1282, lng: 18.6435 }}
          defaultZoom={4.5}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          <PinMarker locations={{ lat: -33.8567844, lng: 151.213108 }} />
        </Map>
      </APIProvider>
    </div>
  );
}