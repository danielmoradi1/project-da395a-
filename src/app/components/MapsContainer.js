import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PinMarker from "./ui/PinMarker";

export default function MapsContainer() {
  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}>
        <Map
          mapId="3573efe3f3b75066"
          style={{ width: "25vw", height: "50vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <PinMarker locations={{ lat: -33.8567844, lng: 151.213108 }} />
        </Map>
      </APIProvider>
    </>
  );
}
