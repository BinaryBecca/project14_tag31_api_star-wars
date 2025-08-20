export interface IPeople {
  message: string
  total_records: number
  total_pages: number
  previous: null
  next: string
  results: IPeopleResult[]
}

export interface IPeopleResult {
  uid: string
  name: string
  url: string
}
