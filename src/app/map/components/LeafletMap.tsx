"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import dynamic from "next/dynamic";
import useMounted from "@/hooks/useMounted";
import { useEffect, useRef, useState } from "react";
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }  // Disable server-side rendering (Leaflet hates SSR)
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);


const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function LeafletMap() {
   const mounted = useMounted();

  const mapRef = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (mounted && mapRef.current) {
      setReady(true);
    }
  }, [mounted]);

  if (!ready) return <div ref={mapRef} className="w-full h-full" />;

  
  return (
    <div className="w-full  h-full">
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} attributionControl={false} zoomControl={false} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}
