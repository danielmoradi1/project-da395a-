import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MapsContainer() {
  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
      ;
    </>
  );
}
