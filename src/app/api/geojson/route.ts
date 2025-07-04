import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src/data/mock-geojson-data.geojson');
    const geojsonRaw = fs.readFileSync(filePath, 'utf-8');
    const geojson = JSON.parse(geojsonRaw);

    return NextResponse.json(geojson);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read GeoJSON file' }, { status: 500 });
  }
}
