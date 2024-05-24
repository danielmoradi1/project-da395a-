import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps";

export default function PinMarker({ location }) {
  return (
    <>
      <AdvancedMarker position={location}>
        <Pin background={"#BF4348"} glyphColor={"#000"} borderColor={"#000"} />
      </AdvancedMarker>
    </>
  );
}
