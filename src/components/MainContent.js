import React from "react";
import PickDrop from "./PickDrop";
import { GoogleMap, Marker, useLoadScript, useJsApiLoader } from "@react-google-maps/api";

export default function MainContent() {
  function initMap() {
    const tutorialsPoint_office = {
      lat: 17.43827944602866,
      lng: 78.39530424154626,
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17.56,
      center: tutorialsPoint_office,
    });
  }

  return (
    <div className="MainContainer col">
      <div className="findTrip col-3">
        <h5 className="PickDropItem">Find a Trip</h5>
        <PickDrop />
      </div>
      <div className="col-10" id="map"></div>
    </div>
  );
}
