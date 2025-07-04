import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'src/data/mock-geojson-data.geojson');

  try {
    // อ่านไฟล์ GeoJSON
    const geojsonRaw = fs.readFileSync(filePath, 'utf-8');
    const geojson = JSON.parse(geojsonRaw);

    // loop ทุก feature
    geojson.features.forEach((feature: any) => {
      const props = feature.properties;

      const forestType = props.forestType;
      const rainfallStr = props.annualRainfall;
      const rainfall = parseFloat(rainfallStr.split(' ')[0]); // mm/year

      let totalCarbon = 0;  // รวมปริมาณคาร์บอนของแปลงนี้

      props.trees.forEach((tree: any) => {
        const gbh = tree.gbh;
        const h = tree.h;

        // คำนวณ dbh
        const dbh = gbh / Math.PI;
        tree.dbh = parseFloat(dbh.toFixed(2));

        // เลือกสูตรตาม forestType
        let ws = 0, wb = 0, wl = 0, calcH = h;

        const dbhSquaredH = Math.pow(dbh, 2) * h;

        if (forestType === 'ป่าเต็งรัง' || forestType === 'ป่าเบญพรรณ') {
          ws = 0.0396 * Math.pow(dbhSquaredH, 0.933);
          wb = 0.00349 * Math.pow(dbhSquaredH, 1.03);
          wl = ws / (22.5 + 0.025 * ws);

          // คำนวณ h ใหม่
          calcH = (121.8 * Math.pow(dbh, 0.638)) / (38.8 + 3.14 * Math.pow(dbh, 0.638));
        } else if (forestType === 'ป่าดิบแล้ง') {
          ws = 0.0509 * Math.pow(dbhSquaredH, 0.919);
          wb = 0.00893 * Math.pow(dbhSquaredH, 0.977);
          wl = 0.014 * Math.pow(dbhSquaredH, 0.669);

          // คำนวณ h ใหม่
          calcH = (85.6 * Math.pow(dbh, 0.916)) / (46.8 + 1.83 * Math.pow(dbh, 0.916));
        }

        tree.ws = parseFloat(ws.toFixed(2));
        tree.wb = parseFloat(wb.toFixed(2));
        tree.wl = parseFloat(wl.toFixed(2));
        tree.h = parseFloat(calcH.toFixed(2));

        const y = ws + wb + wl;
        tree.y = parseFloat(y.toFixed(2));

        // คำนวณ carbon (C), co2 absorption, oxygen production
        const c = 0.5 * y;
        tree.c = parseFloat(c.toFixed(2));
        tree.co2Absorption = parseFloat((c * 3.66).toFixed(2));
        tree.oxygenProduction = parseFloat((c * 2.66).toFixed(2));

        // น้ำฝน : ใช้สมการปริมาณฝน ถ้า dbh > 5
        if (dbh > 5) {
          let y_rainfall = 0;
          if (rainfall < 1500) {
            y_rainfall = 34.4703 - 8.071 * dbh + 0.6589 * Math.pow(dbh, 2);
          } else if (rainfall >= 1500 && rainfall <= 4000) {
            y_rainfall = 38.4908 - 11.7883 * dbh + 1.1926 * Math.pow(dbh, 2);
          } else if (rainfall > 4000) {
            y_rainfall = 13.2579 - 4.8945 * dbh + 0.6713 * Math.pow(dbh, 2);
          }
          tree.y_rainfall = parseFloat(y_rainfall.toFixed(2));
        } else {
          tree.y_rainfall = 0;
        }

        // รวมคาร์บอนของต้นนี้ (คาร์บอนต่อต้น * จำนวนต้น)
        totalCarbon += c * tree.treeCount;
      });

      // อัพเดต carbon-credit ของแปลงด้วยค่ารวมคาร์บอน
      props['carbon-credit'] = parseFloat(totalCarbon.toFixed(2));
    });

    // เขียนกลับไฟล์
    fs.writeFileSync(filePath, JSON.stringify(geojson, null, 2), 'utf-8');

    res.status(200).json({ message: 'คำนวณสำเร็จ', data: geojson });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'เกิดข้อผิดพลาด', error });
  }
}
