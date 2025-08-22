export interface IPlanets {
  results: IPlanetsResult[]
}

export interface IPlanetsResult {
  name: string
  url: string
}

export interface IPlanetDescription {
  result: IPlanetDescriptionResult
}

export interface IPlanetDescriptionResult {
  properties: IPlanetProperties
  description: string
}

export interface IPlanetProperties {
  climate: string
  surface_water: string
  name: string
  diameter: string
  rotation_period: string
  terrain: string
  gravity: string
  orbital_period: string
  population: string
  url: string
}
