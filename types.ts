export type ForestData={
    id:number,
    number:number,
    name:string,
    tree_type:string

}

export type LandData={
    id:number,
    number:number,
    name:string,
    Land_type:string
}
export type DataGroup={
    id:number,
    name:string,
    forestData?: ForestData[],
    LandData?: LandData[],


}