import {
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

export default function PinMarker({ location, locationData }) {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen((prev) => !prev)}
        position={location}
      >
        <Pin background={"#04D1B2"} glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onClose={() => setInfowindowOpen(false)}
        >
          <p>{locationData.location.name}</p>
          <p>{locationData.location.formatted_address}</p>
          <p>{locationData.location.rating}</p>
        </InfoWindow>
      )}
    </>
  );
}
