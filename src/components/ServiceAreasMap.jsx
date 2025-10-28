// src/sections/ServiceAreasMap.jsx
import { Box } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import content from "../content/electrician.json";

// Fix default marker icons for bundlers
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import icon from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: shadow,
});

// Resize observer to keep tiles from greying out
function InvalidateOnResize() {
  const map = useMap();
  const containerRef = useRef(map.getContainer());

  useEffect(() => {
    // 1) after first paint
    setTimeout(() => map.invalidateSize(), 0);

    // 2) whenever container size changes
    const ro = new ResizeObserver(() => map.invalidateSize());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [map]);

  return null;
}

export default function ServiceAreasMap({ height = 360 }) {
  // Points from content or a single St. John’s fallback
  const points = content.serviceAreasCoords?.length
    ? content.serviceAreasCoords.map((p) => ({
        name: p.name || p.city,
        lat: p.lat,
        lon: p.lon,
      }))
    : [{ name: "St. John’s", lat: 47.5605, lon: -52.7126 }];

  const center = [points[0].lat, points[0].lon];

  return (
    <Box sx={{ height, width: "100%", borderRadius: 2, overflow: "hidden" }}>
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}>
        <InvalidateOnResize />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        />

        {points.map((p) => (
          <Marker key={`${p.name}-${p.lat}`} position={[p.lat, p.lon]}>
            <Popup>{p.name}</Popup>
          </Marker>
        ))}
        <FitToPoints pts={points} />
      </MapContainer>
    </Box>
  );
}

function FitToPoints({ pts }) {
  const map = useMap();
  useEffect(() => {
    if (!pts?.length) return;
    const b = L.latLngBounds(pts.map((p) => [p.lat, p.lon]));
    map.fitBounds(b, { padding: [24, 24] });
  }, [map, pts]);
  return null;
}
