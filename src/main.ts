import type { IFilms, IFilmsResult } from "./interfaces/IFilms"
import type { IPeople, IPeopleResult } from "./interfaces/IPeople"
import type { IPlanets, IPlanetsResult } from "./interfaces/IPlanets"
import "./style.css"

// #DOM variables
const filmsElement = document.getElementById("films") as HTMLAnchorElement
const planetsElement = document.getElementById("planets") as HTMLAnchorElement
const peopleElement = document.getElementById("people") as HTMLAnchorElement
const searchBar = document.getElementById("searchBar") as HTMLInputElement
const divOutput = document.getElementById("results") as HTMLDivElement

// # url

// root url: https://www.swapi.tech/api
const BASE_URL = `https://swapi.tech/api/`
const FILMS_URL = `${BASE_URL}/films/`
const PLANETS_URL = `${BASE_URL}/planets/`
const PEOPLE_URL = `${BASE_URL}/people/`

// https://www.swapi.tech/api/people/?name=r2

// Endpoints Films:
// /films/ -- get all the film resources
// /films/:id/ -- get a specific film resource

// Endpoints Planets
// /planets/ -- get all the planets resources
// /planets/:id/ -- get a specific planets resource

// Endpoints People:
// /people/ -- get all the people resources
// /people/:id/ -- get a specific people resource

// fetch("https://www.swapi.tech/api/planets/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))

// #films
filmsElement.addEventListener("click", async () => {
  searchBar.style.display = "none"
  divOutput.innerHTML = ""

  try {
    const resp = await fetch(FILMS_URL)
    // console.log(resp)
    const { result } = (await resp.json()) as IFilms

    result.forEach((filmResult: IFilmsResult) => {
      const divContainer = document.createElement("div") as HTMLDivElement
      divContainer.className = "divContainer"
      divContainer.innerHTML = displayFilms(filmResult)
      divOutput.appendChild(divContainer)
    })
  } catch (error) {
    console.error(error)
  }
})

function displayFilms(film: IFilmsResult): string {
  const resultAsString = `
<div>
<p>${film.description}</p>
<p>${film.uid}</p>
</div>
`
  return resultAsString
}

// <p>${film.properties}</p>

// #planets
planetsElement.addEventListener("click", async () => {
  searchBar.style.display = "none"
  divOutput.innerHTML = ""

  try {
    const resp = await fetch(PLANETS_URL)
    // console.log(resp)
    const { results } = (await resp.json()) as IPlanets

    results.forEach((planetResult: IPlanetsResult) => {
      const divContainer = document.createElement("div") as HTMLDivElement
      divContainer.className = "divContainer"
      divContainer.innerHTML = displayPlanets(planetResult)
      divOutput.appendChild(divContainer)
    })
  } catch (error) {
    console.error(error)
  }
})

function displayPlanets(planet: IPlanetsResult): string {
  const resultAsString = `
<div>
<p>${planet.uid}</p>
<p>${planet.name}</p>
</div>
`
  return resultAsString
}

// #people
peopleElement.addEventListener("click", async () => {
  searchBar.style.display = "none"
  divOutput.innerHTML = ""

  try {
    const resp = await fetch(PEOPLE_URL)
    // console.log(resp)
    const { results } = (await resp.json()) as IPeople

    results.forEach((peopleResult: IPeopleResult) => {
      const divContainer = document.createElement("div") as HTMLDivElement
      divContainer.className = "divContainer"
      divContainer.innerHTML = displayPeople(peopleResult)
      divOutput.appendChild(divContainer)
    })
  } catch (error) {
    console.error(error)
  }
})

function displayPeople(people: IPeopleResult): string {
  const resultAsString = `
<div>
<p>${people.uid}</p>
<p>${people.name}</p>
</div>
`
  return resultAsString
}
