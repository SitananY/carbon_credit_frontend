export type ForestData = {
  id: number;
  number: number;
  name: string;
  tree_type: string;
  location: string;
  height: string;
  age: string; 
};

export  type LandData = {
  id: number;
  number: number;
  name: string;
  land_type: string;
  owner: string;
  area_size: string;
  soil_type: string; 
};

export type DataGroup={
    id:number,
    name:string,
    forestData?: ForestData[],
    LandData?: LandData[],


}


export type Tree1 = {
  scientificName: string;
  commonName: string;
  family: string;
  otherNames: string[];
  type: string;
  trunkCharacteristic: string;
  averageHeightM: number;
  diameterCm: number;
  approxAgeY: number;
  quantity: number;
  latitude: number;
  longitude: number;
};

export type SurveyImages = {
  landImage: string;
  treeImages: string[];
};

// export type GroupType = "ป่าดงดิบ" | "ป่าผสมผลัดใบ" | "ป่าเต็งรัง" | "ป่าชายเลน" | "ป่าสนเขา";

export type LandPlot = {
  id:string;
  landNumber: string;
  budgetYear: number;
  deedNumber: string;
  surveyPage: string;
  sheet: string;
  area: string;
  latitude: number;
  longitude: number;
  province: string;
  district: string;
  subdistrict: string;
  forestType: string;
  trees: Tree1[];
  surveyImages: SurveyImages;
};

export type LandPlotGroup = {
  groupId:string;
  groupType:string;
  plots: LandPlot[];
  itemCount: number;        
  latestUpdate: string;  
};



export type Tree = {
  scientificName: string;
  family: string;
  commonName: string;
  otherName: string;
  treeCount: number;
  gbh: number;
  dbh: number;
  h: number;
  ws: number;
  wb: number;
  wl: number;
  y: number;
  c?: number;
  co2Absorption?: number;
  oxygenProduction?: number;
  y_rainfall?: number;
};

export type FeatureProperties = {
  stroke?: string;
  'stroke-width'?: number;
  'stroke-opacity'?: number;
  fill?: string;
  'fill-opacity'?: number;
  landTitleNumber: string;
  surveyPage: string;
  landNumber: string;
  mapSheet: string;
  subdistrict: string;
  district: string;
  province: string;
  area: string;
  forestType: string;
  forestTypeSlug: string;
  annualRainfall: string;
  'carbon-credit': number;
  trees: Tree[];
};

export type GeoJSONFeature = {
  type: 'Feature';
  properties: FeatureProperties;
  geometry: {
    type: 'Polygon' | 'MultiPolygon' | string; 
    coordinates: any;
  };
  id: string;
};

export type GeoJSONData = {
  type: 'FeatureCollection';
  features: GeoJSONFeature[];
};

export type GroupedLand = {
      forestType: string;
      forestTypeSlug: string; 
      lands: GeoJSONFeature[];
      id:string;
      latestUpdate:string;
    };