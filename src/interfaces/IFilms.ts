export interface IFilms {
  message: string
  result: IFilmsResult[]
}

export interface IFilmsResult {
  properties: Properties
  _id: string
  description: string
  uid: string
  __v: number
}

export interface Properties {
  producer: string
  title: string
  episode_id: number
  director: string
  release_date: Date
  opening_crawl: string
  characters: string[]
  species: string[]
  starships: string[]
  vehicles: string[]
  planets: string[]
  url: string
}
