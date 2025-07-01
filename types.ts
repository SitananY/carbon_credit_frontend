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


export type Tree = {
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

export type GroupType = "ป่าดงดิบ" | "ป่าผสมผลัดใบ" | "ป่าเต็งรัง" | "ป่าชายเลน" | "ป่าสนเขา";

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
  forestType: GroupType;
  trees: Tree[];
  surveyImages: SurveyImages;
};

export type LandPlotGroup = {
  groupId:string;
  groupType:GroupType;
  plots: LandPlot[];
  itemCount: number;        
  latestUpdate: string;  
};
