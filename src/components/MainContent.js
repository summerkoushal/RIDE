import React from "react";
import PickDrop from "./PickDrop";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

export default function MainContent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBwDZTFxoP3Y_nbS_D - UZUZoAAtDSSKv6s",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="MainContainer col">
      {/* <div className="contain"> */}
      <div className="findTrip col-2">
        <h5 className="PickDropItem">Find a Trip</h5>
        <PickDrop />
      </div>
      <div className="map col-7">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "77vh" }}
        ></GoogleMap>
      </div>
    </div>
  )
}
