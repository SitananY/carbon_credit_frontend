"use client";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Map as LeafletMapType } from 'leaflet';
import { LinearProgress } from "@mui/material";
import { useMap } from "react-leaflet";
import IconButton from "@/components/IconButton";
import Icons from "@/components/svgs/SvgExports"

const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

function OverLay() {
  const parentMap = useMap();
  return (
    <div
      className="w-[40px]  absolute h-full top-0  z-[999] flex pt-[32px] flex-col items-center gap-[20px] right-[28px] "
      onMouseDown={() => parentMap.dragging.disable()}
      onMouseLeave={() => parentMap.dragging.enable()}
    >
      <IconButton rounded="rounded-2xl bg-[#FAFCFE]" ><Icons.Add className="w-[24px] h-[24px]"/></IconButton>
      <IconButton rounded="rounded-2xl bg-[#FAFCFE]" ><Icons.Location_on className="w-[24px] h-[24px]"/></IconButton>
      <IconButton rounded="rounded-2xl bg-[#FAFCFE]" ><Icons.Map className="w-[24px] h-[24px]"/></IconButton>
    </div>
  );
}

function ResizeHandler() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => {
      map.invalidateSize();
    }, 100); // รอให้ DOM resize เสร็จ
  }, [map]);

  return null;
}

export default function LeafletMap({ onReady }: { onReady: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMapContainerReadyToRender, setIsMapContainerReadyToRender] = useState(false);
  const [isLeafletMapInstanceReady, setIsLeafletMapInstanceReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const timer = setTimeout(() => {
      if (containerRef.current) {
        setIsMapContainerReadyToRender(true);
      } else {
        console.error("LeafletMap: containerRef.current is null after timeout. Map may not render.");
      }
    }, 50); 

    return () => clearTimeout(timer);
  }, []);

  
  const handleLeafletMapReady = (map: LeafletMapType) => { 
    setIsLeafletMapInstanceReady(true);
    onReady(); 
  };

  return (
    <div ref={containerRef} className="w-[907px] h-[708px] relative overflow-hidden">
      {!isLeafletMapInstanceReady && (
        <div className="flex justify-center items-center bg-white z-10 rounded-xl">
          <LinearProgress color="success" />
        </div>
      )}

      {isMapContainerReadyToRender && (
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={true}
          attributionControl={false}
          zoomControl={false}
          className="w-[907px] h-[708px]"
          whenReady={handleLeafletMapReady} 
        >
          <TileLayer
            attribution='&copy; <a href="[https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup.<br />Easily customizable.
            </Popup>
          </Marker>
            <OverLay/>
           <ResizeHandler />
        </MapContainer>
      )}
    </div>
  );
}
