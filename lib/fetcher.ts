export default function fetcher(input: RequestInfo | URL, init?: RequestInit) {
  return fetch(input, init).then(res => res.json());
}
