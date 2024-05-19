import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function PinMarker({ locations }) {
  return (
    <>
      <AdvancedMarker position={locations}>
        <Pin background={"#FBBC04"} glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
    </>
  );
}
