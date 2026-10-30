const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export async function getData(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}
