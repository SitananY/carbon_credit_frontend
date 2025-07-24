import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';
import { GeoJSONData, GeoJSONFeature } from '@/types/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const forestType = searchParams.get('forestType');

  if (!forestType) {
    return NextResponse.json({ error: 'Missing forestType parameter' }, { status: 400 });
  }

  try {
    const filePath = path.join(process.cwd(), 'src/data/mock-geojson-data.geojson');
    const geojsonRaw = fs.readFileSync(filePath, 'utf-8');
    const geojson: GeoJSONData = JSON.parse(geojsonRaw);

    
    const filteredFeatures: GeoJSONFeature[] = geojson.features.filter(
      (feature) => feature.properties.forestType === forestType
    );

    return NextResponse.json(filteredFeatures);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to read GeoJSON file' }, { status: 500 });
  }
}
