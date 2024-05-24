import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PinMarker from "./ui/PinMarker";
import "../styles/map.css";

export default function MapsContainer({ locations = [] }) {
  return (
    <div className="map-view">
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}>
        <Map
          mapId="3573efe3f3b75066"
          style={{ width: "100%", height: "40vh" }}
          defaultZoom={3}
          defaultCenter={{ lat: 51, lng: 10 }}
          gestureHandling="greedy"
          disableDefaultUI={true}
        >
          {locations.map((location, index) => (
            <PinMarker
              key={index}
              location={location.geometry.location}
              locationData={{ location }}
            />
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
