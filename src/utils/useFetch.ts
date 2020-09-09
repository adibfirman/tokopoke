import { useState, useEffect } from "react";

export default function useFetch<T>(url: string) {
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState<T>();

  useEffect(() => {
    (async function getData() {
      setLoading(true);

      const fetchAPI = await fetch(url);
      const getJson = await fetchAPI.json();

      setResult(getJson);
      setLoading(false);
    })();
  }, [url]);

  return { isLoading, result } as const;
}
