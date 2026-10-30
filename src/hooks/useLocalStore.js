import { useState, useEffect } from "react";

// Panandaliang database sa browser (localStorage). Papalitan ng backend API sa susunod.
export function readStore(key, seed) {
  try {
    const raw = localStorage.getItem("smartcivi:" + key);
    return raw ? JSON.parse(raw) : seed;
  } catch {
    return seed;
  }
}

export default function useLocalStore(key, seed) {
  const [items, setItems] = useState(() => readStore(key, seed));
  useEffect(() => {
    try {
      localStorage.setItem("smartcivi:" + key, JSON.stringify(items));
    } catch { /* ignore */ }
  }, [key, items]);
  return [items, setItems];
}