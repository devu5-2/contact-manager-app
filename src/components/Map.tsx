import React from 'react'
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
    countries: any[]; // country data format here
  }
  
  // Merge default Leaflet icon options with custom icon URLs
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  // Define the Map component
  const Map: React.FC<MapProps> = ({ countries }) => {
  
    const zoom = 4;
    // focusing position with lat- long of India
    const position: [number, number] = [20.5937, 78.9629];
  return (<MapContainer
    className="h-screen"
    center={position}
    zoom={zoom}
    scrollWheelZoom={true}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {countries.map((country) => (
      <Marker
        key={country.country}
        position={[country.countryInfo.lat, country.countryInfo.long]}
      >
        <Popup>
          <div>
            <h3 className="font-bold">{country.country}</h3>
            <p>Active: {country.active}</p>
            <p>Recovered: {country.recovered}</p>
            <p>Deaths: {country.deaths}</p>
          </div>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
  );
};
export default Map;