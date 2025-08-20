export interface IPlanets {
  message: string
  total_records: number
  total_pages: number
  previous: null
  next: string
  results: IPlanetsResult[]
}

export interface IPlanetsResult {
  uid: string
  name: string
  url: string
}
