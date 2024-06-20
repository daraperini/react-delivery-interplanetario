import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./Map.css";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    // Add your GoogleMaps Key here
    googleMapsApiKey: "",
  });

  const position = {lat: -29.171812, lng: -51.178089}

  return (
    <div className="flex justify-center pt-4 h-96">
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "10px" }}
          center={position}
          zoom={10}
        >
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
