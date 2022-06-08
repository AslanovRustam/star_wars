const baseUrl = "https://swapi.dev/api/";

async function fetchWithErrorHendling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchList(apiRequest) {
  return fetchWithErrorHendling(`${baseUrl}${apiRequest}`);
}
export function fetchData(apiRequest) {
  return fetchWithErrorHendling(`${apiRequest}`);
}
export function fetchDataPages(apiRequest) {
  return fetchWithErrorHendling(`${apiRequest}`);
}
export function fetchCategory() {
  return fetchWithErrorHendling(baseUrl);
}