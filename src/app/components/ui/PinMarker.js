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

          <p>
            {locationData.location.rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15x"
              viewBox="0 -960 960 960"
              width="15px"
              fill="#FDD762"
              style={{
                verticalAlign: "middle",
                marginTop: "-2px",
              }}
            >
              <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
            </svg>
          </p>
        </InfoWindow>
      )}
    </>
  );
}
