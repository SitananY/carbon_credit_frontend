'use client'
import { useState, useEffect } from 'react';
import { LongdoMap, longdo, map } from './components/LongdoMap';

export default function MapPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  const initMap = () => {
    if (map && longdo) {
      map.Layers.setBase(longdo.Layers.GRAY);
      setMapLoaded(true);
    }
  };

  return (
    <div className='flex flex-col items-center  p-4 sm:p-6 md:p-8 w-[auto] h-full'>
    <div style={{ width: '100vw', height: '100vh' }}>
      <LongdoMap 
        id="longdo-map" 
        mapKey="0800e8205f7fc97314bd67673c0e7a11" 
        callback={initMap} 
      />
      {mapLoaded && (
        <div>Map Loaded Successfully!</div>
      )}
    </div>
    </div>
  );
}