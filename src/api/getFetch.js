const baseUrl = "https://swapi.dev/api/";

async function fetchWithErrorHendling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchFilms() {
  return fetchWithErrorHendling(`${baseUrl}films/`);
  // fetch(`${baseUrl}films/`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //       console.log('films fetch',data);
  //     return data
  //   }).catch(err=>{
  //     console.log('err fetch',err);
  //     return err})
}
export function fetchPeople() {
  return fetchWithErrorHendling(`${baseUrl}people/`);
}
export function fetchPlanets() {
    return fetchWithErrorHendling(`${baseUrl}planets/`);
  }
  export function fetchSpecies() {
    return fetchWithErrorHendling(`${baseUrl}species/`);
  }
  export function fetchStarships() {
    return fetchWithErrorHendling(`${baseUrl}starships/`);
  }
  export function fetchVehicles() {
    return fetchWithErrorHendling(`${baseUrl}vehicles/`);
  }