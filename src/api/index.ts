
export const BASE_URL = 'https://rickandmortyapi.com/api/character';

export function api<T>(url: string): Promise<T> {
  // TODO: Use abort controller, to handle race conditions and get the right data
  // or even better use react-query or third party fetcher
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
}
