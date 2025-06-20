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