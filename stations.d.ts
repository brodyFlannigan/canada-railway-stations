declare module "canada-railway-stations" {
  export interface StationData {
    stationName: string
    lat: number
    long: number
    crsCode: string
    iataAirportCode?: string
  }

  const AllStationsJSON: StationData[]

  export default AllStationsJSON
}

declare module "canada-railway-stations/stations.csv" {
  const AllStationsCSV: string

  export default AllStationsCSV
}
