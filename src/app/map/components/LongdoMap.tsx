'use client'
import { useEffect } from 'react';

declare global {
  interface Window {
    longdo: any;
  }
}

let longdo: any;
let map: any;

interface LongdoMapProps {
  id: string;
  mapKey: string;
  callback?: () => void;
}

export function LongdoMap({ id, mapKey, callback }: LongdoMapProps) {
  const mapCallback = () => {
    longdo = window.longdo;
    map = new window.longdo.Map({
      placeholder: document.getElementById(id),
      language: 'en'
    });
  };

  useEffect(() => {
    const existingScript = document.getElementById('longdoMapScript');

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = `https://api.longdo.com/map/?key=${mapKey}`;
      script.id = 'longdoMapScript';
      document.body.appendChild(script);

      script.onload = () => {
        mapCallback();
        callback?.();
      };
    } else {
      mapCallback();
      callback?.();
    }

    // Cleanup function
    return () => {
      // Add any cleanup logic here if needed
    };
  }, [mapKey, callback]);

  return <div id={id} style={{ width: '100%', height: '100%' }} />;
}

export { longdo, map };