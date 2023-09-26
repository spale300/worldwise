import { useEffect, useState } from "react";

export function App() {
  const [cities, setCities] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        setCities(data);
      } finally {
      }
    }
    try {
    } catch {
      alert("there was an error loading data... ");
    }
  });
}
